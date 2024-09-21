import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, View} from 'react-native';
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
const superIconSizeSvg = Dimensions.get('screen').width * 0.07;

function HomeImageCustomBestIcon({focused}: any) {
  return (
    <HomeImage
      svgIconCustomSize={superIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function BookingImageCustomBestIcon({focused}: any) {
  return (
    <ClownDark
      svgIconCustomSize={superIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function ScheduleImageCustomBestIcon({focused}: any) {
  return (
    <ScheduleImage
      svgIconCustomSize={superIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function SouvenirsImageCustomBestIcon({focused}: any) {
  return (
    <ShopImage
      svgIconCustomSize={superIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function ProfileImageCustomBestIcon({focused}: any) {
  return (
    <Profile
      svgIconCustomSize={superIconSizeSvg}
      fill={focused ? 'red' : '#BB8FCE'}
    />
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#7D3C98',
        tabBarInactiveTintColor: '#BB8FCE',
        tabBarStyle: {
          backgroundColor: '#4515A4',
          paddingBottom: 0,
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeImageCustomBestIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: BookingImageCustomBestIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ScheduleImageCustomBestIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Souvenirs"
        component={SouvenirScreen}
        options={{
          tabBarIcon: SouvenirsImageCustomBestIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileImageCustomBestIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </View>
  );
}