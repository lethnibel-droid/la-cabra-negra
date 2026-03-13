// --- ESTADO DEL MOTOR ---
let musicaActual = null;
let sistemaSonidoListo = false;

// --- DESBLOQUEO DE AUDIO (Regla de Chrome) ---
function desbloquearAudio() {
    if (!sistemaSonidoListo) {
        // Creamos un contexto de audio silencioso para avisar al navegador
        console.log("Sistema de audio GOAT activado");
        sistemaSonidoListo = true;
    }
}

// --- CONTROL DE MÚSICA ---
function toggleMusica() {
    // Si no hay música seleccionada, usamos la azul por defecto
    if (!musicaActual) {
        musicaActual = document.getElementById('audio-azul');
    }

    const btn = document.getElementById('btn-music');

    if (musicaActual.paused) {
        // Intentamos reproducir
        musicaActual.play().then(() => {
            btn.innerHTML = "🔊";
            btn.style.boxShadow = "0 0 15px var(--color-principal)";
        }).catch(error => {
            console.log("Error: Toca la pantalla primero antes de activar la música.");
        });
    } else {
        musicaActual.pause();
        btn.innerHTML = "🎵";
        btn.style.boxShadow = "none";
    }
}

// --- CAMBIO DE TEMA Y CANCIÓN ---
function cambiarTema(color, nombre) {
    // Cambiamos el color visual
    document.documentElement.style.setProperty('--color-principal', color);
    
    // Si había música sonando, la paramos
    if (musicaActual) {
        musicaActual.pause();
        musicaActual.currentTime = 0;
    }

    // Cambiamos a la nueva canción según el color
    musicaActual = document.getElementById('audio-' + nombre);
    
    // Actualizamos el botón y cerramos el menú
    document.getElementById('btn-music').innerHTML = "🎵";
    cerrarModales();
}

// --- FUNCIONES DE VENTANAS ---
function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function cerrarModales() {
    document.querySelectorAll('.modal').forEach(m => {
        m.style.display = "none";
    });
}
