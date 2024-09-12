import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ios/src/components/HomeScreen';
import BookingScreen from './ios/src/components/BookingScreen';
import SouvenirsScreen from './ios/src/components/SouvenirScreen';
import ScheduleScreen from './ios//src/components/ScheduleScreen';
import ProfileScreen from './ios/src/components/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Souvenirs" component={SouvenirsScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
