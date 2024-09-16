import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { ImagePickerResponse } from 'react-native-image-picker';

export default function ProfileScreen() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [isProfileSaved, setIsProfileSaved] = useState<boolean>(false);

  const handleSaveProfile = () => {
    setIsProfileSaved(true);
    Alert.alert('Profile Saved!');
  };

  const pickImage = () => {
    const options: any = {
      mediaType: 'photo',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri: string = response.assets[0].uri as string;
        setAvatar(uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isProfileSaved ? `User: ${username}` : 'User Profile'}
      </Text>

      <View style={styles.avatarContainer}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <Text style={styles.noAvatarText}>No Avatar Selected</Text>
        )}
        <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
          <Text style={styles.selectButtonText}>Select Avatar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#ddd"
        value={username}
        onChangeText={setUsername}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => Alert.alert('Orders Cancelled!')}>
          <Text style={styles.buttonText}>Cancel Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => Alert.alert('Profile Deleted!')}>
          <Text style={styles.buttonText}>Delete Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a', // Темний фон
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#c0c0c0', // Світлий текст
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  noAvatarText: {
    color: '#ddd', // Світлий текст
    marginBottom: 10,
  },
  selectButton: {
    padding: 10,
    backgroundColor: '#6a0dad', // Фіолетовий колір
    borderRadius: 5,
  },
  selectButtonText: {
    color: '#fff',
  },
  input: {
    borderColor: '#444', // Темніший колір для бордюру
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: '#fff', // Білий текст у полі вводу
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent:'space-around',
  },
  saveButton: {
    backgroundColor: '#6a0dad', // Фіолетовий колір
    width:200,
    padding: 10,
    marginBottom:15,
    borderRadius: 5,
    justifyContent:'center',
    textAlign:'center'
  },
  cancelButton: {
    backgroundColor: '#8e44ad', // Світліший фіолетовий
    padding: 10,
    marginBottom:15,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#5e2a6f', // Темніший фіолетовий
    padding: 10,
    marginBottom:10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});