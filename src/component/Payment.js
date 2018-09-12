import React, {Component} from 'react';
import {Image, TouchableOpacity, Text,  View, StyleSheet, AsyncStorage, } from 'react-native';

export default class Payment extends Component
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
     
       this.props.navigation.navigate('Route')
        };
        signup=()=>{
             
             console.log('SignupClick');
             
             this.props.navigation.navigate('Route')
         };
    back=()=> {

       
        
        this.props.navigation.navigate('OrderDetails')
      };



        // componentWillMount()
        // {
        //     AsyncStorage.getItem('UserId').then((value)=>{

        //         console.log(value);
                

        //     }).catch((e)=>{

        //         console.log(e);
                
        //     });


        // }
    render(){

        return(
            <View style={styless.containor}> 
             
     <View style={{flexDirection: 'row', width:'100%', height: 75,backgroundColor:  'white'}}>
      <TouchableOpacity  onPress={this.back}  style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
      <Image style={{width:20, height: 15,padding: 5,marginTop: 45, marginLeft:10, marginRight: 10}}  source={require('../../img/left_back.png')}/>

      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', fontSize: 30,  marginTop: 30}}> Payment</Text>



     </View>

       <View style={{width: '100%', height:'100%', justifyContent: 'center', alignContent:'center'}}> 
          
          <View style={{marginLeft: 10, marginRight: 10, borderRadius:10, backgroundColor:'#214b63'}}>
         <View  style={{marginTop: 20, marginBottom: 20, marginLeft:10, marginRight:10}}>
         <Text style={styless.simpleText} >Estimated Pickup time: 14 Mins</Text>
         <Text style={{width: '100%', color: '#ffffff', fontWeight:'bold', textAlign: 'center', marginTop: 15, }}>
         BHD28-32

         </Text>
         <Text style={styless.simpleText} >Pickup Estimate</Text>
         <TouchableOpacity style={styless.signButton}
          onPress={this.login}
          >
          <Text style={styless.simpleText}>Pay with Pickup Account</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styless.loginButton}
          onPress={this.signup}
          >
          <View style={{width: '100%', height: '100%', justifyContent: "center", alignItems: "center", flexDirection: 'row'}}>
          <Text style={{color: 'white', marginRight: 10}} >Pay with</Text>
           <Image source={require('../../img/Paypal.png')}/>
          </View>
         

          </TouchableOpacity>
         
          <View style={{justifyContent: 'center', alignContent:'center', width: '100%', flexDirection: 'row'}}>
          <View style={{width:'30%', height:2}}>

          </View>
          <View style={{backgroundColor: 'white', justifyContent: 'center', alignContent: 'center', width: '40%',height: 1, marginBottom: 5, marginTop: 30}}>
               
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
       color: '#fff',
       width: '100%',
        textAlign: 'center',
   },
   signButton:{
       width: '97%',
    borderRadius: 10,
    color:'white',
    justifyContent: 'center',
    backgroundColor: '#62AAC3',
    marginRight: '2%',
    marginLeft:'2%',
    marginTop: 20,
    height: 45,
    alignContent:'center'

   },
   loginButton:{
    width: '97%',
    borderRadius: 10,
    color:'white',
   justifyContent: 'center',
    backgroundColor: '#FF696D',
    marginRight: '2%',
    marginLeft:'2%',
    marginTop: 10, 
    height: 45,
    alignContent:'center'

   }
});
