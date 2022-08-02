import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import api from "./src/services/axios";

export default function App() {
  const [users, setUser] = useState();

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <Image source={require(`../my-app/assets/imgs/1.png`)} />
      {/* <Text>{typeof item.id}</Text> */}
      <View style={{ marginLeft: 18 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontWeight: "400", fontSize: 12 }}>{item.username}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {console.log(typeof users)}
      <Text style={{ fontWeight: "700", fontSize: 32, marginBottom: 20 }}>
        Friends
      </Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
    marginLeft: 20,
  },
});
