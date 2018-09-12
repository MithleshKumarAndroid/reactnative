import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';

export default class CheckPhoneNumber extends Component
{


   constructor(props)
  {
      super(props);
      
  }
  openOTP=()=>{

    this.props.navigation.navigate('CheckOtp')
  }

  render()
  {

    return(
     <View style={Styless.containor}>
     <View style={{ marginTop: 70,marginLeft: 15, marginRight:15,}}>

    
     <Text style={Styless.textTitle}>Enter your</Text>
     <Text style={Styless.textTitle}>phone</Text>
     <Text  style={Styless.textTitle}>number:</Text>

  <View style={{elevation: 10, marginTop: 40, marginBottom:40, backgroundColor: '#454F63', borderRadius: 10, color: 'white',
height: 45, flexDirection:'row', width:'100%'}}>

<View  style={{width: '15%', height: 45, justifyContent: 'center', alignContent: 'center', marginLeft:15}}>
<Image source={require('../../img/canada.png')}  />

</View>

<TextInput style={{elevation: 10,  backgroundColor: '#454F63',  color: 'white',
  height: 45,width: '75%',  paddingLeft:10, paddingRight:0}} placeholderTextColor="white" 
underlineColorAndroid={'transparent'} placeholder={'+1 (324)242-2457'} />
  
 
  


  </View>




     <TouchableOpacity style={{width: '100%', height: 45, borderRadius: 10, justifyContent: 'center', 
     alignItems: 'center', backgroundColor: '#62AAC3', }} onPress={this.openOTP} >
     <Text style={{color: 'white'}}>NEXT STEP</Text>

     </TouchableOpacity>
     </View>
     </View>



    );


  

  }
}

const Styless =StyleSheet.create({
  containor:{
   flex: 1,
   
   backgroundColor: '#214b63',
  
    
  },
  textTitle:{
    fontWeight: 'bold',
     color: 'white', 
     fontSize: 30,
     

  }


});