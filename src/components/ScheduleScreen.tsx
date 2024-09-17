import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput, Alert } from 'react-native';
import ScheduleImage from '../svg/ScheduleImage';
import { useNavigation } from '@react-navigation/native';

// Дані для розкладу (можна замінити реальними даними)
const scheduleData = [
  { id: '1', title: 'Lion Show', time: '10:00 AM', code: 'LION2024' },
  { id: '2', title: 'Clown Performance', time: '12:00 PM', code: 'CLOWN2024' },
  { id: '3', title: 'Elephant Parade', time: '2:00 PM', code: 'ELEPHANT2024' },
  { id: '4', title: 'Acrobatics', time: '4:00 PM', code: 'ACROBAT2024' },
];

export default function ScheduleScreen() {
  const navigation = useNavigation();
  const [sessionCode, setSessionCode] = useState('');
  const [filteredSchedule, setFilteredSchedule] = useState(scheduleData); // Початково показуємо весь розклад

  // Обробка підтвердження коду сеансу
  const handleConfirmSession = () => {
    if (sessionCode.trim() === '') {
      Alert.alert('Error', 'Please enter a session code.');
      setFilteredSchedule(scheduleData); // Повертаємо весь розклад, якщо поле порожнє
    } else {
      // Пошук відповідного виступу за кодом
      const filtered = scheduleData.filter((item) => item.code === sessionCode.trim());
      if (filtered.length > 0) {
        setFilteredSchedule(filtered); // Відображаємо тільки знайдений виступ
        Alert.alert('Session Code Confirmed', `Found Show: ${filtered[0].title}`);
      } else {
        Alert.alert('Error', 'Invalid session code.');
        setFilteredSchedule([]); // Очищаємо результат, якщо код неправильний
      }
    }
  };

  // Очищення фільтрації та повернення до всього розкладу при зміні коду
  useEffect(() => {
    if (sessionCode === '') {
      setFilteredSchedule(scheduleData); // Показуємо весь розклад, якщо поле введення очищене
    }
  }, [sessionCode]);

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
        data={filteredSchedule} // Використовуємо стан filteredSchedule
        renderItem={renderScheduleItem}
        keyExtractor={(item) => item.id}
        style={styles.scheduleList}
      />

      {/* Поле введення коду сеансу */}
      <TextInput
        style={styles.input}
        placeholder="Enter Session Code"
        placeholderTextColor="#ddd"
        value={sessionCode}
        onChangeText={setSessionCode}
        autoCapitalize="characters" // Кожна літера буде великою
        keyboardType="default" // Стандартний тип клавіатури
      />

      <Button title="Confirm Session" onPress={handleConfirmSession} color="#E3A72F" />

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
  input: {
    borderColor: '#444', // Темний бордюр
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: '#fff', // Білий текст
    backgroundColor: '#5e2a6f', // Темний фон для поля вводу
  },
});
