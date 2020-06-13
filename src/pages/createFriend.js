import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { saveFriend } from "../service/friendsService";

const CreateFriend = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [mensagem, setMensagem] = useState("");

  const createFriend = () => {
    if (!name || !phoneNumber || !address) {
      setMensagem("Campos Inválidos");
    }
    const friend = {
      name,
      phoneNumber,
      address,
    };
    saveFriend(friend, "")
      .then((res) => {
        console.log(res);
        setMensagem("Dados Inseridos com Sucesso!");
      })
      .catch((err) => {
        setMensagem(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text> CRIAR UM AMIGO </Text>
      <TextInput
        style={styles.caixaTexto}
        placeholder="Nome"
        value={name}
        onChangeText={(value) => {
          setName(value), setMensagem("");
        }}
      />
      <TextInput
        style={styles.caixaTexto}
        placeholder="Numero de Telefone"
        value={phoneNumber}
        keyboardType="numeric"
        onChangeText={(value) => {
          setPhoneNumber(value), setMensagem("");
        }}
      />
      <TextInput
        style={styles.caixaTexto}
        placeholder="Endereço"
        value={address}
        onChangeText={(value) => {
          setAddress(value), setMensagem("");
        }}
      />
      <Text style={styles.mensagemErro}>{mensagem}</Text>
      <View style={styles.botao}>
        <Button
          title="Novo Registro"
          onPress={createFriend}
          style={styles.botao}
        />
      </View>
    </View>
  );
};

export default CreateFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  caixaTexto: {
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginTop: 10,
    borderRadius: 10,
  },
  botao: {
    marginTop: 20,
  },
  mensagemErro: {
    marginTop: 10,
    color: "red",
  },
});
