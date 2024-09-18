import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from './Event'
import Mitra from './Mitra';
import Riwayat from './Riwayat';
const Stack = createNativeStackNavigator();

function App_one() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'  
      screenOptions={{ 
          headerShown: false,
          // statusBarColor: '#4308bf',
      }} >
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Mitra" component={Mitra} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App_one;