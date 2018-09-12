import React,{Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

export default class LoyalityPoint extends Component
{


  constructor(props)
  {
   super(props);


  }
  openPickup=()=>{


    this.props.navigation.goBack()
}
  render()
  {
      return(

      <View style={{width:'100%', height:'100%'}}>

            <View style={{flexDirection: 'row', width:'100%', height: 75,backgroundColor:  'white'}}>
      <TouchableOpacity  onPress={this.openPickup}  style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
      <Image style={{width:20, height: 15,padding: 5,marginTop: 45, marginLeft:10, marginRight: 10}}  source={require('../../img/left_back.png')}/>

      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', fontSize: 30,  marginTop: 30}}>LoyalityPoints</Text>



     </View>
     

    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
    <View style={{width:'90%', marginLeft: '5%', marginRight: '5%'}}>


   
     <View style={{ width:'100%',marginTop:0, marginBottom:0, backgroundColor: '#214B63',
      borderRadius:10, justifyContent:'center', alignContent: 'center', alignItems:'center'}}>
        <Image source={require('../../img/userphoto.png')}  style={{resizeMode:'contain' ,marginTop:15}}/>
         <Text style={{color:'white', marginTop:10, fontWeight:'bold', fontSize: 17}}>Alexa</Text>
         <Text style={{color:'#628091', marginBottom:10}}>Alexa</Text>
         <View style={{width:'90%', marginLeft:'5%', marginRight:'5%', backgroundColor:'#628091', height:1}}></View>
         <Text style={{color:'white', marginTop:20,marginBottom:20, fontWeight:'bold', fontSize: 20}}>BHD4.89</Text>
         <View style={{width:'90%', marginLeft:'5%', marginRight:'5%', backgroundColor:'#628091', height:1}}></View>
         <Text style={{color:'#628091', marginTop:10}}>Rate your trip</Text>
          <Image source={require('../../img/Rating.png')} style={{marginTop:8, marginBottom:20,resizeMode:'contain'}} />
         
         
     </View>
     </View>
     </View>
     </View>
      );

  }


} 