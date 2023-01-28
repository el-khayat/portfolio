// import firebase from 'firebase/app'
// import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth  ,GoogleAuthProvider } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";


// import 'firebase/firestore'

 const firebaseConfig = {
  apiKey: "AIzaSyC5wZZ73lJHzJqsb7Z8h25zr8IeqsRRKsQ",
  authDomain: "portfolio-ef0c7.firebaseapp.com",
  projectId: "portfolio-ef0c7",
  storageBucket: "portfolio-ef0c7.appspot.com",
  messagingSenderId: "455581040998",
  appId: "1:455581040998:web:ba170e7d28819a42da08a7",
  measurementId: "G-G8Y3KTXCY7"
  };

//   start serveses
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);


//   const provider = new firebase.auth.GoogleAuthProvider();
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });


  /**
   * !!! exports function 
   */

  export const NotifyVisite = async (visitor,otherdata)=>{
    if (!visitor) return ;
    visitor.date  = new Date();
    addDoc(collection(db,"visitors"),visitor)
    .then(res =>{
        console.log("user aded");
    })
    .catch(e=>{
        console.log(e);
    })
  
      return visitor ;
  }



export {auth} ;