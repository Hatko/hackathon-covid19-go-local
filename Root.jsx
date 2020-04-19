import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import { HomeScreen } from './Home'
import { CompanySignIn } from './CompanySignIn'
import { CompanyPage } from './CompanyPage'
import { Map } from './Map'
import { Donation } from './Donation'
import { UserSignIn } from './UserSignIn'

const Stack = createStackNavigator();

export const Root = () => {
  return <NavigationContainer>
    <ThemeProvider>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ header: () => null }} />
        <Stack.Screen name='CompanySignIn' component={CompanySignIn} />
        <Stack.Screen name='CompanyPage' component={CompanyPage} />
        <Stack.Screen name='Map' component={Map} />
        <Stack.Screen name='Donation' component={Donation} />
        <Stack.Screen name='UserSignIn' component={UserSignIn} />
      </Stack.Navigator>
    </ThemeProvider>
  </NavigationContainer>
}
