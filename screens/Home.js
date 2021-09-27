import React, {useCallback, useEffect, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function Home({ navigation }) {

const [quotes, setQuotes] = useState([]);

const handleQuotes = useCallback ( async () => {
    const result = await fetch ('https://zenquotes.io/api/quotes/');
    const quotes = await result.json();
    if(result.ok) {
        setQuotes(quotes);
    }
});

useEffect(()=> {
    handleQuotes();
}, []);




  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.input} onPress={() => navigation.navigate("Daily")}>
        <Text>Daily</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input} onPress={() => navigation.navigate("Weekly")}>
        <Text>Weekly</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input} onPress={() => navigation.navigate("Monthly")}>
        <Text>Monthly</Text>
      </TouchableOpacity>

    {/* <FlatList 
        style={styles.list}
        data={quotes}
        keyExtractor={item => item.q}
        renderItem={({item}) => <Text style={styles.text}>{item.text}</Text>}
    />
 */}

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
  input: {
    height: 50,
    // borderColor: 'grey',
    borderColor: '#48D1CC',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
},
    list: {
        height: 50,
        marginTop: 30,
        padding: 10,
        flex:1,
    },
    text: {
        marginBottom: 20,
        fontSize:16,
    }
});

export default Home;
