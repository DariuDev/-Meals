import auth from '@react-native-firebase/auth';

export const loginRequest = async (email, password) => {
  await auth().signInWithEmailAndPassword(email, password);
};
export const registerRequest = async (email, password, repeatedPassword) => {
  await auth().createUserWithEmailAndPassword(
    email,
    password,
    repeatedPassword,
  );
};
export const onAuthentiactionStateChange = async usr => {
  auth().onAuthStateChanged(usr);
};
export const signOut = async () => {
  await auth.signOut();
};
