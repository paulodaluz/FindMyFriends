import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { saveFriend } from "../service/friendsService";

const ListFriends = (props) => {
  const { navigation } = props;
  const { route } = props;

  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    saveFriend()
      .then((retorno) => {
        console.log("PAULERA26", retorno);
        setFriends(retorno);
      })
      .catch((erro) => console.log(erro));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <View style={styles.container}>
      <Text> LISTA DE AMIGOS </Text>

      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("PAULERA25", item);
              /* setTitle(item);
              setDescription(item.description);
              setKey(item.key); */
            }}
          >
            <View style={styles.box}>
              <View style={styles.boxCollum}>
                <Text style={styles.boxTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
              <View style={styles.boxCollumAction}>
                <Text>
                  <Icon
                    onPress={() => deleteWork(item)}
                    name="trash"
                    size={30}
                    color="red"
                  />
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Voltar a página inicial"
        onPress={() => navigation.replace("Home")}
        color="red"
      />
    </View>
  );
};

export default ListFriends;

const styles = StyleSheet.create({});
