import React from "react";
import { View, Image, Text, FlatList, ViewBase } from "react-native";
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
          { user: "Ban", donation: "30 DKK" },
          { user: "Ban", donation: "30 DKK" },
          { user: "Ban", donation: "30 DKK" },
          { user: "Ban", donation: "30 DKK" },
        ]}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginHorizontal: 40, fontSize: 15, color: "gray" }}>
              {item.user}
            </Text>
            <Text style={{ marginHorizontal: 40, fontSize: 15, color: "gray" }}>
              {item.donation}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => `${item.user}-${index}`}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <Button
          title={"I need money"}
          style={{ marginBottom: 40 }}
          containerStyle={{ width: '60%', paddingHorizontal: 30 }}
        />
        <Button
          title={"I got a voucher"}
          style={{ marginBottom: 40 }}
          containerStyle={{ width: '60%', paddingHorizontal: 30 }}
        />
      </View>
    </View>
  );
};
