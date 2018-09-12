import React, {Component} from 'react';
import {DrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from 'react-native';

import Main from './Main';
import Login from './Login';
import Pickup from './PickupNow';

import Address from './Address';
import OrderDetails from './OrderDetails';
import Menu from '../data/Menu';
import OrderHistory from './OrderHistory';
import AboutUs from './About';
import ContactUs from './ContactUs';
import Test from './Test';
import SignUp from './SignUp';
import MainHome from './MainHome';
import BeforeLoginMenu from '../data/BeforeLoginMenu';
import HomeAfterLogin from './HomeAfterLogin';
import Splash from './Splash';
import LoginorSignUpPage from './LoginorSignUpPage';
import Payment from './Payment';
import CheckPhoneNumber from './CheckPhoneNumber';
import CheckOtp  from './CheckOtp';
import Route from './Route';
import LoyalityPoint from './LoyalityPoint';


import {connect} from 'react-redux';


const MyApp = DrawerNavigator({
  Main: {screen: Main},
  Test: {screen: Test},
  OrderHistory: {screen: OrderHistory},
  Login: {screen: Login},
  Pickup: { screen: Pickup },
  Address: { screen: Address},
  AboutUs: {screen: AboutUs},
  OrderDetails: {screen: OrderDetails},
  ContactUs: {screen: ContactUs},
  SignUp: {screen: SignUp},
  MainHome:{screen:MainHome},
  HomeAfterLogin:{screen:HomeAfterLogin},
  LoginorSignUpPage:{screen:LoginorSignUpPage},
  Payment:{screen:Payment},
  CheckPhoneNumber:{screen:CheckPhoneNumber},
  CheckOtp:{screen:CheckOtp},
  Route:{screen:Route},
  LoyalityPoint:{screen:LoyalityPoint},

  

}, {
  drawerPosition: 'left',
  //contentComponent: props => <BeforeLoginMenu {...props}/>
  contentComponent: props => <Menu {...props}/>
});
const StackNavigation = createStackNavigator({


  Main: {screen: MyApp}

})

 class Home extends Component {

  static navigationOptions = {
    gesturesEnabled: false,

    header: null
  };

     constructor(props)
     {
       super(props);
       
     }


  componentWillMount()
  {

    AsyncStorage.getItem('UserId').then((value)=>{

   console.log(value);
      if( value !=null)
      {
          this.setState({mUserId: value});
          console.log(this.state.mUserId);
          this.props.login()

      }
      else
      {

        this.props.logout()
      }
    }).catch((e)=>{
      this.setState({mUserId: 'NOT'});
       console.log(this.state.mUserId);
      console.log(e);
     
    })

    }

  render() {


    return (<MyApp/>);




  }

}
function mapStateToProps(state){

  return {

    mUserId: state.mUserId
  }

}
function mapToDispatchToProps(dispatch)
{
  return {
    login    :()=> dispatch({type: 'LOGIN'}),
    logout   :()=>dispatch({type: 'LOGOUT'}),
  }
}
export default connect(mapStateToProps, mapToDispatchToProps)(Home)
const styles = StyleSheet.create({
  textContinue: {
    color: 'white',
    width: '100%',
    textAlign: 'center'
  },
  texttitle: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginTop: 30
  }
});
