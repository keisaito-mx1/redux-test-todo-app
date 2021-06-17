import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export const login = async () => {
  return firebase.auth().signInWithPopup(provider);
};

export const logout = async () => {
  return firebase.auth().signOut();
};
