import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function SouvenirScreen() {
  const [selectedSouvenir, setSelectedSouvenir] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Дані для вибору сувеніра і місця доставки
  const souvenirs = [
    { label: 'T-shirt', value: 'tshirt' },
    { label: 'Cap', value: 'cap' },
    { label: 'Poster', value: 'poster' },
  ];

  const locations = [
    { label: 'Entrance', value: 'entrance' },
    { label: 'VIP Area', value: 'vip_area' },
    { label: 'Exit', value: 'exit' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Souvenir Catalog</Text>

      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedSouvenir(value)}
          items={souvenirs}
          placeholder={{ label: 'Select a souvenir...', value: null }}
          style={pickerStyles}
        />
      </View>

      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedLocation(value)}
          items={locations}
          placeholder={{ label: 'Select delivery location...', value: null }}
          style={pickerStyles}
        />
      </View>

      <Button
        title="Confirm Selection"
        onPress={() => alert(`Selected: ${selectedSouvenir}, Location: ${selectedLocation}`)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C3E50', // Темний фон
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#7D3C98', // Фіолетовий колір
    textAlign: 'center',
  },
  pickerContainer: {
    marginBottom: 20,
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#7D3C98', // Фіолетовий колір для рамки
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // Тінь для Android
  },
  inputAndroid: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#7D3C98', // Фіолетовий колір для рамки
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // Тінь для Android
  },
});