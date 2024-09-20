import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Gradient = ({ text }) => {
  return (
    <LinearGradient
      colors={['#ff0000', '#ff4500', '#ff9900', '#ffd700', '#ffcc00']}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <Text style={styles.text}>{text}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 50, // Increased height for better visibility
    width: 100, // Increased width to accommodate the text
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Optional: Add rounded corners for aesthetics
  },
  text: {
    color: '#333', // Darker text color for better contrast
    fontSize: 16, 
    fontWeight: 'bold',
  },
});

export default Gradient;