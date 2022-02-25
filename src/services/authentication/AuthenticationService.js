import auth from '@react-native-firebase/auth';

export const loginRequest = async (email, password) => {
  await auth().signInWithEmailAndPassword(email, password);
};
