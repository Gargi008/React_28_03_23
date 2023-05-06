// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBkoUEvK6eGgCKzLiydoljrcFGpRHLJJNk",
  authDomain: "ecommerce-903f5.firebaseapp.com",
  projectId: "ecommerce-903f5",
  storageBucket: "ecommerce-903f5.appspot.com",
  messagingSenderId: "969785147198",
  appId: "1:969785147198:web:75dbc7d81442793ccdb66f"
};

// Initialize Firebase
const firebaseApp  = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth, provider ) 
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email , password) =>{


  if ( !email || !password) return;

  return await createUserWithEmailAndPassword(auth, email , password)

}
export const signInAuthUserWithEmailAndPassword = async (email , password) =>{


  if ( !email || !password) return;

  return await signInWithEmailAndPassword(auth, email , password)

}

export const signOutUser = async ()=>{
    await signOut(auth)
}
