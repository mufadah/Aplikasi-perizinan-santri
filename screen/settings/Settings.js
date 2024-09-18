import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#6f46dd'}/>
      <View style={styles.header}>
        <Text style={styles.header_text}>Profile</Text>
      </View>

      <View style={styles.core}>
        <Image source={require('../assets/Buddha.png')} style={styles.profile_picture}/>

        <TouchableOpacity activeOpacity={0.4} style={styles.edit}>
              <Icon name='pencil-outline' size={25} style={{color:'black'}}/>
        </TouchableOpacity>

        <Text style={styles.Text}>Edit foto</Text>

        <Text style={styles.Text1}>Fulanah</Text>
        <Text style={styles.Text2}>Musyrif</Text>

        <View style={styles.keterangan1}>
            <View style={styles.dalam_keterangan}>
                <Icon name='whatsapp' size={25} style={styles.icon}/>
                <Text style={styles.keterangan2}>WhatsApp</Text>
                <Text style={styles.keterangan3}>+62 895-6223-96720</Text>
                <Icon name='arrow-right' size={25} style={styles.icon}/>
            </View>
        
            <View style={styles.dalam_keterangan1}>
                <Icon name='calendar-text-outline' size={25} style={styles.icon}/>
                <Text style={styles.keterangan4}>Event</Text>
                <Icon name='arrow-right' size={25} style={styles.icon}/>
            </View>

            <View style={styles.dalam_keterangan1}>
                <Icon name='help' size={20} style={styles.icon1}/>
                <Text style={styles.keterangan}>Hukuman & laporan</Text>
                <Icon name='arrow-right' size={25} style={styles.icon}/>
            </View>

          <View style={styles.bawah}>
            <TouchableOpacity style={styles.tombol_keluar} onPress={() => navigation.navigate ('Login')}>
                <Text style={styles.keluar}>Log out</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fcfff1'
  },
  header:{
    width:'100%',
    height:70,
    backgroundColor:'#6f46dd',
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
  },
  header_text:{
    color:'white',
    fontFamily:'Poppins-Medium',
    fontSize:35
  },
  profile_picture:{
    marginTop:20,
    width:150,
    height:150,
    borderRadius:150,
    borderWidth:2,
    borderColor:'#06644d'
  },
  core:{
    alignItems:'center'
  },
  edit:{
    marginTop:-50,
    marginRight:-120,
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'white',
    borderWidth:5
  },
  Text:{
    color:'blue',
    fontSize:15,
    marginTop:5,
    marginRight:-10
  },
  Text1:{
    fontFamily:'Poppins-Medium',
    color:'black',
    fontSize:25,
    marginTop:10,
    marginRight:-10
  },
  Text2:{
    fontFamily:'Poppins-Medium',
    color:'grey',
    fontSize:15,
    // marginTop:5,
    marginRight:-10
  },
  keterangan:{
    marginLeft:-110,
    color:'#988e8e',
    fontSize:15
  },
  keterangan2:{
    color:'#988e8e',
    fontSize:15,
    marginLeft:-15
  },
  keterangan3:{
    color:'#988e8e',
    fontSize:12,
    marginLeft:-15,
    marginLeft:30,
    marginRight:-30
  },
  keterangan4:{
    marginLeft:-220,
    color:'#988e8e',
    fontSize:15
  },
  keterangan1:{
    padding:12
    // flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'space-evenly',
    // width:350,
    // height:50,
    // elevation:5,
    // backgroundColor:'white',
    // borderRadius:5
  },
  icon:{
    marginLeft:5,
    color:'#988e8e'
  },
  icon1:{
    marginLeft:7,
    color:'#988e8e'
  },
  dalam_keterangan1:{
   flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:350,
    height:50,
    elevation:5,
    backgroundColor:'white',
    borderRadius:5,
    marginTop:10
  },
  dalam_keterangan:{
   flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:350,
    height:50,
    elevation:5,
    backgroundColor:'white',
    borderRadius:5
  },
  keluar:{
    color:'red'
  },
  tombol_keluar:{
    width:200,
    height:50,
    alignItems:'center',
    marginTop:30,
    justifyContent:'center',
    backgroundColor:'white',
    elevation:5,
    borderRadius:10,
  },
  bawah:{
    alignItems:'center',
    elevation:5
  }
})