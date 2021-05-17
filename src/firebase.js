import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBEslko1PL2wMnEciwZCdcXCSXUfVhY4ug",
  authDomain: "disneyplus-390c7.firebaseapp.com",
  projectId: "disneyplus-390c7",
  storageBucket: "disneyplus-390c7.appspot.com",
  messagingSenderId: "236938968973",
  appId: "1:236938968973:web:a38d87f729efaf07ab87c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };

export default db;
