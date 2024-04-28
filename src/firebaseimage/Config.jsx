import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjfh3QePPjcwaJ1LB1jMB8dnKwIaI3pV4",
  authDomain: "legofruit-b7068.firebaseapp.com",
  projectId: "legofruit-b7068",
  storageBucket: "legofruit-b7068.appspot.com",
  messagingSenderId: "752732762120",
  appId: "1:752732762120:web:1c029d49bcf9f73e8e61bd",
  measurementId: "G-P6Y88D76JZ",
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
