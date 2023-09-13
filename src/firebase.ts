import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk9K5sOV_OHoF5rcQDb8j0qC4eqEwHJok",
  authDomain: "nwitter-reloaded-9b631.firebaseapp.com",
  projectId: "nwitter-reloaded-9b631",
  storageBucket: "nwitter-reloaded-9b631.appspot.com",
  messagingSenderId: "174297859123",
  appId: "1:174297859123:web:040ec3045d99155aedcf46",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
