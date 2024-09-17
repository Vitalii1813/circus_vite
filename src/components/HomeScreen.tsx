import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types.ts'; // Імпорт параметрів для навігації

// Тип для пропа navigation, який відповідає за навігацію в стеку
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

// Дані для секції "Upcoming Performances"
const performances = [
  { id: '1', title: 'Acrobats Extravaganza', date: '24.09.2024', imageUri: 'https://example.com/image1.jpg' },
  { id: '2', title: 'Clown Carnival', date: '30.09.2024', imageUri: 'https://example.com/image2.jpg' },
  { id: '3', title: 'Lion Dance Spectacular', date: '05.10.2024', imageUri: 'https://example.com/image3.jpg' },
  { id: '4', title: 'Magic and Illusion', date: '12.10.2024', imageUri: 'https://example.com/image4.jpg' },
  { id: '5', title: 'Juggling Extravaganza', date: '19.10.2024', imageUri: 'https://example.com/image5.jpg' },
  { id: '6', title: 'Elephant Parade', date: '26.10.2024', imageUri: 'https://example.com/image6.jpg' },
  { id: '7', title: 'Fire Performers', date: '02.11.2024', imageUri: 'https://example.com/image7.jpg' },
  { id: '8', title: 'Trapeze Artists', date: '09.11.2024', imageUri: 'https://example.com/image8.jpg' },
  { id: '9', title: 'Comedy and Acrobats', date: '16.11.2024', imageUri: 'https://example.com/image9.jpg' },
  { id: '10', title: 'Circus Gala Night', date: '23.11.2024', imageUri: 'https://example.com/image10.jpg' },
];

// Дані для секції "Latest News"
const newsItems = [
  { id: '1', title: 'World Circus Tour', date: 'Starting 21.09.2024', imageUri: 'link_to_news_image' },
];

export default function HomeScreen({ navigation }: Props): React.JSX.Element {
  const renderPerformanceItem = ({ item }: { item: typeof performances[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <Text style={styles.cardText}>{item.title}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  const renderNewsItem = ({ item }: { item: typeof newsItems[0] }) => (
    <View style={styles.newsCard}>
      <Image source={{ uri: item.imageUri }} style={styles.newsImage} />
      <Text style={styles.newsText}>{item.title}</Text>
      <Text style={styles.newsDate}>{item.date}</Text>
    </View>
  );

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
        <Text style={styles.sectionDescription}>Check out our amazing upcoming performances and book your tickets now!</Text>
        <FlatList
          horizontal
          data={performances}
          renderItem={renderPerformanceItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false} // Сховати горизонтальний скролінг індикатор
        />
      </View>

      {/* Секція Photo Session */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Book a Photo Session</Text>
        <Text style={styles.sectionDescription}>Capture the magic of the circus with a memorable photo session with your favorite animals!</Text>
        <Button title="Choose Animals & Book" onPress={() => navigation.navigate('PhotoSession')} color="#E3A72F" />
      </View>

      {/* Секція Latest News */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest News</Text>
        <Text style={styles.sectionDescription}>Stay updated with the latest news and events from the circus!</Text>
        <FlatList
          horizontal
          data={newsItems}
          renderItem={renderNewsItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false} // Сховати горизонтальний скролінг індикатор
        />
      </View>

      {/* Кнопка навігації до Booking */}
      <View style={styles.buttonContainer}>

      </View>
    </ScrollView>
  );
}

// Стилі для компонентів
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E0854', // Темніший фіолетовий фон для кращого контрасту
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#F8F8FF', // Легший колір тексту
    fontSize: 20,
    fontWeight: '600',
  },
  subHeaderText: {
    color: '#FFD700', // Золотий колір
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: '#000', // Тінь для підкреслення
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: '#FFD700',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Центрування заголовків
  },
  sectionDescription: {
    color: '#F8F8FF',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  comingSoonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Дозволяє елементам переноситися на новий рядок
  },
  card: {
    width: 180, // Трохи менша ширина картки
    backgroundColor: '#4B0082', // М'якший фіолетовий
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700', // Золотий бордер
    marginBottom: 10, // Відступ від нижньої частини
    shadowColor: '#000', // Тінь для карток
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    marginRight:15,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 15,
    marginBottom: 10,
  },
  cardText: {
    color: '#F8F8FF',
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
    backgroundColor: '#4B0082',
    borderRadius: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#FFD700',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  newsImage: {
    width: '100%',
    height: 160,
    borderRadius: 15,
    marginBottom: 10,
  },
  newsText: {
    color: '#F8F8FF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  newsDate: {
    color: '#FFD700',
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 30,
    width: '75%', // Ширина кнопки відносно контейнера
  },
});