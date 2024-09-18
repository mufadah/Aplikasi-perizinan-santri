import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'


const Riwayat = ({navigation}) => {
    const [data, setData] = useState([
        {
            gambar:'https://www.banyumasekspres.id/wp-content/uploads/2022/02/Investasi-75-miliar-Raffi-Ahmad.jpg',
            nama:'Raffi Ahmad',
            keperluan:'Devices, untuk keperluan media',
            waktu:'09.30 - 17.000',
            tanggal:'08/02 - 10/12'
        },
        {
            gambar:'https://pbs.twimg.com/profile_images/1131887455953608704/Xm97Yw96_200x200.jpg',
            nama:'Opett',
            keperluan:'Devices, untuk keperluan media',
            waktu:'09.30 - 17.000',
            tanggal:'08/02 - 10/12'
        },
        {
            gambar:'https://www.blibli.com/friends-backend/wp-content/uploads/2023/01/B110501-cover.jpg',
            nama:'Asep',
            keperluan:'Devices, untuk keperluan media',
            waktu:'09.30 - 17.000',
            tanggal:'08/02 - 10/12'
        },
        {
            gambar:'data:image/jpeg;base64,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',
            nama:'Syariful Amar',
            keperluan:'Keluar, untuk keperluan pribadi',
            waktu:'-',
            tanggal:'01/02 - 12/12'
        },
        {
            gambar:'https://yt3.googleusercontent.com/I2CRTGoxM75Grmz3UFHVXG-4USo_t91cwOBAIPyJ6Fa94_7daaGmklUCjGckT6wYtWYPzVCsgYY=s900-c-k-c0x00ffffff-no-rj',
            nama:'Ferry irwandi',
            keperluan:'Devices, untuk keperluan media',
            waktu:'09.30 - 17.000',
            tanggal:'08/02 - 10/12'
        },

    ])

    const renderItem = ({item}) => {
        return(
            <View style={styles.keterangan_view}>
            <View style={styles.keterangan}>
                <Image source={{uri:item.gambar}} style={styles.profile_picture}/>
                <View style={styles.lebih_lanjut}>
                <Text style={styles.Text4}>{item.nama}</Text>
    
                <View style={styles.detail}>
                    <Image source={require('../assets/devices(1).png')} style={styles.icon}/>
                    <Text style={styles.detail_text}>{item.keperluan}</Text>
                </View>
    
                <View style={styles.detail}>
                    <Image source={require('../assets/waktu.png')} style={styles.icon}/>
                    <Text style={styles.detail_text1}>{item.waktu}</Text>
                </View>
                
                <View style={styles.detail}>
                    <Image source={require('../assets/tanggal.png')} style={styles.icon}/>
                    <Text style={styles.detail_text1}>{item.tanggal}</Text>
                </View>
                </View>
            </View>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Data Perizinan</Text>
        </View>
        <View style={styles.bottom_header}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.Text1}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Event')}>
          <Text style={styles.Text}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Mitra')}>
          <Text style={styles.Text}>Mitra</Text>
        </TouchableOpacity>
        </View>

<FlatList 
renderItem={renderItem}
data={data}
keyExtractor= {(item) => item.toString()}

/>

{/* riwayat izin */}
{/* <ScrollView>
        <View style={styles.keterangan_view}>
        <View style={styles.keterangan}>
            <Image source={require('../assets/Buddha.png')} style={styles.profile_picture}/>
            <View style={styles.lebih_lanjut}>
            <Text style={styles.Text4}>Buddha</Text>

            <View style={styles.detail}>
                <Image source={require('../assets/devices(1).png')} style={styles.icon}/>
                <Text style={styles.detail_text}>Devices, untuk keperluan media</Text>
            </View>

            <View style={styles.detail}>
                <Image source={require('../assets/waktu.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>09.30 - 17.000</Text>
            </View>
            
            <View style={styles.detail}>
                <Image source={require('../assets/tanggal.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>08/02 - 10/12</Text>
            </View>
            </View>
        </View>
        </View>

        <View style={styles.keterangan_view}>
        <View style={styles.keterangan}>
            <Image source={{uri:'https://www.blibli.com/friends-backend/wp-content/uploads/2023/01/B110501-cover.jpg'}} style={styles.profile_picture}/>
            <View style={styles.lebih_lanjut}>
            <Text style={styles.Text4}>Wibu</Text>

            <View style={styles.detail}>
                <Image source={require('../assets/devices(1).png')} style={styles.icon}/>
                <Text style={styles.detail_text}>Devices, untuk keperluan media</Text>
            </View>

            <View style={styles.detail}>
                <Image source={require('../assets/waktu.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>09.30 - 21.000</Text>
            </View>
            
            <View style={styles.detail}>
                <Image source={require('../assets/tanggal.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>08/02 - 10/12</Text>
            </View>
            </View>
        </View>
        </View>

        <View style={styles.keterangan_view}>
        <View style={styles.keterangan}>
            <Image source={{uri:'https://pbs.twimg.com/profile_images/1131887455953608704/Xm97Yw96_200x200.jpg'}} style={styles.profile_picture}/>
            <View style={styles.lebih_lanjut}>
            <Text style={styles.Text4}>Opettt</Text>

            <View style={styles.detail}>
                <Image source={require('../assets/pulang(1).png')} style={styles.icon}/>
                <Text style={styles.detail_text}>Pulang, nyari durian</Text>
            </View>

            <View style={styles.detail}>
                <Image source={require('../assets/waktu.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>Undefined</Text>
            </View>
            
            <View style={styles.detail}>
                <Image source={require('../assets/tanggal.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>08/02 - 10/12</Text>
            </View>
            </View>
        </View>
        </View>

        <View style={styles.keterangan_view}>
        <View style={styles.keterangan}>
            <Image source={require('../assets/Buddha.png')} style={styles.profile_picture}/>
            <View style={styles.lebih_lanjut}>
            <Text style={styles.Text4}>Buddha</Text>

            <View style={styles.detail}>
                <Image source={require('../assets/devices(1).png')} style={styles.icon}/>
                <Text style={styles.detail_text}>Devices, untuk keperluan media</Text>
            </View>

            <View style={styles.detail}>
                <Image source={require('../assets/waktu.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>09.30 - 17.000</Text>
            </View>
            
            <View style={styles.detail}>
                <Image source={require('../assets/tanggal.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>08/02 - 10/12</Text>
            </View>
            </View>
        </View>
        </View>

        <View style={styles.keterangan_view}>
        <View style={styles.keterangan}>
            <Image source={require('../assets/Buddha.png')} style={styles.profile_picture}/>
            <View style={styles.lebih_lanjut}>
            <Text style={styles.Text4}>Buddha</Text>

            <View style={styles.detail}>
                <Image source={require('../assets/devices(1).png')} style={styles.icon}/>
                <Text style={styles.detail_text}>Devices, untuk keperluan media</Text>
            </View>

            <View style={styles.detail}>
                <Image source={require('../assets/waktu.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>09.30 - 17.000</Text>
            </View>
            
            <View style={styles.detail}>
                <Image source={require('../assets/tanggal.png')} style={styles.icon}/>
                <Text style={styles.detail_text1}>08/02 - 10/12</Text>
            </View>
            </View>
        </View>
        </View>
    </ScrollView> */}
    </View>
  )
}

export default Riwayat

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
  keterangan:{
    alignItems:'center',
    justifyContent:'flex-start',
    width:350,
    height:150,
    backgroundColor:'white',
    borderRadius:10,
    elevation:5,
    flexDirection:'row'
  },
  keterangan_view:{
    alignItems:'center',
    marginTop:10,
  },
  profile_picture:{
    marginLeft:10,
    width:100,
    height:100,
    borderRadius:10
  },
  Text4:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    marginLeft:5
  },
  icon:{
    width:25,
    height:25,
    backgroundColor:'white'
  },
  lebih_lanjut:{
    flexDirection:'column'
  },
  detail:{
    flexDirection:'row',
    alignItems:'center'
  },
  detail_text:{
    color:'black',
    fontSize:12,
  },
  detail_text1:{
    color:'black',
    fontSize:12,
  },
  detail_maning:{
    flexDirection:'column'
  }
})