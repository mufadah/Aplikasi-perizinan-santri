import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Data = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Data Perizinan</Text>
        </View>
        <View style={styles.bottom_header}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Riwayat')}>
          <Text style={styles.Text}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Event')}>
          <Text style={styles.Text}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Mitra')}>
          <Text style={styles.Text}>Mitra</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Data

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  header:{
    width:'100%',
    height:70,
    backgroundColor:'#6f46dd',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },
  header_text:{
    color:'white',
    fontWeight:'bold',
    fontSize:25
  },
  bottom_header:{
    marginTop:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  Text1:{
    color:'black',
    fontSize:15,
    textDecorationLine:'underline',
    fontWeight:'bold'
  },
  Text2:{
    color:'black',
    fontSize:15,
    // textDecorationLine:'underline'
  },
  Text3:{
    color:'black',
    fontSize:15,
    // textDecorationLine:'underline'
  },
  Text:{
    color:'black',
    fontSize:15,
    fontWeight:'bold'
  },
})