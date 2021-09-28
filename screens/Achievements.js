import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

function Achievements({ route }) {
  const { achieved } = route.params;
  console.log(achieved);
  return (
    <View style={styles.container}>
      <View style={styles.goals}>
        <Text
          style={{ flex: 1, marginRight: 20, fontSize: 20, fontWeight: "bold" }}
        >
          My Achievements
        </Text>
      </View>
      <View>

        <FlatList
        style={{padding:10}}
          keyExtractor={(item, index) => item.id}
          data={achieved}
          renderItem={(itemData) => <Text>{itemData.item.date}, {itemData.item.value}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  modal: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "25%",
  },
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

export default Achievements;
