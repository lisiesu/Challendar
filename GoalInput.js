import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import RoundButton from "./RoundButton";

function GoalInput(props) {
  const [value, setValue] = useState(
  );

  function inputHandler(goal) {
    setValue(goal);
  }
  
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getGoals();
  }, []);

  function getGoals() {
    return fetch('http://10.10.22.70:3001/goals')
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((error)=> console.log(error))
  }
  console.log(value)

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(value)
    setValue("");
  }

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
        onChangeText={inputHandler}
        value={value}
      />
      <RoundButton
        style={styles.switch}
        size={50}
        title="+"
        // onPress={props.onAdd.bind(this, value)}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 50,
    width: "85%",
    borderColor: "grey",
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
});

export default GoalInput;
