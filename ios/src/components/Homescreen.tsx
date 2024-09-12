import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types.ts'; // Імпорт параметрів для навігації

// Тип для пропа navigation, який відповідає за навігацію в стеку
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props): React.JSX.Element {
  return (
    <View>
      <Button title="Book Seats" onPress={() => navigation.navigate('Booking')} />
      <Button title="Souvenirs" onPress={() => navigation.navigate('Souvenirs')} />
      <Button title="Schedule" onPress={() => navigation.navigate('Schedule')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
