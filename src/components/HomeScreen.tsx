import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types.ts'; // Імпорт параметрів для навігації

// Тип для пропа navigation, який відповідає за навігацію в стеку
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the</Text>
        <Text style={styles.subHeaderText}>Spectacular Circus Show 🎪</Text>
      </View>

      {/* Секція Coming Soon */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Performances</Text>
        <View style={styles.comingSoonRow}>
          <View style={styles.card}>
            <Image source={{ uri: 'link_to_image1' }} style={styles.image} />
            <Text style={styles.cardText}>Acrobats Extravaganza</Text>
            <Text style={styles.dateText}>24.09.2024</Text>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: 'link_to_image2' }} style={styles.image} />
            <Text style={styles.cardText}>Clown Carnival</Text>
            <Text style={styles.dateText}>30.09.2024</Text>
          </View>
        </View>
      </View>

      {/* Секція News */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest News</Text>
        <View style={styles.newsCard}>
          <Image source={{ uri: 'link_to_news_image' }} style={styles.newsImage} />
          <Text style={styles.newsText}>World Circus Tour</Text>
          <Text style={styles.newsDate}>Starting 21.09.2024</Text>
        </View>
      </View>

      {/* Кнопка навігації до Booking */}
      <View style={styles.buttonContainer}>
        <Button title="Book Tickets Now" onPress={() => navigation.navigate('Booking')} color="#E3A72F" />
      </View>
    </ScrollView>
  );
}

// Стилі для компонентів
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082', // Фіолетовий фон
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  subHeaderText: {
    color: '#FFD700', // Золотий колір
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: '#FFD700',
    fontSize: 24,
    marginBottom: 10,
  },
  comingSoonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#800080', // Темно-фіолетовий
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFD700', // Золотий бордер
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText: {
    color: '#FFD700',
    fontSize: 16,
    textAlign: 'center',
  },
  newsCard: {
    backgroundColor: '#800080',
    borderRadius: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  newsDate: {
    color: '#FFD700',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 50,
  },
});
