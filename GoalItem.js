import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

function GoalItem(props) {

    const [done, setDone] = useState(false);

    return (
        <View style={styles.goals}>
        <Text style={{flex: 1, marginRight: 20}}>{props.title}</Text>
        <Switch style={styles.switch}
        value={done} 
        onValueChange={setDone}
        trackColor='#48D1CC'
        />
      </View>
    )
};

const styles = StyleSheet.create({
    input: {
      height: 50,
      borderColor: "grey",
      // borderColor: '#48D1CC',
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      flexDirection: "row",
         
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
    }
  });

export default GoalItem;