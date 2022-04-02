import firebase from 'firebase/compat/app';

export const getLogin = async (authentication) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const { user } = await authentication?.signInWithPopup(provider);
  return user;
};
