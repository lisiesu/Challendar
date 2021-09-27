import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Switch,
  FlatList,
} from "react-native";

const HABITS = [
  { habitName: "Study" },
  { habitName: "Eat healthy" },
  { habitName: "Drink more water" },
  { habitName: "Exercise" },
  { habitName: "Meditate" },
  { habitName: "Achieve a micro goal per day" },
  { habitName: "Read a book" },
  { habitName: "Get enough sleep" },
  { habitName: "Cook home meals" },
  { habitName: "Be on time" },
  { habitName: "Recycle" },
  { habitName: "Disconnect from social media" },
  { habitName: "Introduce yourself to someone new" },
  { habitName: "Give someone a hug" },
  { habitName: "Spend time on a hobbie" },
  { habitName: "Breathing exercises" },
  { habitName: "Marie-Kondo your space" },
  { habitName: "Call a friend" },
  { habitName: "No smoking" },
  { habitName: "10 minutes grooming" },
  { habitName: "Take a small risk" },
  { habitName: "Compliment others" },
  { habitName: "Spend 20 minutes a day learning" },
  { habitName: "Go for a walk" },
  { habitName: "Act of kindness for a stranger" },
  { habitName: "Refuse to talk negative things" },
  { habitName: "Relax" },
  { habitName: "Stand up straight" },
];

function Habits({navigation}) {
  const [habit, setHabit] = useState("");
  const [selectedHabit, setSelectedHabit] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!habit) {
      Alert.alert("Enter a new habit");
    }
    else {
        navigation.navigate('Weekly', {
            newHabit: {habitName: habit, habits: selectedHabit}
        })
    }
    
  }, [habit, selectedHabit]);

  const handleValueChange = useCallback((value, newHabit) => {
    if(newHabit === true) {
        setSelectedHabit(habits => [...habits, value])
    } else {
        setSelectedHabit( habits => habits.filter(selectedHabit => selectedHabit.habitName!==selectedHabit.habitName))
    }
  },[selectedHabit, setSelectedHabit]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Enter your own </Text>
      <TextInput
        style={styles.textBox}
        placeholder="New Habit"
        value={habit}
        onChangeText={setHabit}
      />

      <FlatList
        data={HABITS}
        keyExtractor={(item) => item.habitName}
        renderItem={({ item }) => (
          <View style={styles.switch}>
            <Text>{item.habitName}</Text>
            <Switch 
                value={!!selectedHabit.find(
                value => {value.habitName===value.habitName})} 
                onValueChange={selected => {handleValueChange(item, selected)}} />
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textBox: {
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    height: 40,
    backgroundColor: "#48D1CC",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default Habits;
