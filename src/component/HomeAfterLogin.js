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
import Home from './Home';
import Splash from './Splash';


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

}, {
  drawerPosition: 'left',
  contentComponent: props => <BeforeLoginMenu {...props}/>

});
const StackNavigation = createStackNavigator({


  Main: {screen: MyApp}

})
const AfterLogin = DrawerNavigator({
  
  MainHome:{screen:MainHome},
  Test: {screen: Test},
  OrderHistory: {screen: OrderHistory},
  Login: {screen: Login},
  Pickup: { screen: Pickup },
  Address: { screen: Address},
  AboutUs: {screen: AboutUs},
  OrderDetails: {screen: OrderDetails},
  ContactUs: {screen: ContactUs},
  SignUp: {screen: SignUp},
  Splash:{screen:Splash},
  Main:{screen:Main},
 
 



}, {
  drawerPosition: 'left',
  contentComponent: props => <Menu {...props}/>

});
const AfterStackNavigation = createStackNavigator({


  MainHome: {screen: AfterLogin}

})
export default class HomeAfterLogin extends Component {

  static navigationOptions = {
    gesturesEnabled: false,

    header: null
  };

     constructor(props)
     {
       super(props);
       this.state={
        mUserId: 'NOT'
      }
     }


  componentWillMount()
  {

    AsyncStorage.getItem('UserId').then((value)=>{

   console.log(value);
      if( value !=null)
      {
          this.setState({mUserId: value});
          console.log(this.state.mUserId);

      }
    }).catch((e)=>{
      this.setState({mUserId: 'NOT'});
       console.log(this.state.mUserId);
      console.log(e);
    })

    }

  render() {




      if(this.state.mUserId =='NOT')
      {
       console.log('MyApp');
       return (<MyApp/>);
      }
      else {

console.log('AfterLogin');
 return ( <AfterLogin/> );
      }



  }

}

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
