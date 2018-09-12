import React, {Component} from 'react';
import {Image, TouchableOpacity, Text,  View, StyleSheet, AsyncStorage, } from 'react-native';


export default class LoginorSignUpPage extends Component
{


     constructor(props)
     {
         super(props);
         this.state={
             DialogVisible: true,
         }

     }

     login=()=>{

     console.log('Login');
     
        this.props.navigation.navigate('Login')
        };
        signup=()=>{
             
             console.log('SignupClick');
             
             this.props.navigation.navigate('SignUp')
         };
    back=()=> {

       
        
        this.props.navigation.navigate('OrderDetails')
      };
    payment=()=>{

        this.props.navigation.navigate('Payment')
    }


     
    render(){

        return(
            <View style={styless.containor}> 
         


<View style={{flexDirection: 'row', width:'100%', height: 75,backgroundColor:  'white'}}>
      <TouchableOpacity  onPress={this.back}  style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
      <Image style={{width:20, height: 15,padding: 5,marginTop: 45, marginLeft:10, marginRight: 10}}  source={require('../../img/left_back.png')}/>

      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', fontSize: 30,  marginTop: 30}}>  Log In or Sign Up</Text>



     </View>
       <View style={{width: '100%', height:'100%', justifyContent: 'center', alignContent:'center'}}> 
          
          <View style={{marginLeft: 10, marginRight: 10, borderRadius:10, backgroundColor:'#214B63'}}>
         <View  style={{marginTop: 20, marginBottom: 20, marginLeft:10, marginRight:10}}>
         <Text style={styless.simpleText} >Login or signup to earn Pickup loyalty points and to save your order history and contacts.</Text>
        
          <View style={{width: '100%', height : 50, flexDirection: 'row', marginTop: 30, marginBottom: 30}} >
          <TouchableOpacity style={styless.signButton}
          onPress={this.login}
          >
          <Text style={styless.simpleText}>SIGNIN</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styless.loginButton}
          onPress={this.signup}
          >
          <Text  style={styless.simpleText}>SIGNUP</Text>

          </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width: '100%'}}
          onPress={this.payment}
          >
          <Text style={styless.simpleText}>CONTINUE AS GUEST</Text>
          </TouchableOpacity>
        
          <View style={{justifyContent: 'center', alignContent:'center', width: '100%', flexDirection: 'row'}}>
          <View style={{width:'30%', height:2}}>

          </View>
          <View style={{backgroundColor: 'white', justifyContent: 'center', alignContent: 'center', width: '40%',height: 1, marginBottom: 10, marginTop: 30}}>
               
               </View>
               <View style={{width:'30%', height:2}}>

</View>
          </View>
        
         
         </View>
        

          </View>
          
          </View>     

            </View>

        );
    }
}


const styless= StyleSheet.create({
   containor:{
    flex: 1,
    width: '100%',
    height: '100%',


   },
   title:{
    fontWeight: 'bold', 
    fontSize: 30, 
     marginTop: 30,
     color: 'black',
     

    
   },
   simpleText:{
       color: 'white',
       width: '100%',
        textAlign: 'center',
        
   },
   signButton:{
       width: '48%',
    borderRadius: 10,
    color:'white',
    justifyContent: 'center',
    backgroundColor: '#62AAC3',
    marginLeft: 5,
    marginRight:3,
    alignContent:'center'

   },
   loginButton:{
    width: '48%',
    borderRadius: 10,
    color:'white',
   justifyContent: 'center',
    backgroundColor: '#FF696D',
    marginRight: 5,
    marginLeft: 3,
    alignContent:'center'

   }
});
