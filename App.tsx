import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from './src/components/BookingScreen';
import ScheduleScreen from './src/components/ScheduleScreen';
import ProfileScreen from './src/components/ProfileScreen';
import HomeScreen from './src/components/HomeScreen';
import SouvenirScreen from './src/components/SouvenirScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown  : false}}>
        <Stack.Screen name="Home" component={TabStumble} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Souvenirs" component={SouvenirScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabStumble(){
  return (
    <Tab.Navigator screenOptions={{headerShown  : false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
