// /Trainr/app/(tabs)/foodlog.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const FoodLogScreen = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [foodLog, setFoodLog] = useState<any[]>([]);

  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  const handleAddFood = () => {
    if (!foodName || !calories || !carbs || !protein || !fat) {
      alert('Please fill in all fields');
      return;
    }

    const newFood = {
      foodName,
      calories: parseInt(calories),
      carbs: parseInt(carbs),
      protein: parseInt(protein),
      fat: parseInt(fat),
    };

    setFoodLog([newFood, ...foodLog]); // Add to the beginning of the list
    setFoodName('');
    setCalories('');
    setCarbs('');
    setProtein('');
    setFat('');

    // Update the total values
    setTotalCalories(totalCalories + newFood.calories);
    setTotalCarbs(totalCarbs + newFood.carbs);
    setTotalProtein(totalProtein + newFood.protein);
    setTotalFat(totalFat + newFood.fat);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food Log</Text>

      {/* Form to log food */}
      <TextInput
        style={styles.input}
        placeholder="Food Name"
        placeholderTextColor="#bbb"
        value={foodName}
        onChangeText={setFoodName}
      />
      <TextInput
        style={styles.input}
        placeholder="Calories"
        placeholderTextColor="#bbb"
        value={calories}
        keyboardType="numeric"
        onChangeText={setCalories}
      />
      <TextInput
        style={styles.input}
        placeholder="Carbs (g)"
        placeholderTextColor="#bbb"
        value={carbs}
        keyboardType="numeric"
        onChangeText={setCarbs}
      />
      <TextInput
        style={styles.input}
        placeholder="Protein (g)"
        placeholderTextColor="#bbb"
        value={protein}
        keyboardType="numeric"
        onChangeText={setProtein}
      />
      <TextInput
        style={styles.input}
        placeholder="Fat (g)"
        placeholderTextColor="#bbb"
        value={fat}
        keyboardType="numeric"
        onChangeText={setFat}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddFood}>
        <Text style={styles.buttonText}>Add Food</Text>
      </TouchableOpacity>

      {/* Display food log */}
      <FlatList
        data={foodLog}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Text style={styles.foodText}>{item.foodName}</Text>
            <Text style={styles.foodText}>Calories: {item.calories}</Text>
            <Text style={styles.foodText}>Carbs: {item.carbs}g</Text>
            <Text style={styles.foodText}>Protein: {item.protein}g</Text>
            <Text style={styles.foodText}>Fat: {item.fat}g</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.foodList}
      />

      {/* Display total stats */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Calories: {totalCalories}</Text>
        <Text style={styles.totalText}>Total Carbs: {totalCarbs}g</Text>
        <Text style={styles.totalText}>Total Protein: {totalProtein}g</Text>
        <Text style={styles.totalText}>Total Fat: {totalFat}g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#121212',
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
  foodList: {
    width: '100%',
    marginTop: 20,
  },
  foodItem: {
    backgroundColor: '#333',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  foodText: {
    fontSize: 16,
    color: '#fff',
  },
  totalContainer: {
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default FoodLogScreen;
