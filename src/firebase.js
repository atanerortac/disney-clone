import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB88OhjUtbmbfncfHpdU8mEOgMRigAOO5Y",
  authDomain: "https://disney-clone-ao.vercel.app/",
  projectId: "disney-clone-82423",
  storageBucket: "disney-clone-82423.appspot.com",
  messagingSenderId: "698454630160",
  appId: "1:698454630160:web:4d9e1536710e797eaf4f95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
