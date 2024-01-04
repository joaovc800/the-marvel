import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your",
  authDomain: "your",
  projectId: "your",
  storageBucket: "your",
  messagingSenderId: "your",
  appId: "your",
  measurementId: "your"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app, auth, onAuthStateChanged, signOut}
