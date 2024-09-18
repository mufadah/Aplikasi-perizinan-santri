import { registerCallableModule, StyleSheet, Text, View,TextInput,Image,TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, {useState} from 'react'

const Register = ({navigation}) => {
const [cariAman, setCariAman]= useState(true)

const secureOpen = ()=>{
    setCariAman(!cariAman)
}
const handlerRegister =()=>{
    navigation.navigate('Bottom')
}

  return (
    <ScrollView style={styles.container1}>
    <View style={styles.container}>

    <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
     <Text style={styles.Text} numberOfLines={2}>Data Perizinan</Text>
     
     <Text style={styles.register}>Register</Text>
     <Text style={styles.Text1}>Daftar agar bisa Login</Text>
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

      {/* WhatsApp */}
      <Text style={styles.Text2}>No. WhatsApp</Text>
      <TextInput placeholder='Masukan nomer WhatsApp anda' placeholderTextColor='#988E8E' style={styles.input} keyboardType='numeric' maxLength={13}/>
      
      <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.enter_choice}>
        <Text style={styles.enter_choice_text}>Masuk sebagai</Text>
        <Image source={{uri:'https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png'}} style={styles.arrow_down}/>
      </View>
      </TouchableOpacity>

      
        <TouchableOpacity activeOpacity={0.5} style={styles.sure} onPress={handlerRegister}>
            <Text style={styles.sure_text}>Register</Text>
        </TouchableOpacity>
      
      <View style={styles.bottom}>
        <Text style={styles.question}>Sudah punya akun ?  </Text>
      <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.login_text}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },
    register:{
        marginTop:10,
        marginLeft:-220,
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    Text:{
        marginTop:5,
        color:'#4c12c3',
        fontWeight:'bold',
        fontSize:60
    },
    Text1:{
        // textDecorationLine:'underline',
        marginTop:10,
        marginLeft:-130,
        color:'black',
        fontSize:15,
        // fontWeight:'bold'
    },
    Text2:{
        marginTop:20,
        color:'black',
        fontSize:12,
        fontWeight:'bold',
        marginLeft:-215
    },
    Text4:{
        marginTop:40,
        color:'black',
        fontSize:12,
        fontWeight:'bold',
        marginLeft:-257
    },
    Text5:{
        marginTop:20,
        color:'black',
        fontSize:12,
        fontWeight:'bold',
        marginLeft:-245
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
    center:{
        // marginLeft:50,
        flexDirection:'row'
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
    eyes:{
        marginTop:20,
        marginLeft:-10,
        width:30,
        height:30
    },
    container1:{
        flex:1,
        // alignItems:'center',
        backgroundColor:'white'
    },
    enter_choice:{
        flexDirection:'row',
        width:150,
        height:50,
        backgroundColor:'#2886ca',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:10,
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
    sure:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        width:300,
        height:50,
        backgroundColor:'#2886ca',
        borderRadius:7
    },
    sure_text:{
        color:'white',
        fontWeight:'bold'
    },
    question:{
        color:'black'
    },
    login_text:{
        color:'#77b3d8'
    },
    bottom:{
        marginTop:20,
        flexDirection:'row'
    }
})