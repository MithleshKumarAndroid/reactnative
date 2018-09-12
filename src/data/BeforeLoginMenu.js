import React, {Component} from 'react';
import {View, ScrollView, ImageBackground, TouchableOpacity, Text, FlatList, StyleSheet, Image, DrawerActions} from 'react-native';
import headerData from './Header'
import Login from '../component/Login';
//import SignUp from '../component/SignUp';


export default class BeforeLoginMenu extends Component
{


    closeDrawer=()=>{


        this.props.navigation.closeDrawer();
    };
   login=()=>{

   this.props.navigation.navigate('Login')

   }
   signup=()=>{

   this.props.navigation.navigate('SignUp')

   }
    render(){


        const { navigate } = this.props.navigation;

        return(


            <ScrollView  style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', height: '100%'}}>
                  <ImageBackground style={{width: '100%', height: 250, justifyContent: 'center', textAlign: 'center'}} source={require('../../img/top.png')} >

                  <TouchableOpacity    onPress={this.login}
             style={{justifyContent: 'center', alignContent: 'center' , borderRadius: 10, backgroundColor: '#214B63',
             height: 45, width: 120, left: 80}} >
             <Text style={styles.textContinue}> LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity    onPress={this.signup}
             style={{justifyContent: 'center', alignContent: 'center' , borderRadius: 10, backgroundColor: '#62AAC3',
             height: 45, width: 120, left: 80, marginTop: 15}} >
             <Text style={styles.textContinue}> SIGNUP</Text>
              </TouchableOpacity>
                  </ImageBackground>
                  <Image source={require('../../img/gradient.png')}  style={{width: '100%', height:4}} />


                 <View style={{flex:1,justifyContent:'center',  alignItems: 'center', backgroundColor: 'white', width: '100%'}}>

                 <View style={{flex: 1 ,flexDirection: 'row', width: '100%'}}>
            <Image source={{uri: "https://a1professionals.net/react_native/home.png"}}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
            <TouchableOpacity onPress={this.closeDrawer}>
            <Text style={{marginLeft: 10 ,marginTop:25,  width: '100%', left: 10}} > {"Home"}</Text>
            </TouchableOpacity>
            </View>



            <View style={{flex: 1 ,flexDirection: 'row', width: '100%'}}>
            <Image source={{uri: "https://a1professionals.net/react_native/user.png"}}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
            <TouchableOpacity onPress={()=>navigate('ContactUs')}>
            <Text style={{marginLeft: 10 ,marginTop:25,  width: '100%', left: 10}} > {"Contact Us"}</Text>
            </TouchableOpacity>
            </View>

            <View style={{flex: 1 ,flexDirection: 'row', width: '100%'}}>
            <Image source={{uri: "https://a1professionals.net/react_native/about.png"}}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
            <TouchableOpacity onPress={()=>navigate('AboutUs')}>
            <Text style={{marginLeft: 10 ,marginTop:25,  width: '100%', left: 10}} > {"About Us"}</Text>
            </TouchableOpacity>
            </View>

            <View style={{flex: 1 ,flexDirection: 'row', width: '100%'}}>
            <Image source={{uri: "https://a1professionals.net/react_native/privacy.png"}}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
            <TouchableOpacity onPress={()=>navigate('PrivacyPolicy')}>
            <Text style={{marginLeft: 10 ,marginTop:25,  width: '100%', left: 10}} > {"Privacy Policy"}</Text>
            </TouchableOpacity>
            </View>



                 </View>


                   </View>
              </ScrollView>




        );


    }

}




class ListItem extends Component
{





    render(){

        const { navigate } = this.props.navigation;


        return(

            <View style={{flex: 1 ,flexDirection: 'row', width: 280}}>
            <Image source={{uri: this.props.item.image}}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
            <TouchableOpacity onPress={()=>navigate('Login2')}>
            <Text style={{marginLeft: 10 ,marginTop:25,  width: 200, left: 10}} > {this.props.item.name}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    textContinue:
    {
      color: 'white',
          width: '100%',
          textAlign: 'center',

    },
    texttitle:
    {
      color: 'black',
          width: '100%',
          textAlign: 'center',
          marginTop: 30,

    },

});
