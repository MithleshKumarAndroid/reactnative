import React, {Component}from 'react';
import {Text, ImageBackground, View, StyleSheet, AsyncStorage} from 'react-native';




export default class Splash extends Component
{



    static navigationOptions = {
      header: null
    };



    componentWillMount()
    {

      console.log('WiilMount');
      
      let myInterval=  setInterval(()=>
      {
      this.props.navigation.navigate('Home')

      clearInterval(myInterval)

       }, 3000)

  }
  componentWillUpdate()
  {
   
    
    let myInterval=  setInterval(()=>
    {
    this.props.navigation.navigate('Home')

    clearInterval(myInterval)

     }, 3000)

  }
  componentWillUnmount()
  {
   mCheck= false;


  }


      render(){
          return (

           
            <ImageBackground  style={styles.imgBackground}  source={require('../../img/bg.png')}>

            <View  style={styles.container}>
            <Text style={styles.titleText} >Pickup</Text>
             <Text style={styles.titleText} >Logo</Text>
            </View>


            </ImageBackground>

          );
      }


  }
  const styles = StyleSheet.create({
      container: {
        flex :1,
       justifyContent: 'center',
       alignItems: 'center',

      },
      imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'

  },
    });
