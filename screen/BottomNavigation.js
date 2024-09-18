// TabNavigator.js
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './homescreen.js/HomeScreen';
import Data from './data/Data';
import Settings from './settings/Settings';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 

function BottomNavigation() {
  const [benar, setBenar]= useState(false)
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#f8f8f8', // Warna latar belakang bottom tab
          borderTopWidth: 0, // Hapus border atas
        },
        // tabBarActiveTintColor: '#e91e63', // Warna ikon yang aktif
        tabBarInactiveTintColor: '#757575', // Warna ikon yang tidak aktif
        tabBarInactiveBackgroundColor:('./assets/Buddha.png')
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={ {
        tabBarLabel:'Home',
        tabBarIcon:()=> (
          <Icon name='home-account' size={35} style={{color:'blue'}}/> 
        )

      }}/>
      <Tab.Screen name="Data" component={Data} options={ {
        tabBarLabel:'Data',
        tabBarIcon:()=> (
          <Icon name='database' size={35} style={{color:'grey'}}/> 
        )

      }}/>
      <Tab.Screen name="Settings" component={Settings} options={ {
        tabBarLabel:'Setting',
        tabBarIcon:()=> (
          <Icon name='tools' size={35} style={{color:'grey'}}/> 
        )

      }}/>
    </Tab.Navigator>
  );
}

export default BottomNavigation;
