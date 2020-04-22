import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const CompanyPage = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, color: "gray" }}>Veggies</Text>
      <Image
        source={require("./assets/veggie.png")}
        style={{
          height: 150,
          width: 150,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 18,
            color: "green",
            justifyContent: "flex-start",
            margin: 10,
          }}
        >
          Available credits: 2400 DKK
        </Text>
        <Text
          style={{
            flex: 1,
            fontSize: 18,
            color: "red",
            justifyContent: "flex-end",
            margin: 10,
          }}
        >
          Money used: 300 DKK
        </Text>
      </View>
      <Text style={{ fontSize: 15, color: "gray" }}>Latest donations: </Text>
      <FlatList
        data={[
          { user: "Ban                            30 DKK" },
          { user: "Ban                            30 DKK" },
          { user: "Ban                            30 DKK" },
          { user: "Ban                            30 DKK" },
        ]}
        renderItem={({ item, index }) => (
          <Text style={{ fontSize: 15, color: "gray" }}>
            {item.user}
          </Text>
        )}
        keyExtractor={(item, index) => `${item.user}-${index}`}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 30,
        }}
      >
        <Button
          style={{ flex: 1, margin: 20 }}
          title={"I need money"}
          onPress={() => {
            navigate("CompanySignIn");
          }}
        />
        <Button
          style={{
            flex: 1,
            margin: 20,
          }}
          title={"I got a voucher"}
          onPress={() => {
            navigate("UserSignIn");
          }}
        />
      </View>
    </View>
  );
};
