import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";

import GoalInput from "../GoalInput";
import GoalItem from "../GoalItem";
import Habits from "../Habits";



// function Weekly({ navigation, route }) {
function Weekly(props) {
  const [enteredGoals, setEnteredGoals] = useState([]);

  // const newHabit = route.params ? route.params.newHabit : null;
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   if (newHabit) {
  //     setList((current) => [newHabit, ...current]);
  //   }
  // }, [newHabit]);


  function addGoalHandler(title) {
    setEnteredGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: title },
    ]);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Weekly Goals</Text>
        <GoalInput onAdd={addGoalHandler}/>

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={enteredGoals}
          renderItem={
            (itemData) => 
            <GoalItem title={itemData.item.value}></GoalItem>
          }
        />

      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    padding: 10,
  },
  heading: {
    fontFamily:  'monospace',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
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
});

export default Weekly;
