import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';

 class CheckOtp extends Component
{


 constructor(props)
 {
     super(props);
     
 }

 goback=()=>{

     this.props.login()
 }

 render()
 {
    const {goBack} =this.props.navigation;
    if(this.props.mUserId)
    {

      return (goBack());
    }
     else
     {
        return(
            <View style={Styless.containor}>
            <View style={{ marginTop: 70,marginLeft: 15, marginRight:15,}}>
        
           
            <Text style={Styless.textTitle}>Enter the PIN code received by SMS</Text>
           
        
        
        
        
        
         
        
         <TextInput style={{elevation: 10, marginTop: 50, marginBottom:40, backgroundColor: '#454F63',  borderRadius: 10,color: 'white',
        height: 45,width: '100%',  paddingLeft:10, paddingRight:10}}  underlineColorAndroid={'transparent'} 
         />
       
        
        
        
        
            <TouchableOpacity style={{width: '100%', height: 45, borderRadius: 10, justifyContent: 'center', 
            alignItems: 'center', backgroundColor: '#62AAC3', }} onPress={this.goback}>
            <Text style={{color: 'white'}}>FINISH</Text>
        
            </TouchableOpacity>
            </View>
            </View>
        
        
        
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
      login:()=> dispatch({type: 'LOGIN'}),
      logout:()=>dispatch({type: 'LOGOUT'}),
    }
  }
  export default connect(mapStateToProps, mapToDispatchToProps)(CheckOtp)
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