function abrirModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function cerrarModales() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

function mostrarSeccion(id, el) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
}

function simularLogin() {
    const nombre = document.getElementById('user-name').value;
    if(!nombre) return alert("Escribe un nombre");
    
    document.getElementById('user-area').innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-weight:bold; color:var(--color-principal)">● Online</span>
            <span style="background:var(--glass); padding:8px 15px; border-radius:10px; border:1px solid var(--border-glass)">${nombre.toUpperCase()}</span>
        </div>
    `;
    cerrarModales();
    alert("¡Bienvenido, " + nombre + "!");
}

function obtenerIDYouTube(url) {
    const regExp = /^.(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]).*/;
    const match = url.match(regExp);
    return (match && match[2].length == 11) ? match[2] : null;
}

function publicar() {
    const titulo = document.getElementById('v-titulo').value;
    const urlOriginal = document.getElementById('v-url').value;
    const videoID = obtenerIDYouTube(urlOriginal);

    if(!videoID) return alert("URL de YouTube no válida");

    const grid = document.getElementById('grid-videos');
    const card = `
        <div class="video-card">
            <div class="thumb">
                <iframe src="https://www.youtube.com/embed/${videoID}" allowfullscreen></iframe>
            </div>
            <div class="info">
                <h4>${titulo || 'Anuncio'}</h4>
                <p style="color:var(--color-principal); font-size:0.8rem;">Vía Prototipo</p>
            </div>
        </div>
    `;
    grid.innerHTML = card + grid.innerHTML;
    cerrarModales();
}

function cambiarTema(color) {
    document.documentElement.style.setProperty('--color-principal', color);
    document.documentElement.style.setProperty('--color-glow', color + '4D');
}
[9:57 p. m., 12/3/2026] lethnibelo: /* ESTILOS DE VIDEO Y MÚSICA */
.controles-extra { position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 10px; z-index: 1000; }

#btn-music, .btn-flotante-subir {
    background: rgba(0,0,0,0.7); color: white; border: 1px solid var(--color-principal);
    padding: 12px 20px; border-radius: 50px; cursor: pointer; font-weight: bold;
    backdrop-filter: blur(10px); transition: 0.3s;
}

#btn-music:hover, .btn-flotante-subir:hover { background: var(--color-principal); color: black; transform: scale(1.1); }

.video-card { background: #111; border-radius: 20px; overflow: hidden; border: 1px solid #333; margin-bottom: 20px; animation: aparecer 0.5s ease; }
@keyframes aparecer { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
[9:59 p. m., 12/3/2026] lethnibelo: // SCRIPT ÚNICO: VIDEO + MÚSICA
let musicaActiva = false;
let colorSeleccionado = 'azul';

// Función para Publicar Video
function publicar() {
    const titulo = document.getElementById('v-titulo').value;
    const url = document.getElementById('v-url').value;
    const id = url.split('v=')[1]?.split('&')[0] || url.split('/').pop().split('?')[0];
    
    if(!id) return alert("Pega un link de YouTube válido");

    const card = `
        <div class="video-card">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>
            <div style="padding:15px;"><h4>${titulo || 'Anuncio'}</h4></div>
        </div>`;
    
    document.getElementById('grid-videos').innerHTML = card + document.getElementById('grid-videos').innerHTML;
    cerrarModales();
}

// Función para Música por Color
function cambiarTema(color, brillo, nombreColor) {
    document.documentElement.style.setProperty('--color-principal', color);
    colorSeleccionado = nombreColor; // Guarda si es rojo, azul, etc.
    if(musicaActiva) reproducirMusica();
}

function toggleMusica() {
    musicaActiva = !musicaActiva;
    const btn = document.getElementById('btn-music');
    if(musicaActiva) {
        reproducirMusica();
        btn.innerHTML = "🔊 MÚSICA: ON";
    } else {
        document.querySelectorAll('audio').forEach(a => a.pause());
        btn.innerHTML = "🎵 MÚSICA: OFF";
    }
}

function reproducirMusica() {
    document.querySelectorAll('audio').forEach(a => { a.pause(); a.currentTime = 0; });
    const sonido = document.getElementById('audio-' + colorSeleccionado);
    if(sonido) sonido.play();
}
