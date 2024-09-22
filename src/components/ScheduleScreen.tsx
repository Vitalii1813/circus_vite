import React, { useState, useEffect } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const scheduleData = [
  { id: '1', title: 'Lion Show', time: '10:00 AM', code: 'LION2024' },
  { id: '2', title: 'Clown Performance', time: '12:00 PM', code: 'CLOWN2024' },
  { id: '3', title: 'Elephant Parade', time: '2:00 PM', code: 'ELEPHANT2024' },
  { id: '4', title: 'Acrobatics', time: '4:00 PM', code: 'ACROBAT2024' },
  { id: '5', title: 'Horse Show', time: '3:00 PM', code: 'HORSE2024' },
  { id: '6', title: 'Puppet Show', time: '1:00 PM', code: 'PUPPET2024' },
];

export default function ScheduleScreen() {
  const navigation = useNavigation();
  const [sessionCode, setSessionCode] = useState('');
  const [filteredSchedule, setFilteredSchedule] = useState(scheduleData);
  const [isFiltered, setIsFiltered] = useState(false);

  // Обробка підтвердження коду сеансу
  const handleConfirmSession = () => {
    const sessionCodeLower = sessionCode.trim().toLowerCase();

    if (sessionCodeLower === '') {
      Alert.alert('Error', 'Please enter a session code.');
      setFilteredSchedule(scheduleData);
      setIsFiltered(false);
    } else {
      // Пошук відповідного виступу за кодом або назвою
      const filtered = scheduleData.filter((item) =>
        item.code.toLowerCase() === sessionCodeLower ||
        item.title.toLowerCase().includes(sessionCodeLower)
      );

      if (filtered.length > 0) {
        setFilteredSchedule(filtered);
        setIsFiltered(true);
        Alert.alert('Session Code Confirmed', `Found Show: ${filtered[0].title}`);
      } else {
        Alert.alert('Error', 'Invalid session code or title.');
        setFilteredSchedule([]);
        setIsFiltered(true);
      }
    }
  };

  // Очищення фільтрації та повернення до всього розкладу
  const clearFilter = () => {
    setSessionCode('');
    setFilteredSchedule(scheduleData);
    setIsFiltered(false);
  };

  // Очищення фільтрації при зміні коду
  useEffect(() => {
    if (sessionCode === '') {
      setFilteredSchedule(scheduleData);
      setIsFiltered(false);
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
        <Text style={styles.headerText}>Performance Schedule</Text>
      </View>

      {/* Список розкладу */}
      <FlatList
        data={filteredSchedule}
        renderItem={renderScheduleItem}
        keyExtractor={(item) => item.id}
        style={styles.scheduleList}
        ListEmptyComponent={() => (
          <Text style={styles.noResultsText}>No performances found for the session code.</Text>
        )}
      />

      {/* Поле введення коду сеансу */}
      <TextInput
        style={styles.input}
        placeholder="Enter Session Code or Title"
        placeholderTextColor="#ddd"
        value={sessionCode}
        onChangeText={setSessionCode}
        autoCapitalize="none"
        keyboardType="default"
        returnKeyType="search"
        onSubmitEditing={handleConfirmSession} // Додає обробник на натискання Enter
      />

      <View style={styles.buttonContainer}>
        <Button title="Confirm Session" onPress={handleConfirmSession} color="#E3A72F" />
        {isFiltered && (
          <Button title="Clear Filter" onPress={clearFilter} color="#FF6347" />
        )}
      </View>

      <Button title="Go Back" onPress={() => navigation.goBack()} color="#E3A72F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330066', // Темно-фіолетовий фон
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
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
    backgroundColor: '#5D3B91', // Темний, насичений фіолетовий
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  scheduleTime: {
    fontSize: 14,
    color: '#FFD700',
  },
  input: {
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: '#fff',
    backgroundColor: '#452763',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  noResultsText: {
    textAlign: 'center',
    color: '#FFD700',
    fontSize: 16,
    marginTop: 20,
  },
});