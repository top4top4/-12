  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCg2NxaI0rSoKD9BLQPx8DQCmr8-ia5ym4",
    authDomain: "prjkt-3ffc1.firebaseapp.com",
    databaseURL: "https://prjkt-3ffc1-default-rtdb.firebaseio.com",
    projectId: "prjkt-3ffc1",
    storageBucket: "prjkt-3ffc1.firebasestorage.app",
    messagingSenderId: "167068510748",
    appId: "1:167068510748:web:488451f057186028c50dd9",
    measurementId: "G-XWBHDRHGJJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const analytics = getAnalytics(app);

  export { database }