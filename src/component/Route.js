import React, {Component} from 'react';
import {StyleSheet,View, TouchableOpacity,Image, TextInput, Modal, Text,} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';


export default class Route extends Component
{

      constructor(props)
      {
          super(props);
          this.state={
              modalVisible:false
          };


      }

      componentWillMount()
      {
        const mode = 'driving'; // 'walking';
        const origin = 'Jalandhar punjab';
        const destination = 'Mohali Punjab';
        const APIKEY = 'AIzaSyDXnE5IvvqvbaNvDEsT8x2pvFoa69uTkGU';
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;
        console.log(url);
        
      console.log('Mith');
      

        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.routes.length) {
                this.setState({
                    coords: this.decode(responseJson.routes[0].overview_polyline.points) // definition below
                });
                console.log(responseJson);
                
            }
        }).catch(e => 
            {
                console.warn(e)
               console.log(e);
               
            });

      };
      decode =(t,e)=>{
        {for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;
            do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})}
    
      }
      
      
    static navigationOptions={

        header: null,
         drawerLockMode: "locked-closed",
    };
    openPickup=()=>{

     // this.props.navigation.goBack()
    
     this.setState({modalVisible:true})

    };
    goback=()=>{

        this.props.navigation.goBack()
    };
    close=()=>{
        this.setState({modalVisible:false})

    }
    
  
         


    render() {
        return(

        
       <View>
           

           <View style={{flexDirection: 'row', width:'100%', height: 75}}>
              <TouchableOpacity  onPress={this.openPickup}>
              <Image style={{width:20, height: 15,padding: 5,marginTop:40, marginLeft:10, marginRight: 10}}  source={require('../../img/left_back.png')}/>

              </TouchableOpacity>
                <TextInput  style={styles.editText}placeholder={"YourLocation > SushiPlace"} underlineColorAndroid='transparent' />



             </View>

          <Modal
          animationType ="none"
          transparent={true}
          visible={this.state.modalVisible}
           
          >
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
               <Image source={require('../../img/Rating.png')} style={{marginTop:8, resizeMode:'contain'}} />
              <TouchableOpacity style={{width:'90%', marginLeft:'5%', marginRight:'5%', height:45,borderRadius:10, marginTop:20,marginBottom:20,
               backgroundColor:'#FF696D', justifyContent:'center', alignContent:'center', alignItems:'center'}} onPress={this.goback}>


             <Text style={{color:'white'}}>SUBMIT RATINGS</Text>
              </TouchableOpacity>
              
          </View>
          <View style={{position:'absolute', marginTop:-10, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', width:'100%'}} >
             <Text style={{width:'35%'}}></Text>
             <Text style={{width:'35%'}}></Text>
             <TouchableOpacity onPress={this.close} >
             <Image source={require('../../img/cancel.png')} style={{width:30, height:30,marginTop:-5, marginRight:-5}}/>
             </TouchableOpacity>
         
          </View>
          </View>
          </View>
          </Modal>
              
              
                  
            <MapView
               style={{height:'100%',width:'100%'}}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
               
                >
               
                </MapView>
            
       </View>
        );
      }
     }
const styles = StyleSheet.create({
    container: {
      flex:1,
      width: '100%',
      flexDirection: 'column'


    },
    map: {
      height: '100%',
      width: '100%',

    },
    editText:
    {
        backgroundColor: 'white',
        width: '80%',
        height: 40,
         paddingLeft: 10,
         paddingRight:10,
         borderRadius: 10,
         marginTop:25,


    },
   });
