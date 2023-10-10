import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnMiZjMMdsglKBuqppgZpHd80dnxPMx2U",
  authDomain: "the-marvel-508b7.firebaseapp.com",
  projectId: "the-marvel-508b7",
  storageBucket: "the-marvel-508b7.appspot.com",
  messagingSenderId: "217349071808",
  appId: "1:217349071808:web:f73ca7ff70a28579d7de25",
  measurementId: "G-E3KFM7KNMD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app, auth, onAuthStateChanged, signOut}