// /Trainr/app/(tabs)/profile/index.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    height: '6\'1"',
    weight: '180 lbs',
    profilePic: 'https://www.example.com/default-profile-pic.png',
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={{ uri: user.profilePic }} style={styles.profilePic} />

      {/* User Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>Height: {user.height}</Text>
        <Text style={styles.info}>Weight: {user.weight}</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Edit Profile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',  // Dark background
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    color: '#fff',  // White text
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#fff',  // White text
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', // White button text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
