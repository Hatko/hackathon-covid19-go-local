import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, Image, Text, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export const Donation = () => {
  const { navigate } = useNavigation()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 36 }}>
            <Text style={{ fontSize: 24, color: 'gray' }}>Veggies</Text>
            <Image
              source={require('./assets/meat.png')}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 36 }}>
            <Text style={{ fontSize: 24, color: 'gray' }}>Meaties</Text>
            <Image
              source={require('./assets/veggie.png')}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, color: 'green', marginBottom: 60 }}>500 DKK</Text>
          <Input
            placeholder={'Comment'}
          />
        </View>
        <View style={{ paddingBottom: 50, flex: 0.2, justifyContent: 'flex-end' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Button
              containerStyle={{ flex: 1, marginRight: 30 }}
              title={'Support them!'}
              onPress={() => navigate('Map')}
            />
            <Button
              containerStyle={{ flex: 1 }}
              title={'My vouchers'}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
