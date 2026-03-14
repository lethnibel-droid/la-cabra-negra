/ 1. Importamos las herramientas necesarias desde el CDN de Firebase (Versión 9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// 2. Tus credenciales oficiales de GOAT GLOBAL ADS
const firebaseConfig = {
  apiKey: "AIzaSyDh_u5eDv_fnSUXiDsHs-iJKZFgtOV3Jgw",
  authDomain: "flutter-ai-playground-93f86.firebaseapp.com",
  projectId: "flutter-ai-playground-93f86",
  storageBucket: "flutter-ai-playground-93f86.firebasestorage.app",
  messagingSenderId: "912054292680",
  appId: "1:912054292680:web:80b3c73a7c669a061b95fd",
  databaseURL: "https://flutter-ai-playground-93f86-default-rtdb.firebaseio.com/"
};

// 3. Inicializamos la conexión
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

console.log("Conexión con Firebase establecida correctamente.");
