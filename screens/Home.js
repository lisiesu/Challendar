import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("Daily")}
      >
        <Text>Daily</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("Weekly")}
      >
        <Text>Weekly</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("WeeklyGoals")}
      >
        <Text>Weekly Goals</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("Monthly")}
      >
        <Text>Monthly</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("Achievements", {})}
      >
        <Text>Achievements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("Habits")}
      >
        <Text>Habits</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("Quotes")}
      >
        <Text>Quotes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Text>Calendar</Text>
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
  input: {
    height: 50,
    borderColor: "#48D1CC",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  list: {
    height: 50,
    marginTop: 30,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
  },
});

export default Home;
