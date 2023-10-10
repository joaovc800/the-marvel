import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwTvjQhY3fztQlTJCemTbjto_lEx9QeYU",
  authDomain: "the-marvel-49010.firebaseapp.com",
  projectId: "the-marvel-49010",
  storageBucket: "the-marvel-49010.appspot.com",
  messagingSenderId: "1076376014940",
  appId: "1:1076376014940:web:fdce61c7fcb1d2d2249699",
  measurementId: "G-5GCWTN5BC4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app, auth, onAuthStateChanged, signOut}