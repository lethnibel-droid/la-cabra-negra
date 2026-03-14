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
const db = getDatabase(app);

console.log("✅ Motor GOAT cargado y listo");

// Función mejorada para aceptar TODOS los tipos de links de YouTube
function obtenerIDYouTube(url) {
    const regExp = /^.(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Escuchar el clic del botón
document.getElementById('btn-publicar').addEventListener('click', () => {
    const titulo = document.getElementById('video-titulo').value;
    const urlOriginal = document.getElementById('video-url').value;
    const idVideo = obtenerIDYouTube(urlOriginal);

    console.log("Intentando publicar:", titulo, idVideo); // Esto nos dirá qué está pasando

    if (titulo && idVideo) {
        push(ref(db, 'videos'), {
            nombre: titulo,
            youtubeID: idVideo,
            fecha: Date.now()
        }).then(() => {
            alert("¡Video publicado con éxito!");
            document.getElementById('video-titulo').value = "";
            document.getElementById('video-url').value = "";
        }).catch((error) => {
            alert("Error de Firebase: " + error.message);
        });
    } else {
        alert("Revisa el título o el link de YouTube");
    }
});
