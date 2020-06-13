import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEmf1-Aw5bGvrqY__50CiJMbBsAd31AvI",
  authDomain: "findmyfriends-f4497.firebaseapp.com",
  databaseURL: "https://findmyfriends-f4497.firebaseio.com",
  projectId: "findmyfriends-f4497",
  storageBucket: "findmyfriends-f4497.appspot.com",
  messagingSenderId: "460900490663",
  appId: "1:460900490663:web:a283c6b969428cb91e2a82",
};

const firebaseApp =
  firebase.app.length > 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = firebaseApp.firestore();
//export default db;
export { db, firebase };
