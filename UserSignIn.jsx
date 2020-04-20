import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";


export const UserSignIn = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState(' ')
  const [name, setName] = useState(' ')
  const [phone, setPhone] = useState('')

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Who is our Local Hero?</Text>
      <label>Email:</label>
      <TextInput
        placeholder='e.g. local@golocal.dk'
        keyboardType='email-address'
        onChangeText={(value) => setEmail(value)}
      />
            <label>Name:</label>
      <TextInput
        placeholder='e.g. John Doe'
        keyboardType='name'
        onChangeText={(value) => setName(value)}
      />
            <label>Phone:</label>
      <TextInput
        placeholder='e.g. 939XXXXX'
        keyboardType='numeric'
        onChangeText={(value) => setPhone(value)}
      />
  
      <Button title="Sign up" onPress={}></Button>
    </View>
  );
};
