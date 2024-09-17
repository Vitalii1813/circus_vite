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
  { id: '1', title: 'Acrobats in Action!', date: 'Sep 20, 2024', image: require('../assets/Acrobats.png') },
  { id: '2', title: 'Magicians Special!', date: 'Sep 21, 2024', image: require('../assets/Acrobats.png') },
  { id: '3', title: 'Clown Performance!', date: 'Sep 22, 2024', image: require('../assets/Acrobats.png') },
  { id: '4', title: 'Elephants Parade!', date: 'Sep 23, 2024', image: require('../assets/Acrobats.png') },
  { id: '5', title: 'Tigers Show!', date: 'Sep 24, 2024', image: require('../assets/Acrobats.png') },
  { id: '6', title: 'Juggling Extravaganza!', date: 'Sep 25, 2024', image: require('../assets/Acrobats.png') },
  { id: '7', title: 'Fire Breathers!', date: 'Sep 26, 2024', image: require('../assets/Acrobats.png') },
  { id: '8', title: 'Grand Finale Show!', date: 'Sep 27, 2024', image: require('../assets/Acrobats.png') },
];


// Дані для секції "Latest News"
const newsItems = [
    { 
      id: '1', 
      title: 'World Circus Tour', 
      date: 'Starting 21.09.2024', 
      image: require('../assets/Acrobats.png') 
    },
    { 
      id: '2', 
      title: 'New Animals Show', 
      date: '12.10.2024', 
      image: require('../assets/Acrobats.png') 
    },
    { 
      id: '3', 
      title: 'Exclusive Clown Performance', 
      date: '25.09.2024', 
      image: require('../assets/Acrobats.png') 
    },
  ];

export default function HomeScreen({ navigation }: Props): React.JSX.Element {
  const renderPerformanceItem = ({ item }: { item: typeof performances[0] }) => (
    <View style={styles.card}>
      <Image source={item.image}  style={styles.image} />
      <Text style={styles.cardText}>{item.title}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  const renderNewsItem = ({ item }: { item: typeof newsItems[0] }) => (
    <View style={styles.newsCard}>
      <Image source={item.image}  style={styles.newsImage} />
      <Text style={styles.newsText}>{item.title}</Text>
      <Text style={styles.newsDate}>{item.date}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the</Text>
        <Text style={styles.subHeaderText}>Spectacular </Text>
        <Text style={styles.subHeaderText}>Circus  Show 🎪</Text>
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
        <Text style={styles.sectionDescription}>Stay informed about the most recent circus news!</Text>
        <View style={styles.newsContainer}>
          <FlatList
            data={newsItems}
            renderItem={renderNewsItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false} // Сховати вертикальний скролінг індикатор
            contentContainerStyle={styles.newsList}
            style={styles.newsFlatList} // Стилі для списку
          />
        </View>
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
  buttonContainer: {
    marginTop: 35,
    width: '80%', // Більше місця для кнопок
    alignSelf: 'center', // Вирівнюємо по центру
  },
  button: {
    backgroundColor: '#FFAA00', // Яскравіший відтінок для кнопок
    borderRadius: 25, // Округлені краї для кнопки
    paddingVertical: 15,
    paddingHorizontal: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5, // Додаємо відстань між літерами
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
    height: 120,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  newsText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 8,
  },
  newsDate: {
    color: '#FFD700',
    fontSize: 15,
    textAlign: 'left',
  },
  newsContainer: {
    marginTop:30,
    maxHeight: 400, // Обмежуємо висоту контейнера новин
    overflow: 'hidden', // Сховати все, що виходить за межі
  },
  newsList: {
    paddingBottom: 20, // Додаємо нижній відступ для списку
  },
  newsFlatList: {
    // Тут можуть бути стилі для FlatList, якщо потрібно
    flexGrow: 1, // Забезпечує, щоб FlatList займав весь доступний простір
  },
});