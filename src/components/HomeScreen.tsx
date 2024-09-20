import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet, FlatList} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; 
import PhotoSession  from '../components/PhotoSession';

// Тип для пропа navigation, який відповідає за навігацію в стеку
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

// Дані для секції "Upcoming Performances"
const performances = [
  { id: '1', title: 'Acrobats in Action!', date: 'Sep 20, 2024', image: require('../assets/Acrobats.png') },
  { id: '2', title: 'Magicians Special!', date: 'Sep 21, 2024', image: require('../assets/Acrobats.png') },
  // ... other performances
];

// Дані для секції "Latest News"
const newsItems = [
    { id: '1', title: 'World Circus Tour', date: 'Starting 21.09.2024', image: require('../assets/Acrobats.png') },
    { id: '2', title: 'New Animals Show', date: '12.10.2024', image: require('../assets/Acrobats.png') },
    // ... other news
];

export default function HomeScreen({ navigation }: Props): React.JSX.Element {
  const [isPhotoSessionVisible, setPhotoSessionVisible] = useState(false);

  // Function to open the PhotoSession 
  const openPhotoSession = () => {
    setPhotoSessionVisible(true);
  };

  // Function to close the PhotoSession
  const closePhotoSession = () => {
    setPhotoSessionVisible(false);
  };

  const renderPerformanceItem = ({ item }: { item: typeof performances[0] }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.cardText}>{item.title}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  const renderNewsItem = ({ item }: { item: typeof newsItems[0] }) => (
    <View style={styles.newsCard}>
      <Image source={item.image} style={styles.newsImage} />
      <Text style={styles.newsText}>{item.title}</Text>
      <Text style={styles.newsDate}>{item.date}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Spectacular Circus Show 🎪</Text>
      </View>

      {/* Upcoming Performances */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Performances</Text>
        <FlatList
          horizontal
          data={performances}
          renderItem={renderPerformanceItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
 {/* Button to open photo session modal */}
 
      {/* Button to open photo session modal */}
      <Button title="Book a Photo Session" onPress={openPhotoSession} />

      {/* PhotoSession component, conditionally rendered */}
      {isPhotoSessionVisible && (
        <PhotoSession onClose={closePhotoSession} /> 
      )}

      {/* Latest News */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest News</Text>
        <FlatList
          data={newsItems}
          renderItem={renderNewsItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

     
    </ScrollView>
  );
}

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0021', // Глибший темний фон для більш драматичного контрасту
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center', // Додаємо для вертикального вирівнювання
    height: 60, // Встановлюємо висоту, щоб чітко контролювати простір заголовка
    paddingHorizontal: 20, // Додаємо відступи зліва і справа для більш збалансованого вигляду
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700', // Товстіший шрифт для більшого акценту
    letterSpacing: 1, // Додаємо відстань між літерами
    textTransform: 'uppercase', // Перетворення в великі літери
    textAlign: 'center',
    lineHeight: 60, // Вирівнюємо текст вертикально, відповідно до висоти заголовка
  },
  subHeaderText: {
    color: '#FFAA00', // Трохи тепліший золотий відтінок
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 }, // Більший тіньовий відступ для виділення
    textShadowRadius: 12,
    textTransform: 'uppercase', // Золотий підкреслюючий ефект
  },

  section: {
    marginVertical: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#35006E', // Більш насичений фіолетовий фон
    borderRadius: 25, // Більш м'які округлені кути
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 }, // Глибші тіні
    shadowOpacity: 0.8,
    shadowRadius: 18,
    elevation: 9,
    borderColor: '#FFD700',
    borderWidth: 1, // Додаємо тонкий золотий бордер
  },
  sectionTitle: {
    color: '#FFDD00', // Яскравіший золотий для заголовків
    fontSize: 28, // Трохи більший текст заголовків
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: 1.5, // Більший інтервал для заголовків
    marginBottom:10,
  },
  sectionDescription: {
    color: '#C4B6E9', // Світліший відтінок для м'якого контрасту
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'justify', // Текст по ширині для більш професійного вигляду
    marginBottom:15,
  },
  card: {
    width: 240, // Збільшили розмір картки
    backgroundColor: '#5A00A0', // Глибший фіолетовий для карток
    padding: 20,
    borderRadius: 30, // Більш округлені кути для м'якшого вигляду
    borderWidth: 2,
    borderColor: '#FFDD00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    elevation: 10,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 150, // Збільшили розмір зображення
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#FFD700',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
  },
  dateText: {
    color: '#FFD700',
    fontSize: 17,
    textAlign: 'center',
  },

  newsCard: {
    backgroundColor: '#5A00A0', // Темніший фон для новинних карток
    borderRadius: 22,
    padding: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 12,
    marginRight: 20,
    marginBottom:25,
    marginLeft:15,
    transform: [{ scale: 1.05 }],
  },
  
 newsImage: {
    width: '100%',
    height: 120, // Розмір зображення для новинних карток
    borderRadius: 18,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: '#FFD700',
  },
  newsText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  newsDate: {
    color: '#FFD700',
    fontSize: 16,
    textAlign: 'center',
  },
  newsList: {
    paddingBottom: 20, // Відступ для списку новин
  },
  newsFlatList: {
    height: 350, // Встановлюємо максимальну висоту для FlatList, щоб він не займав всю сторінку
  },
  animalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  animalButton: {
    backgroundColor: '#6A2C91', // Фіолетовий фон для кнопок тварин
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 6,
  },
  animalText: {
    color: '#FFD700', // Золотий текст для кнопок тварин
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photoButton: {
    backgroundColor: '#6A2C91',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 9,
    elevation: 7,
  },
  photoButtonText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
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