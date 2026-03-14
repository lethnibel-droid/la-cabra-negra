// ==========================================
// 1. CONEXIÓN A TU FIREBASE
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDh_u5eDv_fnSUXiDsHs-iJKZFgtOV3Jgw",
  authDomain: "flutter-ai-playground-93f86.firebaseapp.com",
  projectId: "flutter-ai-playground-93f86",
  storageBucket: "flutter-ai-playground-93f86.firebasestorage.app",
  messagingSenderId: "912054292680",
  appId: "1:912054292680:web:80b3c73a7c669a061b95fd",
  databaseURL: "https://flutter-ai-playground-93f86-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

console.log("Motor GOAT conectado en script.js");

// ==========================================
// 2. EXTRACTOR DE YOUTUBE
// ==========================================
function obtenerIDYouTube(url) {
    const regExp = /^.(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Dejamos esto listo para el Paso 4
export { auth, db, obtenerIDYouTube };
