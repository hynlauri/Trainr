import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const WorkoutsScreen = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [workouts, setWorkouts] = useState<{ type: string; duration: string; notes: string }[]>([]);

  // Handle saving a new workout entry
  const handleSaveWorkout = () => {
    if (!workoutType || !duration) {
      alert('Please fill in both workout type and duration.');
      return;
    }

    const newWorkout = { type: workoutType, duration, notes };
    setWorkouts([newWorkout, ...workouts]); // Add to the beginning of the list
    setWorkoutType(''); // Clear input fields
    setDuration('');
    setNotes('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Journal</Text>

      {/* Form to log a new workout */}
      <TextInput
        style={styles.input}
        placeholder="Workout Type"
        placeholderTextColor="#bbb"
        value={workoutType}
        onChangeText={setWorkoutType}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (e.g., 30 min)"
        placeholderTextColor="#bbb"
        value={duration}
        onChangeText={setDuration}
      />
      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Notes (optional)"
        placeholderTextColor="#bbb"
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveWorkout}>
        <Text style={styles.buttonText}>Save Workout</Text>
      </TouchableOpacity>

      {/* List of past workouts */}
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text style={styles.workoutType}>{item.type}</Text>
            <Text style={styles.workoutDuration}>{item.duration}</Text>
            {item.notes ? <Text style={styles.workoutNotes}>{item.notes}</Text> : null}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.workoutList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#121212',  // Dark background
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
  },
  notesInput: {
    height: 80, // Give more space for notes
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutList: {
    width: '100%',
    marginTop: 20,
  },
  workoutItem: {
    backgroundColor: '#333',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  workoutType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  workoutDuration: {
    fontSize: 16,
    color: '#bbb',
  },
  workoutNotes: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5,
  },
});

export default WorkoutsScreen;