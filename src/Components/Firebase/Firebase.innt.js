import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebaseApp = () =>{
    initializeApp(firebaseConfig);
};
export default initializeFirebaseApp;