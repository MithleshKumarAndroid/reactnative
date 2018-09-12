import React, {Component} from 'react';
import {ImageBackground,TouchableOpacity,Text,Image, TextInput, StyleSheet,View} from 'react-native';
import MapView from 'react-native-maps';

export default class Address extends Component
{

    static navigationOptions={

        header: null,
         drawerLockMode: "locked-closed",
    };


    openPickup=()=>{


        this.props.navigation.navigate('Pickup')

    };

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
          // Create the object to update this.state.mapRegion through the onRegionChange function
          let region = {
            latitude:       position.coords.latitude,
            longitude:      position.coords.longitude,
            latitudeDelta:  0.00922*1.5,
            longitudeDelta: 0.00421*1.5
          }
          this.onRegionChange(region, region.latitude, region.longitude);
        });
      };
      onRegionChange(region, lastLat, lastLong) {
          this.setState({
            mapRegion: region,
            // If there are no new values set the current ones
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
          });
        };
        componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
    state = {
  mapRegion: null,
  lastLat: null,
  lastLong: null,
}



    render() {
        const { region } = this.props;
        console.log(region);

        return (
          <View style ={styles.container}>
            <View style={{flexDirection: 'row', width:'100%', height: 75}}>
              <TouchableOpacity  onPress={this.openPickup}>
              <Image style={{width:20, height: 15,padding: 5,marginTop:40, marginLeft:10, marginRight: 10}}  source={require('../../img/left_back.png')}/>

              </TouchableOpacity>
                <TextInput  style={styles.editText}placeholder={"personalbar or Shop name"} underlineColorAndroid='transparent' />



             </View>


          <View>


            <MapView
                      style={styles.map}
                      region={this.state.mapRegion}
                      showsUserLocation={true}
                      followUserLocation={true}
                      onRegionChange={this.onRegionChange.bind(this)}>
                      <MapView.Marker
                        coordinate={{
                          latitude: (this.state.lastLat + 0.00050) || -36.82339,
                          longitude: (this.state.lastLong + 0.00050) || -73.03569,
                        }}>
                        <View>
                          <Text style={{color: '#000'}}>
                            { this.state.lastLong } / { this.state.lastLat }
                          </Text>
                        </View>
                      </MapView.Marker>
                    </MapView>
           </View>


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
