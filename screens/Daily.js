import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import GoalItem from "../GoalItem";
import GoalInput from "../GoalInput";

function Daily({ navigation }) {
  const [currentDate, setCurrentDate] = useState("");
  const [enteredGoals, setEnteredGoals] = useState([]);

  useEffect(() => {
    let day = new Date().toDateString();
    setCurrentDate(day);
  }, []);

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

  const [quotes, setQuotes] = useState([]);

  const api_url = "https://zenquotes.io/api/random/";
  async function getapi(url) {
    const response = await fetch(url);
    let quotesData = await response.json();
    setQuotes(quotesData[0]);
    console.log(quotesData);
  }

  useEffect(() => {
    getapi(api_url);
  }, []);

  console.log(enteredGoals);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.time}>
        <Text style={styles.timeText}>{currentDate}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Daily Goals</Text>
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
      </View>

      <View style={styles.quote}>
        <View>
          <Text style={styles.quoteTitle}>{quotes.a}</Text>
        </View>
        <View>
          <Text style={styles.quoteText}>{quotes.q}</Text>
          <TouchableOpacity
            style={styles.switch}
            onPress={() => {
              getapi(api_url);
            }}
          >
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
              🤍
            </Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addGoals();
          navigation.navigate("Achievements", {
            achieved: enteredGoals.filter((goal) => goal.achieved === true),
          });
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
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
  time: {
    height: 80,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  timeText: {
    fontWeight: "bold",
    fontSize: 28,
  },
  quote: {
    height: 120,
    backgroundColor: "#48D1CC",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  quoteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quoteText: {
    fontStyle: "italic",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Daily;
