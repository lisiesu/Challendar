import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Focus from "./Focus";

function MonthlyGoals() {
    const [mGoals, setMGoals] = useState(null);

  return (
    <View> {mGoals? (<Text> Here are your monthly goals!</Text>) : (<Focus addGoal={setMGoals} />)}
      <Text>{mGoals}</Text>
    </View>
  );
}

export default MonthlyGoals;
