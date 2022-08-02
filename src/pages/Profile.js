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
import api from "../services/axios";

export function Profile({ route, navigation }) {
  const { userData } = route.params;
  const [users, setUser] = useState();

  useEffect(() => {
    api
      .get(`/users/${userData.id}/albums`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      onPress={() => navigation.navigate("Album", { albumData: item })}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.title}</Text>
      <Text>{item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <Image source={require(`../../assets/imgs/6.png`)} />
        <View style={{ marginLeft: 18 }}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>
            {userData.name}
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 12 }}>
            {userData.username}
          </Text>
        </View>
      </View>
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
    paddingLeft: 20,
  },
});
