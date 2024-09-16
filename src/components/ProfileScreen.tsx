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

  const handleDeleteProfile = () => {
    setAvatar(null);
    setUsername('');
    setIsProfileSaved(false);
    Alert.alert('Profile Deleted!');
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
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteProfile}>
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
    backgroundColor: '#4B0082', // Dark purple background color
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFD700', // Bright gold color for the title
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70, // Full circle avatar
    borderWidth: 4,
    borderColor: '#FFD700', // Gold border color
  },
  noAvatarText: {
    color: '#FFD700', // Gold color for "No Avatar" text
    marginBottom: 10,
    fontSize: 16,
  },
  selectButton: {
    padding: 12,
    backgroundColor: '#6A0DAD', // Medium-dark purple color for button
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#FFD700', // Gold border color
    borderWidth: 2,
    borderRadius: 12, // Slightly rounded corners for input
    padding: 12,
    marginBottom: 20,
    color: '#fff',
    backgroundColor: '#6A0DAD', // Darker purple input background
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4B0082', // Dark purple background for the button
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#FFD700', // Gold border color
    width: 200,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#6A0DAD', // Darker purple
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#FFD700',
    width: 200,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#800080', // Dark purple for "Delete"
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#FFD700',
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD700', // Gold color for button text
    fontWeight: 'bold',
    fontSize: 16,
  },
});