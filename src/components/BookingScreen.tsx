import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert, TextInput, ScrollView, Modal } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import LinearGradient from 'react-native-linear-gradient';

export default function BookingScreen() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedClown, setSelectedClown] = useState<string>('');
  const [selectedAnimal, setSelectedAnimal] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isBirthday, setIsBirthday] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [sector, setSector] = useState<number>(0);
  const MAX_SEATS = 5;

  // Сидіння для кожного сектора у формі піраміди
  const sectors = [
  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },

  {
    seats: [
      ['2A', '2B'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C', '4D'],
      ['5A', '5B', '5C', '5D', '5E'],
      ['6A', '6B', '6C', '6D', '6E', '6F'],
      ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
      ['8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H'],
      ['9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I'],
      ['10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J'],
    ],
    color: 'white',
  },
 
   
  
  
];

  const toggleSeat = (seat:string) => {
    if (selectedSeats.length < MAX_SEATS) {
      setSelectedSeats(prevSeats => [...prevSeats, seat]);
    } else {
      alert(`You can only select up to ${MAX_SEATS} seats.`);
    }
  };

  const handleBooking = () => {
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

  const handleCancel = () => {
    Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel the booking?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancellation cancelled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            cancelBooking(); // Скидаємо вибрані місця
            console.log('Booking has been cancelled.');
          },
        },
      ]
    );
  };

  const cancelBooking = () => {
    setSelectedSeats([]); // Очищення вибраних місць
  };

  const showBookingDetails = (birthday: boolean) => {
    setIsBirthday(birthday);
    setShowDetails(true);
    setIsModalVisible(true);

    if (!birthday) {
      Alert.alert(
        'Booking Confirmed',
        `Seats: ${selectedSeats.join(', ') || 'None'}`,
        [{ text: 'OK' }]
      );
      setSelectedSeats([]); // Очищення вибраних місць після підтвердження бронювання
    }
  };

  const handleConfirm = () => {
    Alert.alert(
      'Booking Details',
      `Child's Name: ${childName}\nClown: ${selectedClown}\nAnimal: ${selectedAnimal}\nSeats: ${selectedSeats.join(', ') || 'None'}`,
      [{ text: 'OK' }]
    );
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const changeSector = (direction: 'next' | 'prev') => {
    setSector((prevSector) =>
      direction === 'next' ? Math.min(prevSector + 1, 8) : Math.max(prevSector - 1, 0)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View >
        <Text style={styles.placeHeader}> PLINKO</Text>
      </View>

      <View style={styles.triangleContainer}>
        {sectors[sector].seats.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((seat) => (
              <TouchableOpacity
                key={seat}
                style={[
                  styles.seat,
                  selectedSeats.includes(seat) && styles.selectedSeat,
                  { backgroundColor: sectors[sector].color },
                ]}
                onPress={() => toggleSeat(seat)}
              >
                <Text style={styles.seatLabel}>{seat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.sectorContainer}>

        <TouchableOpacity onPress={() => changeSector('prev')}>
          <Text style={styles.sectorButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.sectorLabel}>Sector: {sector + 1}</Text>
        <TouchableOpacity onPress={() => changeSector('next')}>
          <Text style={styles.sectorButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={['#1E90FF', '#4B0082']} // Синій до фіолетового
        style={styles.selectedContainer}>
        <View>
          <Text style={styles.selectedText}>
            Selected Seats: {selectedSeats.join(', ') || 'None'}
          </Text>
        </View>
      </LinearGradient>
      

      <View style={styles.container}>
      <TouchableOpacity style={styles.purpleGoldButton} onPress={handleBooking}>
        <Text style={styles.purpleGoldButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.purpleGoldButton} onPress={handleCancel}>
        <Text style={styles.purpleGoldButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            {isBirthday && (
              <View style={styles.settingsContainer}>
                <Text style={styles.settingTitle}>{childName ? childName : `Child's Name`}</Text>
                <TextInput
                  style={styles.input}
                  value={childName}
                  onChangeText={setChildName}
                  placeholder="Enter name"
                  placeholderTextColor="#ccc"
                />

                <View>
                  <View style={styles.selectorContainer}>
                    <Text style={styles.settingTitle}>{selectedClown ? selectedClown : `Chose Clown:`}</Text>
                    <ModalSelector
                      data={[
                        { key: '', label: 'Choose a clown' },
                        { key: 'clown1', label: 'Clown 1' },
                        { key: 'clown2', label: 'Clown 2' },
                        { key: 'clown3', label: 'Clown 3' },
                      ]}
                      initValue="Choose a clown"
                      onChange={(option) => setSelectedClown(option.label)}
                      style={styles.selector}
                      initValueTextStyle={{ color: '#fff' }}
                    />
                  </View>

                  <View style={styles.selectorContainer}>
                    <Text style={styles.settingTitle}>{selectedAnimal ? selectedAnimal : `Chose an animal:`}</Text>
                    <ModalSelector
                      data={[
                        { key: '', label: 'Choose an animal' },
                        { key: 'elephant', label: 'Elephant' },
                        { key: 'lion', label: 'Lion' },
                        { key: 'tiger', label: 'Tiger' },
                      ]}
                      initValue="Choose an animal"
                      onChange={(option) => setSelectedAnimal(option.label)}
                      style={styles.selector}
                      initValueTextStyle={{ color: '#fff' }}
                    />
                  </View>
                </View>

                <Button title="Confirm" onPress={handleConfirm} />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor:'#6A2C91'
  },
  triangleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft:15,
    marginTop:40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  seat: {
    width: 20, 
    height: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15, 
    backgroundColor: 'black',
  },
  
  selectedSeat: {
    backgroundColor: '#FFD700',
  },
  
  seatLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 8,
  },
  selectedContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius:30,
  },
  selectedText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFD700', // Золотий колір для тексту
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#4B0082',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsContainer: {
    marginTop: 20,
  },
  settingTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: '#fff',
  },
  selectorContainer: {
    marginBottom: 20,
  },
  selector: {
    backgroundColor: '#4B0082',
    borderRadius: 5,
    borderColor: '#ccc',
  },
  placeHeader: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(75, 0, 130, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 2,
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: 30,
    textTransform: 'uppercase',
  },
  purpleGoldButton: {
    backgroundColor: '#800080', // Rich purple base
    borderRadius: 25, // Rounded corners for a modern look
    paddingVertical: 12, // Comfortable padding
    paddingHorizontal: 24, 
    borderWidth: 2,
    borderColor: '#FFD700', // Gold border for emphasis
    shadowColor: '#FFD700', // Subtle gold shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
  },
  purpleGoldButtonText: {
    color: '#FFD700', // Gold text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Розподіляє елементи рівномірно
    marginBottom: 20,
    paddingHorizontal: 20, // Додає відступи з боків
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Напівпрозорий фон
    borderRadius: 25, // Закруглені кути
  },
  sectorButton: {
    fontSize: 24,
    color: '#FFD700', // Золотистий колір
    fontWeight: 'bold',
    padding: 10,
  },
  sectorLabel: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});