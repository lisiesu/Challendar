import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import HorizontalCalendarList from "./HorizontalCalendar";

import Home from "./screens/Home";
import Daily from "./screens/Daily";
import Weekly from "./screens/Weekly";
import Monthly from "./screens/Monthly";
import Habits from "./Habits";

import GoalModal from "./GoalModal";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <GoalModal />
   
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="Habits" component={Habits} />
      </Stack.Navigator>
      {/* <HorizontalCalendarList /> */}

    </NavigationContainer>
  );
}

//Calendar, Achievements, Quotes &  Habits on foot modal.  Rounded edge blue square with inside white icons.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
