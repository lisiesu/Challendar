import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";


function GoalModal() {
  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.text}>Challendar</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    text: {
      fontFamily:  'monospace',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    box: {
        marginTop: 50,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#48D1CC',
    }
})

export default GoalModal;
