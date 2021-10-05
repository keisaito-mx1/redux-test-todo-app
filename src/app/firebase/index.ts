import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAm7M-VcpJqvdPxW6Z3Q-sXQlV67sqoWTA",
  authDomain: "redux-todo-app-d4601.firebaseapp.com",
  projectId: "redux-todo-app-d4601",
  storageBucket: "redux-todo-app-d4601.appspot.com",
  messagingSenderId: "810763446595",
  appId: "1:810763446595:web:5c118014842c16109927f6",
  measurementId: "G-8XP3YQ2DJZ",
};

// Initialize Cloud Firestore through Firebase

export const app = initializeApp(firebaseConfig);
