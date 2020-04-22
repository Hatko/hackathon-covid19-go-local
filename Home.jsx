
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { UserSignIn } from './UserSignIn';

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 80 }}>
      <Text style={{ fontSize: 48 }}>
        Go local
      </Text>
      <Image
        source={require('./assets/logo.png')}
        style={{
          width: 245,
          height: 200,
          marginBottom: 40,
        }}
      />
      <View style={{ alignContent: 'flex-end', width: '100%' }}>
        <Button
          title='Business'
          style={{ marginBottom: 40 }}
          containerStyle={{ width: '100%', paddingHorizontal: 40 }}
          onPress={() => {
            navigate('CompanySignIn')
          }}
        />
        <Button
          title='Customer'
          containerStyle={{ width: '100%', paddingHorizontal: 40 }}
          onPress={() => {
            navigate('Map')
          }} />
      </View>
    </View>
  );
};
