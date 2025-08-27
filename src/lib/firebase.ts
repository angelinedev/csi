
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  projectId: "csi-website-30z5n",
  appId: "1:93218077256:web:8438be1ef867b94500b67d",
  storageBucket: "csi-website-30z5n.appspot.com",
  apiKey: "AIzaSyBwgZghIEzQ80LtVN27W2WbrjJIerz_LOY",
  authDomain: "csi-website-30z5n.firebaseapp.com",
  messagingSenderId: "93218077256",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
