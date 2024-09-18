import { Image, StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Icon from '@react-native-vector-icons/ionicons'

const Login = ({navigation}) => {
    const [cariAman, setCariAman]= useState(true)
    const handlerLogin = ()=>{
        navigation.navigate('Bottom')
    }

    const secureOpen = ()=>{
        setCariAman(!cariAman)
    }


  return (
    <ScrollView style={{flex:1,backgroundColor:'white',}}>
    <View style={styles.container}>
    <StatusBar backgroundColor={'white'} barStyle={'Dark-content'}/>
      <Text style={styles.Text} numberOfLines={2}>Data Perizinan</Text>
      <Text style={styles.Text1}>LOGIN</Text>
      <Text style={styles.Text3}>Yuk masuk untuk mengurus perizinan</Text>
      <View style={{width:300,backgroundColor:'black',height:1}}/>
      {/* User ID */}
      <Text style={styles.Text4}>User ID</Text>
      <TextInput placeholder='Masukan nama user ID anda' placeholderTextColor='#988E8E' style={styles.input}/>

      {/* Password */}
      
      <Text style={styles.Text5}>Password</Text>
      <View style={styles.center}>
      <TextInput placeholder='Masukan kata password anda' placeholderTextColor='#988E8E' style={styles.input1} secureTextEntry={cariAman}/>
      <TouchableOpacity activeOpacity={0.5} onPress={secureOpen}>
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XtkSHuaruq9pDF0XCYCvRn4ZIgBn_giIHA&s'}} style={styles.eyes}/>
      </TouchableOpacity>
      </View>

      <View style={styles.if_forget}>
      <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.enter_choice}>
        <Text style={styles.enter_choice_text}>Masuk sebagai</Text>
        <Image source={{uri:'https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png'}} style={styles.arrow_down}/>
      </View>
      </TouchableOpacity>
      
      <Text style={styles.forget}>Lupa password</Text>
      </View>
      <TouchableOpacity style={styles.login_button} onPress={()=>handlerLogin()}>
      <Text style={styles.login}>Login</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
      <Text style={styles.bottom_question}>Belum punya akun ? </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.register_text}>Register</Text>
      </TouchableOpacity>
      
      
      </View>
    </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    Text:{
        fontFamily:'Poppins-Medium',
        marginTop:5,
        color:'#4c12c3',
        // fontWeight:'bold',
        fontSize:60
    },
    Text1:{
        fontFamily:'Poppins-Regular',
        marginTop:5,
        color:'black',
        fontSize:20,
        marginLeft:-241,
        // fontWeight:'bold'
    },
    Text3:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    Text4:{
        marginTop:40,
        color:'black',
        fontSize:12,
        fontWeight:'bold',
        marginLeft:-257
    },
    center:{
        // marginLeft:50,
        flexDirection:'row'
    },
    eyes:{
        marginTop:20,
        marginLeft:-10,
        width:30,
        height:30
    },
    input:{
        color:'black',
        borderRadius:5,
        marginTop:10,
        paddingRight:50,
        width:300,
        height:50,
        borderWidth:0.5
        // elevation:1
    },
    input1:{
        color:'black',
        borderRadius:5,
        marginTop:10,
        paddingRight:50,
        width:300,
        height:50,
        borderWidth:0.5,
        // elevation:1
        marginLeft:15
    },
    photo:{
        position:'absolute',
        width:50,
        height:50
    },
    Text5:{
        marginTop:40,
        color:'black',
        fontSize:12,
        fontWeight:'bold',
        marginLeft:-245
    },
    enter_choice:{
        flexDirection:'row',
        width:150,
        height:50,
        backgroundColor:'#2886ca',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:20,
        marginLeft:-150
    },
    enter_choice_text:{
        color:'white',
        fontWeight:'bold'
    },
    arrow_down:{
        marginLeft:10,
        width:25,
        height:25
    },
    forget:{
        marginTop:30,
        color:'#77b3d8',
        marginRight:-200,
        marginLeft:50
    },
    if_forget:{
        flexDirection:'row'
    },
    login:{
        color:'white'
    },
    login_button:{
        marginTop:20,
        width:300,
        height:50,
        backgroundColor:'#2886ca',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    bottom_question:{
        color:'black',
        fontWeight:'bold'
    },
    register_text:{
        color:'#77b3d8'
    },
    bottom:{
        marginTop:20,
        flexDirection:'row',
        fontWeight:'bold'
    },
    
})