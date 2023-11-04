import { initializeApp } from "firebase/app";
import { config } from "./baseConfig";

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  appId: config.firebase.appId,
};

const initializeFirebaseApp = () => {
  initializeApp(firebaseConfig);
};
export default initializeFirebaseApp;
