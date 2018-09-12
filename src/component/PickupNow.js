import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button,ScrollView} from 'react-native';

export default class PickupNow extends Component
{


    static navigationOptions = ({ navigation}) => ({
        title: 'Notifications',
        headerTitle: 'Notifications',
      });

        openAddress=()=>{


            this.props.navigation.navigate('Address')

        };

        openMain=()=>{


            this.props.navigation.navigate('Main');
        };
        openOrderDetails =()=>{


            this.props.navigation.navigate('OrderDetails');
        }


    render()
    {

       return(



        <View style={styles.container}>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white', height: 100,}}   >
        <TouchableOpacity onPress={this.openMain} style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <Image style={{width:20, height: 15,marginTop:60, marginLeft:10}}  source={require('../../img/left_back.png')}
        />
        </TouchableOpacity>

            <Text style={{fontWeight: 'bold', marginLeft:15,fontSize:30 , marginTop: 35,alignItems: 'center',alignself: 'center'}} >PickUp Now</Text>



        </TouchableOpacity>
  <ScrollView  style={styles.container}>
    <View>

      <Text style={{marginLeft: 10, marginTop: 15}}>PICKUP ADDRESS </Text>
      <View  style={{  justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <TextInput  style={styles.editText}placeholder={"personalbar or Shop name"} underlineColorAndroid='transparent' />
       <TouchableOpacity  onPress={this.openAddress}  style={{  width: '90%', height: 80, backgroundColor: 'white', borderRadius: 5, marginTop: 10}} >
       <View style={{flexDirection: 'row'}}>
       <Image style={{width: 20, height: 20, marginLeft:5, marginTop:5}} source={require('../../img/location.png')}/>
       <Text style={{marginTop: 5}}>ADDRESS </Text>
       </View>

       </TouchableOpacity>
        <TextInput  style={styles.editText}
        placeholder={"Contact Phone Number"} underlineColorAndroid='transparent' />
       </View>
       <Text style={{marginLeft: 10, marginTop: 15}}>DROP OFF ADDRESS </Text>
       <View  style={{  justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <TextInput  style={styles.editText}
       placeholder={"personalbar or Shop name"} underlineColorAndroid='transparent' />

       <TouchableOpacity style={{  width: '90%', height: 80, backgroundColor: 'white', borderRadius: 5, marginTop: 10}} >
       <View style={{flexDirection: 'row'}}>
       <Image style={{width: 20, height: 20, marginLeft:5, marginTop:5}} source={require('../../img/location.png')}/>
       <Text style={{marginTop: 5}}>ADDRESS </Text>

       </View>
       </TouchableOpacity>
        <TextInput  style={styles.editText}
       placeholder={"Contact Phone Number"} underlineColorAndroid='transparent' />
       </View>

       <View style={{flexDirection: 'row', width:'100%', alignItems: 'center', justifyContent: 'center', marginTop: 15}}>

      <TouchableOpacity  style={styles.caneclButton}>
      <Text> CANCEL</Text>

           </TouchableOpacity>
           <TouchableOpacity  style={styles.nextButton} onPress={this.openOrderDetails}>
          <Text style={{color: 'white'}}> NEXT</Text>

           </TouchableOpacity>
            </View>

    </View>


    asdfew
    </ScrollView>
        </View>


       )




    }


}
const styles = StyleSheet.create({
    container: {
      flex :1,
       backgroundColor: '#F7F7FA',


    },
    editText:
    {
        backgroundColor: 'white',
        width: '90%',
        height: 40,
         paddingLeft: 10,
         paddingRight:10,
         borderRadius: 5,
         marginTop:10,


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


});
