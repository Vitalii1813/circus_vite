import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert, TextInput, ScrollView, Modal } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

export default function BookingScreen() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedClown, setSelectedClown] = useState<string>('');
  const [selectedAnimal, setSelectedAnimal] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isBirthday, setIsBirthday] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [sector, setSector] = useState<number>(0);

  // Сидіння для кожного сектора у формі піраміди
  const sectors = [
    {
      seats: [
        ['1A', '1B', '1C', '1D'],
        ['2A', '2B', '2C', '2D', '2E'],
        ['3A', '3B', '3C', '3D', '3E', '3F'],
        ['4A', '4B', '4C', '4D', '4E', '4F', '4G'],
        ['5A', '5B', '5C', '5D', '5E', '5F', '5G', '5H'],
      ],
      color: '#FF6F61', // М'який коралово-червоний
    },
    {
      seats: [
        ['1F', '1G', '1H', '1I'],
        ['2F', '2G', '2H', '2I', '2J'],
        ['3F', '3G', '3H', '3I', '3J', '3K'],
        ['4F', '4G', '4H', '4I', '4J', '4K', '4L'],
        ['5F', '5G', '5H', '5I', '5J', '5K', '5L', '5M'],
      ],
      color: '#77DD77', // М'який зелений пастель
    },
    {
      seats: [
        ['1K', '1L', '1M', '1N'],
        ['2K', '2L', '2M', '2N', '2O'],
        ['3K', '3L', '3M', '3N', '3O', '3P'],
        ['4K', '4L', '4M', '4N', '4O', '4P', '4Q'],
        ['5K', '5L', '5M', '5N', '5O', '5P', '5Q', '5R'],
      ],
      color: '#6A5ACD', // Лавандовий синій
    },
    {
      seats: [
        ['1P', '1Q', '1R', '1S'],
        ['2P', '2Q', '2R', '2S', '2T'],
        ['3P', '3Q', '3R', '3S', '3T', '3U'],
        ['4P', '4Q', '4R', '4S', '4T', '4U', '4V'],
        ['5P', '5Q', '5R', '5S', '5T', '5U', '5V', '5W'],
      ],
      color: 'orange', // Ніжний пастельний жовтий
    },
  ];

  const toggleSeat = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
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
      direction === 'next' ? Math.min(prevSector + 1, 3) : Math.max(prevSector - 1, 0)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Навігація між секторами */}
      

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

      <Text style={styles.selectedText}>
        Selected Seats: {selectedSeats.join(', ') || 'None'}
      </Text>

      <Button title="Confirm Booking" onPress={handleBooking} color="#FFD700" />

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
                <Text style={styles.settingTitle}>Child's Name:</Text>
                <TextInput
                  style={styles.input}
                  value={childName}
                  onChangeText={setChildName}
                  placeholder="Enter name"
                  placeholderTextColor="#ccc"
                />

                <View>
                  <View style={styles.selectorContainer}>
                    <Text style={styles.settingTitle}>Choose Clown:</Text>
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
                    <Text style={styles.settingTitle}>Choose Animal:</Text>
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  seat: {
    width: 30, // Менший розмір для кружечка
    height: 30, // Менший розмір для кружечка
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15, // Робить сидіння круглим
    backgroundColor: '#ccc',
  },
  
  selectedSeat: {
    backgroundColor: '#FFD700',
  },
  
  seatLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10, // Зменшений шрифт для тексту в кружечку
  },
  selectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
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
  sectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sectorButton: {
    fontSize: 24,
    color: '#4B0082',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  sectorLabel: {
    fontSize: 20,
    color: '#4B0082',
    fontWeight: 'bold',
  },
});