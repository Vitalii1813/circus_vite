import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';

export default function SouvenirScreen() {
  const [selectedSouvenir, setSelectedSouvenir] = useState<any>(null);
  const [orders, setOrders] = useState<{ souvenir: string; location: string }[]>([]);

  const souvenirs = [
    { name: 'Glow Bracelet', price: '$5', image: require('../assets/souvenirs/Glow.png') },
    { name: 'Glow in the Dark Necklace', price: '$7', image: require('../assets/souvenirs/glow-stick-light.jpg') },
    { name: 'Circus Animal Figurine', price: '$10', image: require('../assets/souvenirs/Figurine.png') },
    { name: 'LED Spinner', price: '$6', image: require('../assets/souvenirs/led_spinner.png') },
    { name: 'Light-Up Ring', price: '$5', image: require('../assets/souvenirs/light_up_ring.jpeg') },
    { name: 'Brush', price: '$3', image: require('../assets/souvenirs/Brush.jpeg') },
    { name: 'Circus Tent', price: '$6', image: require('../assets/souvenirs/circus_tent.png') },
  ];

  const addOrder = () => {
    if (selectedSouvenir) {
      const newOrder = { souvenir: selectedSouvenir.name, location: 'N/A' };
      setOrders([...orders, newOrder]);
      setSelectedSouvenir(null);
    } else {
      alert('Please select a souvenir.');
    }
  };

  const removeOrder = (index: number) => {
    Alert.alert(
      'Remove Order',
      'Are you sure you want to remove this order?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            const newOrders = [...orders];
            newOrders.splice(index, 1);
            setOrders(newOrders);
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Souvenir Catalog</Text>
      <Text style={styles.subtitle}>Select a Souvenir:</Text>
      <FlatList
        data={souvenirs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              selectedSouvenir?.name === item.name && styles.selectedItem,
            ]}
            onPress={() => setSelectedSouvenir(item)}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.souvenirInfo}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.scrollContainer}
      />
      <TouchableOpacity style={styles.addButton} onPress={addOrder}>
        <Text style={styles.buttonText}>Add to Orders</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Your Orders:</Text>
      <View style={styles.ordersContainer}>
        {orders.length > 0 ? (
          <FlatList
            data={orders}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.orderItem}>
                {souvenirs.find(s => s.name === item.souvenir) && (
                  <Image source={souvenirs.find(s => s.name === item.souvenir).image} style={styles.orderImage} />
                )}
                <View style={styles.orderTextContainer}>
                  <Text style={styles.orderText}>{item.souvenir}</Text>
                  {souvenirs.find(s => s.name === item.souvenir) && (
                    <Text style={styles.orderPriceText}>{souvenirs.find(s => s.name === item.souvenir).price}</Text>
                  )}
                </View>
                <TouchableOpacity onPress={() => removeOrder(index)}>
                  <View>
                    <Text style={styles.removeText}>Remove</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noOrdersText}>No orders yet</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2E0854',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#FFD700',
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
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedItem: {
    backgroundColor: '#FFD700',
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: '#D3D3D3',
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
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#4B0082',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ordersContainer: {
    maxHeight: Dimensions.get('window').height * 0.3,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  orderItem: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
    backgroundColor: '#4B0082',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    marginLeft: '13%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  orderText: {
    color: '#FFD700',
    fontSize: 14,
  },
  removeText: {
    color: '#FF6347',
    fontWeight: 'bold',
    fontSize: 14,
  },
  noOrdersText: {
    color: '#FFD700',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 8,
  },
  orderImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  orderTextContainer: {
    flexDirection: 'column',
  },
  orderPriceText: {
    color: '#FFD700',
    fontSize: 12,
  },
});