import React, {Component} from 'react';
import {Image, TouchableOpacity, Text, TextInput, ScrollView, View, StyleSheet, AsyncStorage} from 'react-native';

export default class OrderDetails extends Component
{

  constructor(props)
  {
   super(props);
   this.state={
     login: false,
   }


  }

openPickup=()=>{


      this.props.navigation.navigate('Pickup')
}
openOrderDetails =()=>{


    console.log('Click');
    
  if(this.state.login)
  {
    this.props.navigation.navigate('Payment')
  }
  else
  {
    this.props.navigation.navigate('LoginorSignUpPage')
  }
  

};

componentWillMount()
{
AsyncStorage.getItem('UserId').then((value)=>{

  if(value !=null)
  {

    this.setState({login: true},)
  }

}).catch((e)=>{

  console.log(e);
  
})

}
    render(){

return(

  <View StyleSheet={styles.containor}>
    <View style={{flexDirection: 'row', width:'100%', height: 75,backgroundColor:  'white'}}>
      <TouchableOpacity  onPress={this.openPickup}  style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
      <Image style={{width:20, height: 15,padding: 5,marginTop: 45, marginLeft:10, marginRight: 10}}  source={require('../../img/left_back.png')}/>

      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', fontSize: 30,  marginTop: 30}}> Order Details</Text>



     </View>


<ScrollView>

  <Text style={{margin: 10}} > WHAT DO YOU NEED PICKUP UP?</Text>
  <TextInput
     style={{ maxHeight: 350, width: '90%', marginLeft: 20, paddingTop: 5, paddingLeft: 5, marginRight: 10, height: 220, borderRadius: 10, backgroundColor: 'white'}}
     placeholder={"Item Description"}
   multiline={true}
   />
<Text style={{margin: 10}} > ADDITIONALS DETAILS (OPTIONAL)</Text>
<View  style={{flexDirection: 'row', backgroundColor: 'white', width: '90%' , height: 45, marginLeft: 20, marginRight: 10, borderRadius: 10}}>
  <Text style={{width: '70%', height: 45, marginTop: 15,left: 15,marginBottom: 15}}>  Quantity</Text>
  <TouchableOpacity style={{width: '10%', height: 45}}>

<Image  style={{width: 25, height: 25, marginTop: 10, marginBottom: 10, justifyContent: 'center',alignItems: 'center'}} source={require('../../img/minus.png')} />
   </TouchableOpacity>

   <Text style={{width: 25,marginTop: 5, marginBottom: 5, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', left: 5, right: 5}}>1</Text>
   <TouchableOpacity style={{width: '10%', height: 45}}>

   <Image  style={{width: 25, height: 25, marginTop: 10, marginBottom: 10, justifyContent: 'center',alignItems: 'center'}} source={require('../../img/plus.png')} />
    </TouchableOpacity>
 </View>
<View  style={{flexDirection: 'row', backgroundColor: 'white', width: '90%' , height: 45, marginLeft: 20, marginTop: 20,marginRight: 10, borderRadius: 10}}>

 <Text style={{width: '85%', height: 45, marginTop: 15,left: 15,marginBottom: 15}}>  Photo</Text>
 <Image style={{justifyContent: 'center', alignSelf: 'center', width: 25, height: 25}} source={require('../../img/camera.png')} />
</View>
<View  style={{flexDirection: 'row', backgroundColor: 'white', width: '90%' , height: 45, marginLeft: 20, marginTop: 20,marginRight: 10, borderRadius: 10}}>

 <Text style={{width: '65%', height: 45, marginTop: 15,left: 15,marginBottom: 15}}>  Maximum Price to Pay</Text>
 <TextInput style={{width: '35%', height: 45}}
 placeholder="BHD"
 />
</View>

<View style={{flexDirection: 'row', width:'100%', alignItems: 'center', justifyContent: 'center', marginTop: 25}}>

<TouchableOpacity  style={styles.caneclButton}>
<Text> CANCEL</Text>

    </TouchableOpacity>
    <TouchableOpacity  style={styles.nextButton} onPress={this.openOrderDetails}>
   <Text style={{color: 'white'}}> NEXT</Text>

    </TouchableOpacity>
     </View></ScrollView>
  </View>

)







    }

}

const styles= StyleSheet.create({


containor:{
   flex: 1,

backgroundColor: '#F7F7FA',
},
nextButton:
{

    width: '45%', height: 50,
    backgroundColor: '#FF696D',
    borderRadius: 5,
    marginRight: 20,
     marginLeft: 5,
         alignItems: 'center',
         justifyContent: 'center'
},
caneclButton:
{
    width: '45%',
     height: 50,
     backgroundColor: '#E2E4EB',
     borderRadius: 5,
      marginLeft: 20,
    marginRight:5,
    alignItems: 'center',
    justifyContent: 'center'



},

})
