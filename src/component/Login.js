import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, StackNavigator} from 'react-native';
import UserData from '../data/UserData';
import { AsyncStorage} from 'react-native';
import {connect} from 'react-redux';


class Login extends Component {


  constructor(props)
  {
    super(props);
    
  }

  static navigationOptions = {
    header: null,
   drawerLockMode: "locked-closed",
  };

  state = {
    email: '',
    password: '',
    visible: false,

  };

  signupClick = () =>
   {
    this.props.navigation.navigate('SignUp')

  };
  submit = () => {

    if (this.state.email == '' && this.state.password == '') {
      Alert.alert(

        '',
        "Please enter Email and Password",
        [

          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },



        ],
        {
          cancelable: false
        }

      )


    }
    else if (this.state.email == '') {
      Alert.alert(

        '',
        "Please enter Email ",
        [

          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },



        ],
        {
          cancelable: false
        }

      )



    }
    else if (this.state.password == '') {

      Alert.alert(

        '',
        "Please enter Password",
        [

          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },



        ],
        {
          cancelable: false
        }

      )

    }
    else
    {
 UserData.setUserId('1');
 const value= AsyncStorage.getItem('UserId').then((value)=>{
 const id= value;
 console.log(id);
 this.props.login()


});
 }
  };


  render() 
  {
    const {goBack} =this.props.navigation;
  
     if(this.props.mUserId)
     {

      return (goBack())

     }
     else
     {

      
     
    return (

      <View style={styles.container}>
///////////////////////////HEADER///////////
<View style={{ width: '100%',
    height: 1,
    backgroundColor: '#BDBDBD',
    marginTop: 35
  }}>

  </View>

<View style={{ width: '100%',height: 53,
    flexDirection: 'row'}}>

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
    <Image source={require('../../img/gradient.png')} style={{
          width: '100%',
          height: 3
        }}/>


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
  </View>
</View>

////////////////////
        <View style={{ margin: 20 }}>
        <TouchableOpacity    onPress={this.continue}
           style={{ height: 50, width: '100%', justifyContent: 'center',alignContent:'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#4267B2',marginTop: 10}} >

           <View  style={{width: '100%', height: 50}}>
             <Image source={require('../../img/facebook.png')} style= {{width : '100%', height: '100%', resizeMode: 'contain'}} />
           </View>


              </TouchableOpacity>
          <TextInput placeholder={"Email"} style={styles.edittext} underlineColorAndroid={'transparent'}
            onChangeText={(value) => this.setState({ email: value })}
            value={this.state.email}
          />
          <TextInput placeholder={"Password"} style={styles.edittext} underlineColorAndroid={'transparent'} secureTextEntry={true}
            onChangeText={(value) => this.setState({ password: value })}
            value={this.state.password}
          />
          <View style={{ justifyContent: 'center' }} >
            <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 30}}>FORGOT PASSWORD</Text>
            <TouchableOpacity    onPress={this.submit}
           style={{justifyContent: 'center', alignContent: 'center' , borderRadius: 10, backgroundColor: '#FF696D',
           height: 45}} >
           <Text style={styles.textContinue}> CONTINUE</Text>
              </TouchableOpacity>
          </View>

        </View>


      </View>

    )
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
    login:()=> dispatch({type: 'LOGIN'}),
    logout:()=>dispatch({type: 'LOGOUT'}),
  }
}
export default connect(mapStateToProps, mapToDispatchToProps)(Login)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    height: '100%',
    width: '100%',

  },

  edittext:
  {

    borderColor: 'white',
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    marginTop: 15,
    paddingLeft: 15, 
    paddingRight: 10,
    borderRadius: 10
  },
  facebookButton:
  {
    height: 45,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',


  },

  forgot:
  {

    height: 50,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15

  },
  textContinue:
  {
    color: 'white',
        width: '100%',
        textAlign: 'center',

  },
});
