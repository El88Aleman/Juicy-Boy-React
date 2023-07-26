import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAhNt-7ijOUypVMoJq6n3bAkeWBVI5H_c",
  authDomain: "juicy-boy.firebaseapp.com",
  projectId: "juicy-boy",
  storageBucket: "juicy-boy.appspot.com",
  messagingSenderId: "793604263130",
  appId: "1:793604263130:web:317fb3e0f99e1b495ee9e3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
