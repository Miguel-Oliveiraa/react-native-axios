import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import api from "../services/axios";
const windowWidth = Dimensions.get("window").width;

export default function Album() {
  const [users, setUser] = useState();

  useEffect(() => {
    api
      .get("/albums/1/photos")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <Image
        style={{ width: windowWidth, height: windowWidth }}
        source={{
          uri: "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
        }}
      />
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.url}</Text>
      <Text>{item.url}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
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
    // marginLeft: 20,
  },
});
