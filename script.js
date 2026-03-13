// --- ESTADO GLOBAL (Para saber qué color y música usar) ---
let musicaActiva = false;
let colorActual = 'azul'; 

// --- 1. MOTOR DE VENTANAS (Abrir y Cerrar Publicar/Estética) ---
function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function cerrarModales() {
    const modales = document.querySelectorAll('.modal');
    modales.forEach(m => m.style.display = "none");
}

// --- 2. MOTOR DE PUBLICACIÓN (Dar vida a la Cartelera) ---
function motorPublicar() {
    const titulo = document.getElementById('v-titulo').value;
    const url = document.getElementById('v-url').value;
    const redSocial = document.getElementById('v-tipo-red').value;
    const linkSocial = document.getElementById('v-social').value;
    
    // Extraer el ID del video de YouTube (lo que va después de v=)
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop().split('?')[0];

    if(!videoId || videoId.length < 5) {
        return alert("⚠️ Por favor, introduce un link de YouTube válido.");
    }

    const grid = document.getElementById('grid-videos');

    // Creamos la estructura del anuncio con estilo Glass
    const tarjetaHTML = `
        <div class="video-card efecto-glass">
            <div class="badge-red">${redSocial.toUpperCase()}</div>
            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            <div style="padding:15px;">
                <h4 style="color:var(--color-principal); margin-bottom:5px;">${titulo || 'Anuncio Destacado'}</h4>
                <p style="font-size:11px; color:#888; margin-bottom:10px;">Publicado en LA CABRA NEGRA</p>
                <a href="${linkSocial || '#'}" target="_blank" class="btn-anuncio">
                    VER EN ${redSocial.toUpperCase()}
                </a>
            </div>
        </div>
    `;

    // Insertar el nuevo anuncio al principio de la cartelera
    grid.insertAdjacentHTML('afterbegin', tarjetaHTML);
    
    // Limpiar el formulario y cerrar
    document.getElementById('v-titulo').value = "";
    document.getElementById('v-url').value = "";
    document.getElementById('v-social').value = "";
    cerrarModales();
}

// --- 3. MOTOR DE ESTÉTICA (Cambiar colores y música) ---
function cambiarTema(color, brillo, nombreColor) {
    // Cambiamos los colores de la página
    document.documentElement.style.setProperty('--color-principal', color);
    document.documentElement.style.setProperty('--color-glow', brillo);
    
    colorActual = nombreColor; // Guardamos si es azul, rojo o morado

    // Si la música está ON, cambiamos la canción automáticamente al color nuevo
    if(musicaActiva) {
        reproducirMusica();
    }
}

// --- 4. MOTOR DE MÚSICA (Corregido para que suene) ---
function toggleMusica() {
    musicaActiva = !musicaActiva;
    const btn = document.getElementById('btn-music');

    if(musicaActiva) {
        reproducirMusica();
        btn.innerHTML = "🔊 MÚSICA: ON";
        btn.style.background = "var(--color-principal)";
        btn.style.color = "black";
    } else {
        detenerMusica();
        btn.innerHTML = "🎵 MÚSICA: OFF";
        btn.style.background = "none";
        btn.style.color = "white";
    }
}

function reproducirMusica() {
    detenerMusica(); // Paramos cualquier música anterior
    const cancion = document.getElementById('audio-' + colorActual);
    if(cancion) {
        cancion.play().catch(e => console.log("Esperando interacción para sonar..."));
    }
}

function detenerMusica() {
    const todosLosAudios = document.querySelectorAll('audio');
    todosLosAudios.forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
}

// --- 5. MOTOR DE SESIÓN (Login) ---
function motorLogin() {
    const nombre = document.getElementById('u-nom').value;
    if(!nombre) return alert("Escribe tu nombre");
    
    document.getElementById('user-area').innerHTML = `
        <div class="efecto-glass" style="padding:10px 20px; border-radius:50px; font-weight:bold; border:1px solid var(--color-principal);">
            <span style="color:var(--color-principal)">●</span> ${nombre.toUpperCase()}
        </div>
    `;
    cerrarModales();
}

// Función de respaldo para el audio
function activarSonido() {
    console.log("Sistema de audio listo para 2026");
}
