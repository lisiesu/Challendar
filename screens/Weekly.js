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
import Habits from "./Habits";

// function Weekly({ navigation, route }) {
function Weekly({ navigation }) {
  const [enteredGoals, setEnteredGoals] = useState([]);

  // const newHabit = route.params ? route.params.newHabit : null;
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   if (newHabit) {
  //     setList((current) => [newHabit, ...current]);
  //   }
  // }, [newHabit]);
  function addGoals() {
    fetch("http://10.10.22.70:3001/goals", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(enteredGoals),
   });
 }

  function addGoalHandler(title) {
    setEnteredGoals((currentGoals) => [
      ...currentGoals,
      {
        date: new Date().toDateString(),
        id: Math.random().toString(),
        value: title,
        achieved: false,
      },
    ]);
  }

  function removeGoalHandler(goalId) {
    setEnteredGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  function updateGoalHandler(goalId) {
    setEnteredGoals((currentGoals) => {
      return currentGoals.map((goal) => {
        if (goal.id === goalId) {
          return { ...goal, achieved: !goal.achieved };
        } else return goal;
      });
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Weekly Goals</Text>
        <GoalInput onAdd={addGoalHandler} />

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={enteredGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              title={itemData.item.value}
              achieved={itemData.item.achieved}
              onUpdate={updateGoalHandler}
              onDelete={removeGoalHandler}
            ></GoalItem>
          )}
        />
        <View style={{ flex: 3 }}>
          <Text style={styles.text}>Weekly Habits</Text>
        </View>

        <FlatList
        // style={{padding:10}}
        //   keyExtractor={(item, index) => item.id}
        //   data={achieved}
        //   renderItem={(itemData) => <Text>{itemData.item.date}, {itemData.item.value}</Text>}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addGoals();
          navigation.navigate("WeeklyGoals",{achieved: enteredGoals.filter((goal)=>goal.achieved === true)});
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  heading: {
    fontFamily: "monospace",
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
