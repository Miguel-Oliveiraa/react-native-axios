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

export function Album({ route, navigation }) {
  const { albumData } = route.params;
  const [users, setUser] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    api
      .get(`/albums/${albumData.id}/photos`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  useEffect(() => {
    setImageUrl("https://via.placeholder.com/600/b29eb8.png");
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          style={{ width: windowWidth, height: windowWidth }}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.url}</Text>
        <Text>{item.url}</Text>
      </View>
    );
  };

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
    paddingTop: 60,
    // marginLeft: 20,
  },
});
