import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert, TextInput, ScrollView } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

export default function BookingScreen() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedClown, setSelectedClown] = useState<string>('');
  const [selectedAnimal, setSelectedAnimal] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isBirthday, setIsBirthday] = useState<boolean>(false); // Відповідь на питання про день народження

  const seats = [
    ['2A', '2B'],
    ['3A', '3B', '3C'],
    ['4A', '4B', '4C', '4D'],
    ['5A', '5B', '5C', '5D', '5E'],
    ['6A', '6B', '6C', '6D', '6E', '6F'],
    ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
    ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
    ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
  ];

  const toggleSeat = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    // Після підтвердження бронювання запитати про день народження
    Alert.alert(
      'Celebrate Birthday',
      'Does your child want to celebrate a birthday?',
      [
        {
          text: 'No',
          onPress: () => showBookingDetails(false),
        },
        {
          text: 'Yes',
          onPress: () => showBookingDetails(true),
        },
      ]
    );
  };

  const showBookingDetails = (isBirthday: boolean) => {
    setIsBirthday(isBirthday); // Зберігаємо відповідь
    setShowDetails(true); // Показуємо деталі бронювання

    if (!isBirthday) {
      Alert.alert(
        'Booking Confirmed',
        `Seats: ${selectedSeats.join(', ') || 'None'}`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleConfirm = () => {
    Alert.alert(
      'Booking Details',
      `Child's Name: ${childName}\nClown: ${selectedClown}\nAnimal: ${selectedAnimal}\nSeats: ${selectedSeats.join(', ') || 'None'}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Booking Seats</Text>

      <View style={styles.triangleContainer}>
        {seats.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((seat) => (
              <TouchableOpacity
                key={seat}
                style={[
                  styles.seat,
                  selectedSeats.includes(seat) && styles.selectedSeat,
                ]}
                onPress={() => toggleSeat(seat)}
              >
                <Text style={styles.seatLabel}>{seat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <Text style={styles.selectedText}>
        Selected Seats: {selectedSeats.join(', ') || 'None'}
      </Text>

      <Button title="Confirm Booking" onPress={handleBooking} color="#FFD700" />

      {/* Якщо користувач обрав святкування дня народження */}
      {isBirthday && (
        <View style={styles.settingsContainer}>
          <Text style={styles.settingTitle}>Child's Name:</Text>
          <TextInput
            style={styles.input}
            value={childName}
            onChangeText={setChildName}
            placeholder="Enter child's name"
            placeholderTextColor="#ccc"
          />

          <View style={styles.selectContainer}>
            <View style={styles.selectorContainer}>
              <Text style={styles.settingTitle}>Select Clown:</Text>
              <ModalSelector
                data={[
                  { key: '', label: 'Select a clown' },
                  { key: 'clown1', label: 'Clown 1' },
                  { key: 'clown2', label: 'Clown 2' },
                  { key: 'clown3', label: 'Clown 3' },
                ]}
                initValue="Select a clown"
                onChange={(option) => setSelectedClown(option.key)}
                style={styles.selector}
              />
            </View>

            <View style={styles.selectorContainer}>
              <Text style={styles.settingTitle}>Select Animal:</Text>
              <ModalSelector
                data={[
                  { key: '', label: 'Select an animal' },
                  { key: 'elephant', label: 'Elephant' },
                  { key: 'lion', label: 'Lion' },
                  { key: 'tiger', label: 'Tiger' },
                ]}
                initValue="Select an animal"
                onChange={(option) => setSelectedAnimal(option.key)}
                style={styles.selector}
              />
            </View>

            <Button title="Confirm Details" onPress={handleConfirm} color="#FFD700" />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#4B0082',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFD700',
    fontWeight: 'bold',
  },
  triangleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  seat: {
    width: 30,
    height: 30,
    backgroundColor: 'grey',
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  selectedSeat: {
    backgroundColor: 'green',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  seatLabel: {
    fontSize: 12,
    color: 'white',
  },
  selectedText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#FFD700',
  },
  settingsContainer: {
    marginTop: 30,
    width: '100%',
    padding: 15,
    backgroundColor: '#3C42DE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  settingTitle: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 20,
    backgroundColor: '#800080',
  },
  selectorContainer: {
    width: '100%',
    marginBottom: 20,
  },
  selector: {
    width: '100%',
    backgroundColor: '#800080',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  detailsContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#800080',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  detailsTitle: {
    fontSize: 20,
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailsText: {
    fontSize: 16,
    color: '#fff',
  },
});