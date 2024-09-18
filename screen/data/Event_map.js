import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const Event_map = () => {
  return (
    <View style={styles.container}>
      <Text>Event_map</Text>
      <MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }} style={styles.map}
/>
    </View>
  )
}

export default Event_map

const styles = StyleSheet.create({
    container:{
        flex:1,
        ...StyleSheet.absoluteFillObject,
        justifyContent:'center',
        alignItems:'center'
    },
    map:{
        ...StyleSheet.absoluteFillObject,
    }
})