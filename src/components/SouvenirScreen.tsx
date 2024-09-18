import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default function SouvenirScreen() {
  const [selectedSouvenir, setSelectedSouvenir] = useState<any>(null);
  const [orders, setOrders] = useState<{ souvenir: string; location: string }[]>([]);

  // Дані для вибору сувеніра
  const souvenirs = [
    { name: 'T-shirt', price: '$25' },
    { name: 'Cap', price: '$15' },
    { name: 'Poster', price: '$10' },
    { name: 'Lego', price: '$25' },
    { name: 'Cubic', price: '$15' },
    { name: 'Ball', price: '$10' },
  ];

  // Функція для додавання замовлення
  const addOrder = () => {
    if (selectedSouvenir) {
      const newOrder = { souvenir: selectedSouvenir.name, location: 'N/A' };
      setOrders([...orders, newOrder]);
      setSelectedSouvenir(null); // Очищення вибору
    } else {
      alert('Please select a souvenir.');
    }
  };

  // Функція для видалення замовлення
  const removeOrder = (index) => {
    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Souvenir Catalog</Text>

      {/* Вибір сувеніра */}
      <Text style={styles.subtitle}>Select a Souvenir:</Text>
      <FlatList
        data={souvenirs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              selectedSouvenir?.name === item.name && styles.selectedItem, // Виділення вибраного сувеніра
            ]}
            onPress={() => setSelectedSouvenir(item)}
          >
            <View style={styles.imagePlaceholder} />
            <View style={styles.souvenirInfo}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.scrollContainer}
      />

      {/* Кнопка для додавання замовлення */}
      <TouchableOpacity style={styles.addButton} onPress={addOrder}>
        <Text style={styles.buttonText}>Add to Orders</Text>
      </TouchableOpacity>

      {/* Список замовлень */}
      <Text style={styles.subtitle}>Your Orders:</Text>
      <View style={styles.ordersContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>
                {item.souvenir} - {item.location}
              </Text>
              <TouchableOpacity onPress={() => removeOrder(index)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.noOrdersText}>No orders yet</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2E0854', // Темніший фіолетовий фон
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#FFD700', // Золотий колір для заголовка
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#4B0082', // Темно-фіолетовий фон для вибраних елементів
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Тінь для Android
  },
  selectedItem: {
    backgroundColor: '#FFD700', // Золотий фон для вибраних елементів
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: '#D3D3D3', // Світло-сірий фон для заглушки
    borderRadius: 8,
  },
  souvenirInfo: {
    flexDirection: 'column',
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
  },
  addButton: {
    backgroundColor: '#FFD700', // Яскраво-золотий колір для кнопки
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Тінь для Android
  },
  buttonText: {
    color: '#4B0082', // Темно-фіолетовий колір для тексту
    fontWeight: 'bold',
    fontSize: 16,
  },
  ordersContainer: {
    maxHeight: Dimensions.get('window').height * 0.3, // Зменшена висота блоку замовлень
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4B0082', // Темно-фіолетовий фон для замовлення
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Тінь для Android
  },
  orderText: {
    color: '#FFD700', // Золотий колір для тексту
    fontSize: 14,
  },
  removeText: {
    color: '#FF6347', // Червоний колір для кнопки "Remove"
    fontWeight: 'bold',
    fontSize: 14,
  },
  noOrdersText: {
    color: '#FFD700',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
  },
});
