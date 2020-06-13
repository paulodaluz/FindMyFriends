import { db } from "../database/firebase";

export const saveFriend = (friend, chave = "") => {
  if (chave === "") {
    console.log("Opa1");
    return new Promise((resolve, reject) => {
      db.collection("friends")
        .add(friend)
        .then((result) => resolve(result.id))
        .catch((erro) => reject(erro));
    });
  } else {
    return new Promise((resolve, reject) => {
      db.collection("friends")
        .doc(chave)
        .update(friend)
        .then(() => resolve())
        .catch((erro) => reject(erro));
    });
  }
};
/* 
export const deleteFriend = (friend) => {
  return new Promise((resolve, reject) => {
    db.collection("friends")
      .doc(friend.key)
      .delete()
      .then(() => resolve())
      .catch((erro) => reject(erro));
  });
};

export const getFriends = () => {
  return new Promise((resolve, reject) => {
    db.collection("friends")
      .get()
      .then((snapchot) => {
        let friendsLista = [];
        snapchot.forEach((item) => {
          friendsLista.push({
            ...item.data(),
            key: item.id,
          });
        });
        resolve(friendsLista);
      })
      .catch((erro) => reject(erro));
  });
};
 */
