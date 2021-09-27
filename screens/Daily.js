import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Switch,
} from "react-native";

import GoalItem from "../GoalItem";
import GoalInput from "../GoalInput";
import RoundButton from "../RoundButton";

function Daily(props) {
  const [currentDate, setCurrentDate] = useState("");
  const [value, setValue] = useState("");
  const [enteredGoals, setEnteredGoals] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let day = new Date().toDateString();
    setCurrentDate(day);
  }, []);

  function inputHandler(goal) {
    setValue(goal);
  }

  function addGoalHandler(title) {
    setEnteredGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: title },
    ]);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.time}>
        <Text style={styles.timeText}>{currentDate}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Daily Goals</Text>
        <GoalInput onAdd={addGoalHandler}/>

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={enteredGoals}
          renderItem={
            (itemData) => 
            <GoalItem title={itemData.item.value}></GoalItem>

            //    (
            //     <View style={styles.goals}>
            //       <Text>{itemData.item.value}</Text>
            //       <Switch
            //         style={styles.switch}
            //         value={done}
            //         onValueChange={setDone}
            //         trackColor="#48D1CC"
            //       />
            //     </View>
            //   )
          }
        />

        {/* {enteredGoals.map((goal) => (
            
          ))} */}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 50,
    width: "85%",
    borderColor: "grey",
    // borderColor: '#48D1CC',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
    // borderRadius: 10,
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
  goals: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default Daily;
