import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFbC8QtkobI_TTvbQUSFqqyvsy3Mf7MKw",
  authDomain: "disney-clone-d18c9.firebaseapp.com",
  projectId: "disney-clone-d18c9",
  storageBucket: "disney-clone-d18c9.appspot.com",
  messagingSenderId: "296913385843",
  appId: "1:296913385843:web:c1a7be71273637cf32ed06",
  measurementId: "G-EWXDWRK88Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
