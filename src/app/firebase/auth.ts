import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from ".";

export const login = async () => {
  const auth = getAuth(app);
  return signInWithPopup(auth, new GoogleAuthProvider());
};

export const logout = async () => {
  const auth = getAuth(app);
  return auth.signOut();
};
