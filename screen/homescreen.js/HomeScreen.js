import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#6d37d6'}/>
    <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.goBack()} style={styles.arrow_back}>
    <Image source={require('../assets/back.png')} style={styles.arrow_back}/>
    </TouchableOpacity>

    <View style={styles.header}>
        <Text style={styles.Text_header}>Fulanah</Text>
        <Text style={styles.nomer}>+62 895 6223 96720</Text>
    </View>
        <View style={styles.inti}>

        {/* Perizinan */}
           <Text style={styles.Text}>Perizinan</Text>
           <View style={{flexDirection:'row'}}>
                <View style={styles.perizinan}>
                        <Image source={require('../assets/keluar.png')} style={styles.icon}/>
                        <Text style={styles.Text1}>Keluar</Text>
                </View>
                <View style={styles.perizinan}>
                        <Image source={require('../assets/device.png')} style={styles.icon1}/>
                        <Text style={styles.Text1}>Devices</Text>
                </View>
                <View style={styles.perizinan}>
                        <Image source={require('../assets/sakit.png')} style={styles.icon1}/>
                        <Text style={styles.Text1}>Sakit</Text>
                </View>
                <View style={styles.perizinan}>
                        <Image source={require('../assets/pulang.png')} style={styles.icon1}/>
                        <Text style={styles.Text1}>Pulang</Text>
                </View>
           </View>

           {/* Event */}
           
           <Text style={styles.event}>Event terdekat</Text>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           
           <Image source={{uri:'https://statik.tempo.co/data/2023/05/09/id_1202686/1202686_720.jpg'}} style={styles.event_poster} />
           <Image source={{uri:'https://i.ytimg.com/vi/mrv2AOJLxJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdSUXvwOERQNRK0gNZts55qWFcOw'}} style={styles.event_poster1}/>
           <Image source={{uri:'https://www.blibli.com/friends-backend/wp-content/uploads/2024/04/B111849-Cover-We-The-Fest-2024.jpg'}} style={styles.event_poster1}/>
           <Image source={{uri:'https://statik.tempo.co/data/2019/12/02/id_894159/894159_720.jpg'}} style={styles.event_poster1}/>
           </ScrollView>
           
           {/* <Icon name="rocket" size={30} color="#900" /> */}
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6d37d6',
        width:'100%',
        height:200,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    Text_header:{
        fontFamily:'Poppins-Regular',
        fontWeight:'bold',
        color:'white',
        fontSize:30
    },
    nomer:{
        color:'white',
        fontSize:12
    },
    Text:{
        // marginLeft:10,
        fontWeight:'bold',
        color:'black',
        fontSize:20,
    },
    inti:{
        padding:15
    },
    icon:{
        marginLeft:10,
        marginTop:20,
        borderRadius:10,
        width:70,
        height:70
    },
    Text1:{
        marginRight:-20,
        color:'black',
        fontSize:15
    },
    perizinan:{
        alignItems:'center'
    },
    icon1:{
        marginLeft:20,
        marginTop:20,
        borderRadius:10,
        width:70,
        height:70
    },
    event:{
        marginTop:20,
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    event_poster:{
        width:300,
        height:170,
        borderRadius:10
    },
    event_poster1:{
        width:300,
        height:170,
        borderRadius:10,
        marginLeft:20
    },
    arrow_back:{
        width:25,
        height:25,
        backgroundColor:'#6d37d6',
        position:'absolute',
        zIndex:99,
        marginLeft:5
    }
})