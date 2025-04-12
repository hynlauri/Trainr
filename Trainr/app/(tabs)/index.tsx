import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router'; 

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Fitness App!</Text>

      {/* Navigate to Profile screen */}
      <Link href="/Profile">
        <Button title="Go to Profile" />
      </Link>

      {/* Navigate to Workouts screen */}
      <Link href="/Workouts">
        <Button title="Go to Workouts" />
      </Link>

      {/* Navigate to Food Log screen */}
      <Link href="/Foodlog">
        <Button title="Go to Food Log" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',  // Dark background
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 20,
  },
});

export default HomeScreen;
