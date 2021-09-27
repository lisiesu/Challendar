import React from "react";
import { Text, StyleSheet, FlatList, View, TouchableOpacity, ScrollView } from "react-native";
import GoalBox from "../GoalBox";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import HorizontalCalendarList from "../HorizontalCalendar";
// import CalendarsScreen from "../MonthlyCalendar";
import MonthlyGoals from "../MonthlyGoals";

const GOALS = [{ name: "Goal1" }, { name: "Goal2" }, { name: "Goal3" }];


function Monthly(props) {
  return (
    <View style={{ flex: 1 }}>
       {/* <MonthlyGoals /> */}
      <FlatList
        style={styles.container}
        data={GOALS}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <GoalBox name={item.name} />}
        ListHeaderComponent={<Text style={styles.heading}>Monthly Goals</Text>}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>


      <HorizontalCalendarList />







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

export default Monthly;
