import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class OrderHistory extends Component
{



  constructor(props)
  {
    super(props);
   
     console.log("OrderMith");
     
   
  }


  static navigationOptions = {
  swipeEnabled:false,
  drawerLockMode: "locked-closed",
    header: null




  };

  

    openMain=()=>{

        this.props.navigation.navigate('Main')

    };
      componentWillMount()
      {

       
      

      }

    render(){

        return(

            <View>
                <View style={{flexDirection: 'row', width:'100%', height: 75,backgroundColor:  'white'}}>
      <TouchableOpacity   style={{width: 50, height: 75, marginLeft: 0}}   onPress={this.openMain}>
      <Image style={{width:20, height: 15,padding: 5,marginTop:40, marginLeft:15, marginRight: 10}}  source={require('../../img/left_back.png')}/>

      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', fontSize: 30,  marginTop: 30}}> Order History</Text>



     </View>

               <Text style={{marginTop: 25, marginLeft: 15}}> JAN 10 12:30 PM</Text>
               <View style={{marginLeft:20, marginTop: 10, marginRight:20, borderRadius: 10, height: 150,
                 backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >

                 <Image source={require('../../img/dot.png')} style={{width: 20,height: 70, marginLeft:0}} />

                 <View style={{width: "70%", height: 100, marginTop: 10, marginBottom: 10}}>
                   <View style={{width: "60%", height: 50, flexDirection: 'column', left: 20}}>

                  <Text style={{left: 5 , color: '#E0E0E0'}}>Pickup Location</Text>
                   <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}> Fresh Market</Text>
                     </View>
                     <View style={{width: '95%', marginLeft: 20, marginRight: 10, backgroundColor: '#E0E0E0', height: 1}}> </View>
                     <View style={{width: "60%", height: 50, flexDirection: 'column', left: 20, marginTop: 10}}>

                     <Text style={{left: 5, color: '#E0E0E0'}}>Destination Location</Text>
                     <Text style={{fontSize:16, fontWeight: 'bold', color: 'black'}}> Fresh Market</Text>
                       </View>

                 </View>



                     <Image  style={{marginTop: 35, marginBottom: 35}} source={require('../../img/check.png')} />
                     </View>



                     <Text style={{marginTop: 25, marginLeft: 15}}> JAN 10 12:30 PM</Text>
                     <View style={{marginLeft:20, marginTop: 10, marginRight:20, borderRadius: 10, height: 150,
                       backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >

                       <Image source={require('../../img/dot.png')} style={{width: 20,height: 70, marginLeft:0}} />

                       <View style={{width: "70%", height: 100, marginTop: 10, marginBottom: 10}}>
                         <View style={{width: "60%", height: 50, flexDirection: 'column', left: 20}}>

                        <Text style={{left: 5, color: '#E0E0E0'}}>Pickup Location</Text>
                         <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}> Fresh Market</Text>
                           </View>
                           <View style={{width: '95%', marginLeft: 20, marginRight: 10, backgroundColor: '#E0E0E0', height: 1}}> </View>
                           <View style={{width: "60%", height: 50, flexDirection: 'column', left: 20, marginTop: 10}}>

                           <Text style={{left: 5, color: '#E0E0E0'}}>Destination Location</Text>
                           <Text style={{fontSize:16, fontWeight: 'bold', color: 'black'}}> Fresh Market</Text>
                             </View>

                       </View>



                           <Image  style={{marginTop: 35, marginBottom: 35}} source={require('../../img/check.png')} />
                           </View>

                   </View>



        )



    }



}
