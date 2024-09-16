import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BookingScreen() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Схема сидінь у вигляді трикутника
  const seats = [
    ['1'],
    ['2A', '2B'],
    ['3A', '3B', '3C'],
    ['4A', '4B', '4C', '4D'],
    ['5A', '5B', '5C', '5D', '5E'],
    ['6A', '6B', '6C', '6D', '6E', '6F'],
    ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
  ];

  const toggleSeat = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Seats</Text>

      <View style={styles.triangleContainer}>
        {seats.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((seat) => (
              <TouchableOpacity
                key={seat}
                style={[
                  styles.seat,
                  selectedSeats.includes(seat) && styles.selectedSeat,
                ]}
                onPress={() => toggleSeat(seat)}
              >
                <Text style={styles.seatLabel}>{seat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <Text style={styles.selectedText}>
        Selected Seats: {selectedSeats.join(', ') || 'None'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1b1b1b',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  triangleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  seat: {
    width: 30,
    height: 30,
    backgroundColor: '#4A4A4A',
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#666',
  },
  selectedSeat: {
    backgroundColor: '#4CAF50',
  },
  seatLabel: {
    fontSize: 12,
    color: 'white',
  },
  selectedText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});