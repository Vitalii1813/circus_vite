import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import BookingScreen from './src/components/BookingScreen';
import ScheduleScreen from './src/components/ScheduleScreen';
import ProfileScreen from './src/components/ProfileScreen';
import HomeScreen from './src/components/HomeScreen';
import SouvenirScreen from './src/components/SouvenirScreen';
import ClownDark from './src/svg/clownDark';
import Profile from './src/svg/profileImage';
import ShopImage from './src/svg/shopImage';
import ScheduleImage from './src/svg/ScheduleImage';
import HomeImage from './src/svg/HomeImage';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#7D3C98', // Активний фіолетовий колір
        tabBarInactiveTintColor: '#BB8FCE', // Світліший фіолетовий
        tabBarStyle: {
          backgroundColor:'#4515A4',
          height: 60,
          position: 'absolute',
          paddingBottom: 0,
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarShowLabel: false, // Сховати підписи
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <HomeImage width={size} height={size} fill={focused ? color : '#BB8FCE'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ClownDark width={size} height={size} fill={focused ? color : '#BB8FCE'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ScheduleImage width={size} height={size} fill={focused ? color : '#BB8FCE'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Souvenirs"
        component={SouvenirScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ShopImage width={size} height={size} fill={focused ? color : '#BB8FCE'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Profile width={size} height={size} fill={focused ? color : '#BB8FCE'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </View>
  );
}