import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjQZBoHx-7YC4IHNcXbFLEgwhJhOHSIN8",
    authDomain: "esd-b2dw-4b4e8.firebaseapp.com",
    projectId: "esd-b2dw-4b4e8",
    storageBucket: "esd-b2dw-4b4e8.appspot.com",
    messagingSenderId: "882462609276",
    appId: "1:882462609276:web:73ac56b4de3766108d1ef9"
  };

  export const db = initializeApp(firebaseConfig);
  
//   // Initialize Firebase
//   // export const firebaseApp = initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);

//   const db = getFirestore(app);

// const msgRef = collection(db, "testmsg1");

// // await setDoc(doc(msgRef,), {
// //     user1: [
// //       "name: "Clem","
// //       "messages: ["messoge1", "messagoge2"]"
// //     ]

// // });

