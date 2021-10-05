import { getFirestore } from "firebase/firestore";
import { app } from ".";

// Initialize Cloud Firestore through Firebase
export const db = getFirestore(app);
