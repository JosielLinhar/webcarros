import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKYlaZjsVX5kk-zdo6e1q07eqm66FRShE",
  authDomain: "webcarros-46167.firebaseapp.com",
  projectId: "webcarros-46167",
  storageBucket: "webcarros-46167.appspot.com",
  messagingSenderId: "1071445290530",
  appId: "1:1071445290530:web:8e34b591d373c24a94e47b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
