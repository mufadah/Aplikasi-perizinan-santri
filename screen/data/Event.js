import { StyleSheet, Text, View,TouchableOpacity, Image,FlatList } from 'react-native'
import React, { useState } from 'react'

const Event = ({navigation}) => {
  const handlerPress = ()=>{
    navigation.navigate('Map')
  }
    const [data, setData] = useState (
      [
        {
            gambar:'https://awsimages.detik.net.id/visual/2023/09/06/google-maps-ktt-asean_169.png?w=650',
            tempat:'Muslim bakers Indonesia',
            mall:'Grand Indonesia',
            tanggal:'10/30 - 08/12'
        },
        {
          gambar:'https://eventdigital.co/wp-content/uploads/2024/07/PP-ES-the-greatest-concert-ahmad-dhani-agustus-2024-Copy-500-x-500.jpg',
          tempat:'Muslim bakers Indonesia',
            mall:'Grand Indonesia',
            tanggal:'10/30 - 08/12'
        }
    ]
  )

    const renderItem = ({item}) => {
        return(
          <TouchableOpacity activeOpacity={0.7} onPress={()=> handlerPress()}>
        <View style={styles.map}>
            <Image source={{uri: item.gambar}} style={styles.picture}/>
            <View style={styles.samping}>
                <View style={styles.samping_lagi}>
                  <Image source={require('../assets/map.png')} style={styles.icon_map}/>
                  <Text style={styles.map_text}>{item.tempat}</Text>
                </View>
                <View style={styles.samping_lagi}>
                  <Image source={require('../assets/M.png')} style={styles.icon_map}/>
                  <Text style={styles.map_text}>{item.mall}</Text>
                </View>
                <View style={styles.samping_lagi}>
                  <Image source={require('../assets/kalender.png')} style={styles.icon_map}/>
                  <Text style={styles.map_text}>{item.tanggal}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.header_text}>Data Perizinan</Text>
        </View>
        <View style={styles.bottom_header}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Riwayat')}>
          <Text style={styles.Text}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} >
          <Text style={styles.Text1}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Mitra')}>
          <Text style={styles.Text}>Mitra</Text>
        </TouchableOpacity>
        </View>

    {/* bawah Header */}
    
   
    <FlatList 
    renderItem={renderItem}
    data={data}
    keyExtractor= {(item,) => item.toString}
    contentContainerStyle={{alignItems:'center',
    flex:1,}}
    />
  
    </View>
  )
}

export default Event

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
  Text:{
    color:'black',
    fontSize:15,
    fontWeight:'bold'
  },
  picture:{
    marginLeft:10,
    width:130,
    height:130
  },
  map:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
    // justifyContent:'center',
    width:350,
    height:150,
    backgroundColor:'white',
    elevation:10,
    borderRadius:5
  },
  map_text:{
    marginLeft:10,
    color:'black',
    fontSize:12
  },
  icon_map:{
    marginLeft:5,
    width:25,
    height:25
  },
  samping:{
    flexDirection:'column'
  },
  samping_lagi:{
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center'
  }
})