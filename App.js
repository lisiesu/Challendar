import React, {useState, useEffect} from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import Home from "./screens/Home";
import Daily from "./screens/Daily";
import Weekly from "./screens/Weekly";
import Monthly from "./screens/Monthly";
import Habits from "./screens/Habits";
import Achievements from "./screens/Achievements";
import Quotes from './screens/Quotes';
import Calendar from "./screens/Calendar";
import GoalModal from "./GoalModal";
import AgendaScreen from "./screens/WeeklyGoals";
// import WeeklyGoals from "./screens/WeeklyGoals";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <GoalModal />
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="Achievements" component={Achievements} />
        <Stack.Screen name="Habits" component={Habits} />
        <Stack.Screen name="Quotes" component={Quotes} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="WeeklyGoals" component={AgendaScreen} />
        {/* <Stack.Screen name="WeeklyGoals" component={WeeklyGoals} /> */}
      </Stack.Navigator>

      {/* <Tab.Navigator>
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Achievements" component={Achievements} />
        <Tab.Screen name="Quotes" component={Quotes} />
        <Tab.Screen name="Habits" component={Habits} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

});
