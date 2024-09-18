import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/Login';
import DetailScreen from './detailscreen/DetailScreen';
import SplashScreen from './SplashScreen';
import Register from './register/Register';
import HomeScreen from './homescreen.js/HomeScreen';
import BottomNavigation from './BottomNavigation';
import Event from './data/Event';
import Mitra from './data/Mitra';
import Riwayat from './data/Riwayat';
import Event_map from './data/Event_map';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'  
      screenOptions={{ 
          headerShown: false,
          // statusBarColor: '#4308bf',
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bottom" component={BottomNavigation} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Mitra" component={Mitra} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
        <Stack.Screen name="Map" component={Event_map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

