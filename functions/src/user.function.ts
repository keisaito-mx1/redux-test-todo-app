import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

export const createUser = functions
  .region("asia-northeast3")
  .auth.user()
  .onCreate(async (user) => {
    const newUser = {
      id: user.uid,
      email: user.email || "",
    };
    return db.doc(`users/${user.uid}`).set(newUser);
  });
