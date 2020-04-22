import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const CompaniesList = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, alignContent: 'space-between', justifyContent: 'space-between', marginVertical: 200 }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, color: 'gray', paddingHorizontal: 30 }}>Veggies</Text>
          <Image
            source={require('./assets/meat.png')}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, color: 'gray', paddingHorizontal: 30 }}>Meaties</Text>
          <Image
            source={require('./assets/veggie.png')}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
      </View>
      <Button
        style={{ alignSelf: 'center' }}
        title={'Support all in the area'}
        onPress={() => {
          navigate('UserSignIn')
        }}
      />
    </View>
  );
};
