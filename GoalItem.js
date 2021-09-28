import React, { useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

function GoalItem(props) {
  const [done, setDone] = useState(false);

  return (
    <View style={styles.goals}>
      <Text style={{ flex: 1, marginRight: 20 }}>{props.title}</Text>
      <TouchableOpacity style={styles.switch} onPress={props.onDelete.bind(this, props.id)}>
        <Text>🗑</Text>
      </TouchableOpacity>
      <Switch
        style={styles.switch}
        trackColor="#48D1CC"
        value={props.achieved}
        onValueChange={props.onUpdate.bind(this, props.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goals: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalItem;
