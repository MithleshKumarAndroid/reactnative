import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default class About extends Component
{
  openMain=()=>{

      this.props.navigation.navigate('Main')

  };

    render()
    {


        return(

            <View style={{flex:1, width: '100%'}} >
              <Image source={require('../../img/about_banner.png')}  style={{width: '100%', height: '65%'}}  />
              <View style={{width: '100%', height: '35%', justifyContent: 'center', alignItems: 'center', alignItems: 'center'}}>

<Text  style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10}}> About Pickup</Text>
<Text> Dummy Text</Text>
<Text> Dummy Text</Text>
<Text> Dummy Text</Text>
<Text> Dummy Text</Text>
<Text> Dummy Text</Text>

<TouchableOpacity   onPress={this.openMain} style={{borderRadius: 10,width: 100, height: 50,marginTop: 10,marginBottom: 10,justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#FF696D'}}>
  <Text style={{color: 'white'}}> DONE


  </Text>

</TouchableOpacity>



              </View>



            </View>


        )


    }


}
