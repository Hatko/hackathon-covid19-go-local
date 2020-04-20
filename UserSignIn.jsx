import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export const UserSignIn = () => {
  const { navigate } = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Sign IN</Text>
    </View>
  );
}