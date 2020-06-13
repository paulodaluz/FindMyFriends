import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Menu from "./src/pages/menu";
import Map from "./src/pages/map";
import ListFriends from "./src/pages/listFriends";
import CreateFriend from "./src/pages/createFriend";

//Desabilitano Warnings
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Setting a timer"]);

//Configurando Encondig
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: "rgb(113, 89, 193)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: true,
            title: "MENU",
            headerTitleAlign: "center",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="FriendsMap"
          component={Map}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: "rgb(113, 89, 193)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: true,
            title: "Mapa de Amigos",
            headerTitleAlign: "center",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="ListFriends"
          component={ListFriends}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: "rgb(113, 89, 193)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: true,
            title: "Lista de Amigos",
            headerTitleAlign: "center",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="CreateFriend"
          component={CreateFriend}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: "rgb(113, 89, 193)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: true,
            title: "Criar Amigo",
            headerTitleAlign: "center",
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
