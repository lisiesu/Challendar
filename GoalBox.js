import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";

function GoalBox() {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);

  return (
    <ScrollView>
      <View style={styles.input}>
        <TextInput
          style={{ flex: 1, marginRight: 20 }}
          value={value}
          onChangeText={setValue}
          placeholder="Enter your goal"
        />
      </View>
      <View style={styles.input}>
        <Text style={{ flex: 1, marginRight: 20 }}>{value}</Text>
        <Switch
          style={styles.switch}
          value={done}
          onValueChange={setDone}
          trackColor="#48D1CC"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalBox;
