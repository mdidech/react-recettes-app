import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDW6BGMH4NkkVloXoFDuilVOLXMeEI-YSI",
  authDomain: "recettes-app-1f2b1.firebaseapp.com",
  databaseURL: "https://recettes-app-1f2b1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
