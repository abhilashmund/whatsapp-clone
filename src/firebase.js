import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCgArNL7NGrdGonwF60barND5OJNVTEd30",
  authDomain: "whatsapp-clone-2e3ca.firebaseapp.com",
  projectId: "whatsapp-clone-2e3ca",
  storageBucket: "whatsapp-clone-2e3ca.appspot.com",
  messagingSenderId: "1044569933683",
  appId: "1:1044569933683:web:184a14d82939440f82e706",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;