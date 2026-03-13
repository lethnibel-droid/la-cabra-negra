let musicaActiva = false;
let colorActual = 'azul'; 
let audioIniciado = false;

// 1. Desbloquear audio del navegador
function activarAudioContexto() { audioIniciado = true; }

// 2. Motor de Publicación
function motorPublicar() {
    const t = document.getElementById('v-titulo').value;
    const u = document.getElementById('v-url').value;
    const s = document.getElementById('v-social').value;
    const id = u.split('v=')[1]?.split('&')[0] || u.split('/').pop();

    if(!id) return alert("Link de YouTube inválido");

    const card = `
        <div class="video-card efecto-glass">
            <iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>
            <div style="padding:15px">
                <h4>${t || 'Anuncio'}</h4>
                <a href="${s || '#'}" target="_blank" style="color:var(--color-principal); font-size:12px; text-decoration:none; margin-top:10px; display:block;">● Ver en Red Social</a>
            </div>
        </div>
    `;
    document.getElementById('grid-videos').insertAdjacentHTML('afterbegin', card);
    cerrarModales();
}

// 3. Motor de Música por Color
function cambiarTema(color, brillo, nombreColor) {
    document.documentElement.style.setProperty('--color-principal', color);
    document.documentElement.style.setProperty('--color-glow', brillo);
    colorActual = nombreColor; // Guarda si es 'rojo', 'azul', etc.
    if(musicaActiva) reproducirAhora();
}

function toggleMusica() {
    musicaActiva = !musicaActiva;
    const btn = document.getElementById('btn-music');
    if(musicaActiva) {
        reproducirAhora();
        btn.innerHTML = "🔊 MÚSICA: ON";
        btn.classList.add('activa');
    } else {
        pararTodo();
        btn.innerHTML = "🎵 MÚSICA: OFF";
        btn.classList.remove('activa');
    }
}

function reproducirAhora() {
    pararTodo();
    const cancion = document.getElementById('audio-' + colorActual);
    if(cancion) {
        cancion.play().catch(() => console.log("Esperando clic del usuario..."));
    }
}

function pararTodo() {
    document.querySelectorAll('audio').forEach(a => { a.pause(); a.currentTime = 0; });
}

// Ventanas
function abrirModal(id) { document.getElementById(id).style.display = 'flex'; }
function cerrarModales() { document.querySelectorAll('.modal').forEach(m => m.style.display = 'none'); }
