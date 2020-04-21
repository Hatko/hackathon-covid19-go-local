import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export const CompanySignIn = () => {
  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
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
              backgroundColor: "#0097e6",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            <Text style={{ color: "white" }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
var styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: 2,
    marginLeft: 10,
    paddingBottom: 2,
    color: "#57606f",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
});
