import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator , DrawerNavigator, StackNavigator} from 'react-navigation';
 import Splash from './src/component/Splash';
 import Home from './src/component/Home';



import {createStore} from 'redux';
import {Provider} from 'react-redux';


const initialState ={
  mUserId :false
}
const reduer =(state =initialState, action)=>{

    switch(action.type)
    {
    case 'LOGIN':

    return {mUserId:state.mUserId =true}
    case 'LOGOUT':

    return {mUserId:state.mUserId = false}
    

    }
  return state
}

const store =createStore(reduer)



onAuthentication = (screenName) =>{

  this.props.navigation.navigate(screenName)

  };

const Navigation= StackNavigator({

  Splash :{screen: Splash},
  // Main :{screen: Main},
  // Login :{screen: Login},
  // Pickup : {screen : Pickup},
  // Address :{screen: Address},
   Home:{screen: Home},
  // SignUp:{screen:SignUp},
  // MainHome:{screen:MainHome},


})

export default class App extends Component {
  render() {
    return (

     <Provider  store={store}>
 <Navigation/>
     </Provider>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },
  titleText: {

    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'

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
});
