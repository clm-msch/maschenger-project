// connexion à la base de données firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjQZBoHx-7YC4IHNcXbFLEgwhJhOHSIN8",
    authDomain: "esd-b2dw-4b4e8.firebaseapp.com",
    projectId: "esd-b2dw-4b4e8",
    storageBucket: "esd-b2dw-4b4e8.appspot.com",
    messagingSenderId: "882462609276",
    appId: "1:882462609276:web:73ac56b4de3766108d1ef9"
  };

  // envoi des paramètres de connexion à la base de données
  export const firebaseApp = initializeApp(firebaseConfig);
  

