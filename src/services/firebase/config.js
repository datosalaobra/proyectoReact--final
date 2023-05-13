// Importamos las funciones de la libreria
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Creamos un objeto con toda la información de la base de datos.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Inicializamos firebase 
const app = initializeApp(firebaseConfig);

// Usamos la instancia de firebase para obtener una instancia de firestore.
export const db = getFirestore(app);
// Expoertamos esta referencia para que este disponible en toda nuestra app.