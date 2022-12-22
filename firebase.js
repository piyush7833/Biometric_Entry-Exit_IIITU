
const firebaseConfig = {
  apiKey: "AIzaSyAvB7np6iWMvsNvWRGSB7huxVD36Ee68ew",
  authDomain: "iiitu-attendance.firebaseapp.com",
  projectId: "iiitu-attendance",
  storageBucket: "iiitu-attendance.appspot.com",
  messagingSenderId: "766856614518",
  appId: "1:766856614518:web:672f0d118615a440ac0557",
  measurementId: "G-W3DH77HLM8"
};
firebase.initializeApp(firebaseConfig);  //to initialize firestore

const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });