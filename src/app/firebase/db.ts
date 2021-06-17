import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
