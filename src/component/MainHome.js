

import React, {Component}from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button, Header,Image, AsyncStorage} from 'react-native';

import Login from './Login';
import Pickup from './PickupNow';
import Address from './Address';
import OrderDetails from './OrderDetails';
import Menu from '../data/Menu';
import OrderHistory from './OrderHistory';
import AboutUs from './About';
import Test from './Test';
import SignUp from './SignUp';

import {connect} from 'react-redux';

 class MainHome  extends Component {



     constructor()
     {
      super();
      this.state={

        Logout: true,
      }

     }
  SampleFunction1=()=>{

    Alert.alert("Function Without Argument");

  };

  openLogin=()=> {
     this.props.navigation.navigate('Login')

  };
  openPickupNow =()=>{

    this.props.navigation.navigate('Pickup')

  };
  signUp=()=>{

  //  this.props.navigation.navigate('SignUp')

  this.props.login()

  };

  openMenu=()=>{

    this.props.navigation.openDrawer();
    

  };

  checkUser=()=>{


    console.log('MainHomefromMenu');
    
  }
   componentDidMount()
   {
     console.log('DidMount');
     
   }
 componentWillMount()
 {
    
    console.log("CheckState=",this.state.Logout);
    
    
   AsyncStorage.getItem('UserId').then((value)=>{

    var id= value;
      

      console.log(id);
   }).catch((error)=>{


   });

 }


  render() {
    gestures: {}
    console.log("MainHome=",this.props.mUserId);
    
     if(this.props.mUserId)
     {
      return (

        <ImageBackground style={styles.container} source={require('../../img/bg.png')}>
  
        <TouchableOpacity style={{width: 50,height: 50, left: 30, position: 'absolute', top: 50}}
       onPress={ this.openMenu }
        >
        <Image source={require('../../img/menu.png')}   style={{width:20, height: 14}} />
  
        </TouchableOpacity>
  
  
          <Text style={styles.titleText} >Pickup</Text>
          <Text style={styles.titleText} >Logo</Text>
          <Text style={{marginTop: 20, color: 'white'}}>Changes you make will automatically reload.</Text>
          <Text  style={{color: 'white'}} > Shake your phone to open the developer menu.</Text>
  
  
       <View style={styles.bottomView} >
  
       <TouchableOpacity style={styles.touchView}  onPress={this.openPickupNow}>
       <Text style={{ padding: 10, color: 'white', alignItems: 'center'}} > PICKUP NOW</Text>
          </TouchableOpacity>
  
  
        </View>
        </ImageBackground>
      );
     

     }
     else 
     {
      
      return (

        <ImageBackground style={styles.container} source={require('../../img/bg.png')}>
  
        <TouchableOpacity style={{width: 50,height: 50, left: 30, position: 'absolute', top: 50}}
       onPress={ this.openMenu }
        >
        <Image source={require('../../img/menu.png')}   style={{width:20, height: 14}} />
  
        </TouchableOpacity>
  
  
          <Text style={styles.titleText} >Pickup</Text>
          <Text style={styles.titleText} >Logo</Text>
          <Text style={{marginTop: 20, color: 'white'}}>Changes you make will automatically reload.</Text>
          <Text  style={{color: 'white'}} > Shake your phone to open the developer menu.</Text>
  
  
       <View style={styles.bottomView} >
  
       <TouchableOpacity style={styles.touchView}  onPress={this.openPickupNow}>
       <Text style={{ padding: 10, color: 'white', alignItems: 'center'}} > PICKUP NOW</Text>
          </TouchableOpacity>
  
          <View  style={{width: '100%', height: 50, flexDirection: 'row'}}>
          <TouchableOpacity style={styles.touchLogin}  onPress={this.openLogin}  >
          <Text style={{ padding: 10, color: 'white'}} > LOG IN</Text></TouchableOpacity>
  
             <Text style={{width: '4%', height: 50}}> </Text>
             <TouchableOpacity style={styles.touchSign}   onPress={this.signUp}>
             <Text style={{ padding: 10, color: 'white'}} >
              SIGN UP</Text>
             </TouchableOpacity>
           </View>
  
        </View>
        </ImageBackground>
      );
     }
    
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
export default connect(mapStateToProps, mapToDispatchToProps)(MainHome)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',


  },
  bottomView:{
     width: '90%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20

  },
  touchView:{
  width: '100%',
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
   backgroundColor: '#EA6164'

  },
  touchLogin:
  {
    width: '48%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor:'#318FBB', marginTop: 10,
    marginBottom: 10, borderRadius: 8


  },
  touchSign:{
    width: '48%', height: 50, alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#62AAC3', marginTop: 10, borderRadius: 8

  }
})
