import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import RoundButton from './RoundButton';

function GoalInput(props) {
    const [value, setValue] = useState("");

    function inputHandler(goal) {
        setValue(goal);
      }

    return (

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={styles.input}
            placeholder="Enter your goal"
            onChangeText={inputHandler}
            value={value}
          />
          {/* <Button style={styles.button}title="Add"/> */}
          <RoundButton
            style={styles.switch}
            size={50}
            title="+"
            onPress={props.onAdd.bind(this, value)}
          />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
      backgroundColor: "#fff",
      height: 50,
      width: "85%",
      borderColor: "grey",
      // borderColor: '#48D1CC',
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      flexDirection: "row",
    },
    switch: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
});

export default GoalInput;