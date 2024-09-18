import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
          navigation.replace('Login')
        }, 9000);
      })
      
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={'#4308bf'} barStyle={'light-content'}/>

    <Icon name='file-outline' size={100} style={[styles.logo, {color:'white'}]}/>
    {/* <Image source={require('./assets/paper.png')} style={styles.logo}/> */}
      <Text style={styles.Text} numberOfLines={2}>Data Perizinan</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4308bf',
        alignItems:'center',
        justifyContent:'center'
    },
    Text:{
        color:'white',
        // fontWeight:'bold',
        fontSize:60,
        fontFamily:'Poppins-Medium'
    },
    logo:{
      backgroundColor:'#4308bf',
        width:100,
        height:100,
        marginBottom:-80,
        marginRight:-200
    }
})