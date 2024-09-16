import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import ScheduleImage from '../svg/ScheduleImage';
import { useNavigation } from '@react-navigation/native';

// Дані для розкладу (можна замінити реальними даними)
const scheduleData = [
  { id: '1', title: 'Lion Show', time: '10:00 AM' },
  { id: '2', title: 'Clown Performance', time: '12:00 PM' },
  { id: '3', title: 'Elephant Parade', time: '2:00 PM' },
  { id: '4', title: 'Acrobatics', time: '4:00 PM' },
];

export default function ScheduleScreen() {
  const navigation = useNavigation();
  // Рендер одного елемента списку
  const renderScheduleItem = ({ item }) => (
    <View style={styles.scheduleItem}>
      <Text style={styles.scheduleTitle}>{item.title}</Text>
      <Text style={styles.scheduleTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <ScheduleImage />
        <Text style={styles.headerText}>Performance Schedule</Text>
      </View>

      {/* Список розкладу */}
      <FlatList
        data={scheduleData}
        renderItem={renderScheduleItem}
        keyExtractor={(item) => item.id}
        style={styles.scheduleList}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} color="#E3A72F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082', // Фіолетовий фон
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Золотий колір для тексту заголовка
    marginLeft: 10,
  },
  scheduleList: {
    marginTop: 10,
  },
  scheduleItem: {
    backgroundColor: '#800080', // Темно-фіолетовий фон
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFD700', // Золотий бордер
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff', // Білий текст
  },
  scheduleTime: {
    fontSize: 14,
    color: '#FFD700', // Золотий текст
  },
});
