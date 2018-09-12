import React, {Component} from 'react';
import {View, ScrollView, ImageBackground, TouchableOpacity, Text, FlatList, StyleSheet, Image, 
    DrawerActions} from 'react-native';
import headerData from './Header';
import login from '../component/Login';
import Home from '../component/Home';
import Splash from '../component/Splash';
import SignUp from '../component/SignUp';
import {AsyncStorage} from 'react-native';

import {connect} from 'react-redux';




class Menu extends Component
{


    constructor(props)
    {
        super(props);
        this.state={
          afterLogin :'Not',

        };
    }

    closeDrawer=()=>{


        this.props.navigation.closeDrawer();
    };
   login=()=>{

 
   this.props.navigation.navigate('Login')
   }
   signup=()=>{
        
        console.log('SignupClick');
        
        this.props.navigation.navigate('SignUp')
    };
    logOut=()=>{

console.log('Logout');

this.props.logout()


  
  AsyncStorage.clear(); 
this.props.navigation.closeDrawer();

      

    }

    render(){


        const { navigate } = this.props.navigation;
         console.log('Menu=', this.props.mUserId);
         
        if(this.props.mUserId)
        {
            return(
               


                <ScrollView  style={{width: '100%', height: '100%'}}>
                <View style={{width: '100%', height: '100%'}}>
                      <ImageBackground style={{width: '100%', height: 250, justifyContent: 'center', textAlign: 'center'}} source={require('../../img/top.png')} >
                     
                     <Image source={require('../../img/Profile.png')} style={{width: 70, height: 70,  marginLeft: 30,marginBottom: 15}} />

                     <Text  style={styles.textName}>Ahmad Karam</Text>
    
                   
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
                <Image source={{uri:   "https://a1professionals.net/react_native/calender.png" }}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
                <TouchableOpacity onPress={()=>navigate('OrderHistory')}>
                <Text style={{marginLeft: 10 ,marginTop:25,  width: '100%', left: 10}} > {"Order History"}</Text>
                </TouchableOpacity>
                </View>
    
                <View style={{flex: 1 ,flexDirection: 'row', width: '100%'}}>
                <Image source={{uri:   "https://a1professionals.net/react_native/loylaty.png"}}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
                <TouchableOpacity onPress={()=>navigate('LoyalityPoint')}>
                <Text style={{marginLeft: 10 ,marginTop:25,  width: '100%', left: 10}} > {"Loyality Points"}</Text>
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
    
                <View style={{flex: 1 ,flexDirection: 'row', width: '100%'}}>
                <Image source={{uri: "https://a1professionals.net/react_native/logout.png"}}style={{width: 15, height:15 , left: 10, marginTop: 28}} />
                <TouchableOpacity onPress={this.logOut}>
                <Text style={{marginLeft: 10 ,marginTop:25,  width: '100%', left: 10}} > {"Log Out"}</Text>
                </TouchableOpacity>
                </View>
    
                     </View>
    
                  
                       </View>
                       
                  </ScrollView>
    
    
    
    
            );
           /////////////// 
             

           
        }
        else
        {
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

            ///////////////
            
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
  export default connect(mapStateToProps, mapToDispatchToProps)(Menu)


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
    textName:{

        color :'white',
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 20,    
    }

});
