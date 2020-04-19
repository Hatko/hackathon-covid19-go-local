import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const { navigate } = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Business' style={{ marginBottom: 10 }} onPress={() => {
        navigate('CompanySignIn')
      }} />
      <Button title='Customer' onPress={() => {
        navigate('Map')
      }} />
    </View>
  );
}
