import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Login from './Login';
import Register from './SignUp';
import Main from './Main';
import {createStackNavigator} from 'react-navigation';
import MainHome from './MainHome';

export default class Test extends Component {


     constructor(props)
     {
       super(props);
     }

  static navigationOptions = {
    swipeEnabled: false,
    drawerLockMode: "locked-closed",
    header: null

  };

  state = {
    first: true,
    Second: false
  };

  loginClick = () =>
  {


//this.props.navigation.navigate('Login')

 this.setState({first: true, Second: false})
  };
  signupClick = () =>
   {
this.props.navigation.navigate('Login')
  //this.setState({first: false, Second: true})


  };


static check =()=>{



};

  render()
  {
    return
     (
       <View style={{
        width: '100%',
        height: '100%'}}>
      <View style={{          width: '100%',
          height: 1,
          backgroundColor: '#BDBDBD',
          marginTop: 35
        }}>

        </View>

      <View style={{
          width: '100%',
          height: 53,
          flexDirection: 'row'
        }}>

        <View style={{
            width: '50%',
            height: 50
          }}>

          <TouchableOpacity style={{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }} onPress={this.loginClick}>
            <Text style={{
                fontWeight: 'bold'
              }}>SIGN IN</Text>

          </TouchableOpacity>

          {
            this.state.first && <Image source={require('../../img/gradient.png')} style={{
                  width: '100%',
                  height: 3
                }}/>
          }

        </View>

        <View style={{
            width: 1,
            height: 50,
            backgroundColor: '#BDBDBD'
          }}></View>

        <View style={{
            width: '50%',
            height: 50
          }}>

          <TouchableOpacity style={{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }} onPress={this.signupClick}>
            <Text style={{
                fontWeight: 'bold'
              }}>SIGN UP</Text>

          </TouchableOpacity>

          {
            this.state.Second && <Image source={require('../../img/gradient.png')} style={{
                  width: '100%',
                  height: 3
                }}/>
          }
        </View>

      </View>
      {this.state.first && <Login/>}
    {this.state.Second && <Register/>}



    </View>)
  }
}
