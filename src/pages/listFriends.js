import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { getMyFriends, deleteMyFriend } from "../service/friendsService";
import Icon from "react-native-vector-icons/FontAwesome";

const ListFriends = (props) => {
  const { navigation } = props;

  const [friends, setFriends] = useState([]);
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [mensagem, setMensagem] = useState("");

  const getAllFriends = () => {
    getMyFriends()
      .then((retorno) => {
        setFriends(retorno);
      })
      .catch((erro) => console.log(erro));
  };

  const deleteFriend = (friend) => {
    deleteMyFriend(friend)
      .then(() => getAllFriends())
      .catch((erro) => setMensagem(erro));
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  return (
    <View style={styles.container}>
      <Text> LISTA DE AMIGOS </Text>
      <Text> Clique para Deletar </Text>
      <Text>{mensagem}</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setKey(item.key);
              setName(item.name);
              setAddress(item.address);
              setPhoneNumber(item.phoneNumber);
            }}
          >
            <View style={styles.box}>
              <View style={styles.boxCollum}>
                <Text style={styles.boxTitle}>{item.name}</Text>
                <Text>{item.address}</Text>
                <Text>{item.phoneNumber}</Text>
                <Icon
                  onPress={() => deleteFriend(item)}
                  name="trash"
                  size={30}
                  color="red"
                />
              </View>
              <View style={styles.boxCollumAction}></View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Voltar ao Menu"
        onPress={() => navigation.replace("Menu")}
        color="blue"
      />
    </View>
  );
};

export default ListFriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  box: {
    flexDirection: "row",
    width: "95%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    padding: 10,
    marginTop: 10,
  },
  boxCollum: {
    width: "80%",
  },
  boxCollumAction: {
    width: "20%",
  },
  boxTitle: {
    fontWeight: "bold",
    color: "blue",
  },
});
