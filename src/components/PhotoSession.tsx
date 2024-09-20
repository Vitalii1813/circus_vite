import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Modal, Image, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary } from 'react-native-image-picker'; // Імпорт функції для вибору фото

const animals = ['Elephant', 'Lion', 'Tiger', 'Giraffe', 'Monkey'];

const PhotoSession = () => {
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleAnimalSelection = (animal: string) => {
    if (selectedAnimals.includes(animal)) {
      setSelectedAnimals(selectedAnimals.filter(a => a !== animal));
    } else {
      setSelectedAnimals([...selectedAnimals, animal]);
    }
  };

  const confirmBooking = () => {
    if (selectedAnimals.length > 0 || selectedAnimal) {
      setIsConfirmed(true);
    } else {
      Alert.alert('Please select at least one animal!');
    }
  };

  const resetBooking = () => {
    setSelectedAnimals([]);
    setSelectedAnimal(null);
    setPhoto(null);
    setIsConfirmed(false);
  };

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setPhoto(uri as string);
        closeModal();
      }
    });
  };

  return (
    <View style={styles.container}>
      {!isConfirmed ? (
        <>
          <Text style={styles.subTitle}>Choose an Animal:</Text>
          <DropDownPicker
            open={dropDownOpen}
            setOpen={setDropDownOpen}
            value={selectedAnimal}
            items={animals.map(animal => ({ label: animal, value: animal }))}
            setValue={setSelectedAnimal}
            containerStyle={styles.dropdown}
          />

          <Text style={styles.subTitle}>Upload a Photo:</Text>
          <TouchableOpacity style={styles.photoButton} onPress={openModal}>
            <Text style={styles.photoButtonText}>Choose Photo</Text>
          </TouchableOpacity>

          {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Button title="Choose from Library" onPress={pickImage} />
                <Button title="Cancel" onPress={closeModal} />
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.photoButton} onPress={confirmBooking}>
            <Text style={styles.photoButtonText}>Book Photo Session</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.confirmationContainer}>
          <Text style={styles.title}>Confirmation</Text>
          <Text>You have selected:</Text>
          {selectedAnimals.map(animal => (
            <Text key={animal} style={styles.animalText}>{animal}</Text>
          ))}
          {selectedAnimal && <Text>{`Selected Animal: ${selectedAnimal}`}</Text>}
          {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}
          <Button title="Reset Booking" onPress={resetBooking} color="#E3A72F" />
        </View>
      )}
    </View>
  );
};

export default PhotoSession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B0082',
  },
  animalButton: {
    padding: 16,
    backgroundColor: '#E3A72F',
    marginVertical: 5,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: '#FFD700',
  },
  animalText: {
    fontSize: 18,
    color: '#fff',
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#4B0082',
  },
  dropdown: {
    marginBottom: 20,
  },
  photoButton: {
    backgroundColor: '#E3A72F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  photoPreview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});