import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "react-native-elements";
import { HomeScreen } from "./Home";
import { CompanySignIn } from "./CompanySignIn";
import { CompanyPage } from "./CompanyPage";
import { Donation } from "./Donation";
import { UserSignIn } from "./UserSignIn";
import { Platform } from "react-native";
import { CompaniesList } from "./CompaniesList";

let Map = null

if (Platform.OS !== 'web') {
  Map = require('./Map').Map
}

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen name="CompanySignIn" component={CompanySignIn} />
          <Stack.Screen name="CompaniesList" component={CompaniesList} />
          <Stack.Screen name="CompanyPage" component={CompanyPage} />
          {Map && <Stack.Screen name="Map" component={Map} />}
          <Stack.Screen name="Donation" component={Donation} />
          <Stack.Screen name="UserSignIn" component={UserSignIn} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};
