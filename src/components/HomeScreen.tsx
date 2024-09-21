import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PhotoSession from '../components/PhotoSession';
import { SvgXml } from 'react-native-svg';

const performances = [
  {
    id: '1',
    title: 'Barbary lion',
    date: 'Sep 20, 2024',
    image: require('../assets/animal/lion.png'),
  },
  {
    id: '2',
    title: 'African elephant',
    date: 'Sep 21, 2024',
    image: require('../assets/animal/elephant.png'),
  },
  {
    id: '3',
    title: 'Chimpanzee',
    date: 'Sep 21, 2024',
    image: require('../assets/animal/chimpanzee.png'),
  },
  {
    id: '4',
    title: 'Malayan bear',
    date: 'Sep 21, 2024',
    image: require('../assets/animal/bear.png'),
  },
  {
    id: '5',
    title: 'White rhinoceros',
    date: 'Sep 21, 2024',
    image: require('../assets/animal/rhinoceros.png'),
  },
];

export default function HomeScreen() {
  const [isPhotoSessionVisible, setPhotoSessionVisible] = useState(false);

  const renderPerformanceItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.cardText}>{item.title}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView>
      <Text style={styles.headerText}>
        Welcome to the <Text style={{ color: '#FFDD00' }}>spectacular show</Text>
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Snap a photo with our animals</Text>
        <FlatList
          horizontal
          data={performances}
          renderItem={renderPerformanceItem}
          ListFooterComponent={<View style={{ width: 20 }} />}
          ItemSeparatorComponent={<View style={{ width: 20 }} />}
          ListHeaderComponent={<View style={{ width: 20 }} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity
          onPress={() => setPhotoSessionVisible((state) => !state)}
          style={styles.photoButton}
        >
          <Text style={styles.photoButtonText}>Book a photo session</Text>
        </TouchableOpacity>
      </View>
      
        {isPhotoSessionVisible && <PhotoSession onClose={() => setPhotoSessionVisible(false)} />}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0021',
    padding: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('screen').width * 0.08,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  section: {
    marginVertical: 30,
    paddingVertical: 20,
    backgroundColor: '#35006E',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 18,
    elevation: 9,
    borderColor: '#FFD700',
    borderWidth: 1,
  },
  sectionTitle: {
    color: '#FFDD00',
    fontSize: Dimensions.get('screen').width * 0.061,
    fontWeight: '600',
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginHorizontal: '5%',
    marginBottom: 10,
  },
  card: {
    width: 240,
    backgroundColor: '#5A00A0',
    paddingHorizontal: '5%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFDD00',
    gap: 8,
    paddingVertical: 12,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#FFD700',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },
  dateText: {
    color: '#FFD700',
    fontSize: 17,
  },
  photoButton: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFDD00',
    marginTop: 20,
    backgroundColor: '#5A00A0',
  },
  photoButtonText: {
    fontSize: Dimensions.get('screen').width * 0.05,
    paddingVertical: 12,
    fontWeight: '500',
    letterSpacing: 2,
    textAlign: 'center',
    color: '#FFF',
  },
  photoPreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 15,
    borderWidth: 1.5,
    borderColor: '#FFD700',
  },
  title: {
    color: '#FFDD00',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  description: {
    color: '#C4B6E9',
    fontSize: 16,
    marginBottom: 15,
  },
  subTitle: {
    color: '#FFDD00',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#6A2C91',
    color: '#FFD700',
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position:'relative'
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  previewImage: {
    width: 100,
    height: 100,
    marginVertical: 15,
  },
  bookButton: {
    backgroundColor: '#6A2C91',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});