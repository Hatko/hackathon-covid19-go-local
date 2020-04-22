import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export const CompanySignIn = () => {
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "grey", fontWeight: "bold", fontSize: 30 }}>
        Get paid now.
      </Text>
      <Text style={{ color: "grey", fontWeight: "bold", fontSize: 30 }}>
        Serve later
      </Text>
      <View style={styles.action}>
        <TextInput placeholder="CVR no" style={styles.textInput} />
      </View>
      <View style={styles.action}>
        <TextInput placeholder="Name" style={styles.textInput} />
      </View>
      <View style={{ marginTop: "5%", width: "80%" }}>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            height: 42,
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            backgroundColor: "blue",
            alignSelf: "center",
            textAlign: "center",
          }}
          onPress={() => navigate('CompanyPage')}
        >
          <Text style={{ color: "white" }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
var styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: 2,
    paddingBottom: 2,
    color: "grey",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },

  animation: {
    backgroundColor: "#93278f",
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogIn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
