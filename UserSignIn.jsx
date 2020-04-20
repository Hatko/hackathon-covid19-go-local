import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export const UserSignIn = () => {
  const { navigate } = useNavigation();
  // state = { email: " ", name: " ", phone: " " };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Who is our Local Hero?</Text>
      <Text>Email:</Text>
      <TextInput
        placeholder="e.g. local@golocal.dk"
        style={{
          borderWidth: 1,
          padding: 8,
          margin: 10,
          borderColor: "#DEDEDE",
          borderRadius: 7,
          width: 300,
        }}
        keyboardType="email-address"
      />
      <Text>Name:</Text>
      <TextInput
        placeholder="e.g. John Doe"
        style={{
          borderWidth: 1,
          padding: 8,
          margin: 10,
          borderColor: "#DEDEDE",
          borderRadius: 7,
          width: 300,
        }} />
      <Text>Phone:</Text>
      <TextInput
        placeholder="e.g. 939XXXXX"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 8,
          margin: 10,
          borderColor: "#DEDEDE",
          borderRadius: 7,
          width: 300,
        }}
      />
      <Button title="Sign up"></Button>
    </View>
  );
};
