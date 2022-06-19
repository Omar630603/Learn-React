import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const settings = { timestampsInSnapshots: true, merge: true };

const firebaseConfig = {
  apiKey: "AIzaSyCbzoE5-l7pDJI_z2Cuy65kUDxsTFVOByg",
  authDomain: "jobsheet7-89568.firebaseapp.com",
  projectId: "jobsheet7-89568",
  storageBucket: "jobsheet7-89568.appspot.com",
  messagingSenderId: "1007821276049",
  appId: "1:1007821276049:web:dd0fb7c7567ae40cb61030",
  measurementId: "G-1LRPD75QVF",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;
