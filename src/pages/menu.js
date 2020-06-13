import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Menu = (props) => {
  const { navigation } = props;
  const { route } = props;

  return (
    <View>
      <Text> Seja Bem-Vindo </Text>

      <Button
        title="Adicionar amigo"
        onPress={() => navigation.replace("CreateFriend")}
        color="red"
      />

      <Button
        title="Ver todos os amigos"
        onPress={() => navigation.replace("ListFriends")}
        color="red"
      />

      <Button
        title="Mapa de Amigos"
        onPress={() => navigation.replace("FriendsMap")}
        color="red"
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
