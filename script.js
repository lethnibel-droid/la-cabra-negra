// --- BASE DE DATOS LOCAL (TEMPORAL) ---
let anuncios = [];
let musicaActual = null;

// --- FUNCIONES DE INTERFAZ ---
function abrirModal(id) { 
    document.getElementById(id).style.display = "flex"; 
}

function cerrarModales() { 
    document.querySelectorAll('.modal').forEach(m => m.style.display = "none"); 
}

// --- MOTOR DE PUBLICACIÓN (DA VIDA A LA CARTELERA) ---
function motorPublicar() {
    const titulo = document.getElementById('v-titulo').value;
    const url = document.getElementById('v-url').value;
    const social = document.getElementById('v-social').value;

    if(titulo && url) {
        // Extraer ID de YouTube
        const videoID = url.split('v=')[1] || url.split('/').pop();
        
        const nuevoAnuncio = {
            id: Date.now(),
            titulo: titulo,
            videoID: videoID,
            social: social,
            likes: 0,
            vistas: Math.floor(Math.random() * 100) // Vistas iniciales aleatorias
        };

        anuncios.unshift(nuevoAnuncio); // Poner al inicio
        renderizarCartelera();
        cerrarModales();
        
        // Limpiar campos
        document.getElementById('v-titulo').value = "";
        document.getElementById('v-url').value = "";
    } else {
        alert("Por favor, llena los campos básicos.");
    }
}

// --- DIBUJAR LA CARTELERA CON INTERACCIONES ---
function renderizarCartelera() {
    const grid = document.getElementById('grid-videos');
    grid.innerHTML = ""; // Limpiar para actualizar

    anuncios.forEach(ad => {
        grid.innerHTML += `
            <div class="card-anuncio efecto-glass">
                <div class="card-header">
                    <div class="user-info">
                        <div class="mini-avatar"></div>
                        <span>Anunciante Pro</span>
                    </div>
                    <button class="btn-seguir" onclick="this.innerHTML='Siguiendo'">Seguir</button>
                </div>
                
                <iframe src="https://www.youtube.com/embed/${ad.videoID}" allowfullscreen></iframe>
                
                <div class="card-body">
                    <h4>${ad.titulo}</h4>
                    <div class="social-bar">
                        <span onclick="sumarLike(${ad.id})">❤️ <b id="like-${ad.id}">${ad.likes}</b></span>
                        <span>👁️ ${ad.vistas}</span>
                        <a href="${ad.social}" target="_blank" class="btn-visitar">VISITAR</a>
                    </div>
                </div>
            </div>
        `;
    });
}

function sumarLike(id) {
    const ad = anuncios.find(a => a.id === id);
    if(ad) {
        ad.likes++;
        document.getElementById(like-${id}).innerText = ad.likes;
    }
}

// --- SISTEMA SENSORIAL ---
function cambiarTema(color, nombre) {
    document.documentElement.style.setProperty('--color-principal', color);
    if(musicaActual) musicaActual.pause();
    musicaActual = document.getElementById('audio-' + nombre);
    cerrarModales();
}

function toggleMusica() {
    if(!musicaActual) musicaActual = document.getElementById('audio-azul');
    if(musicaActual.paused) {
        musicaActual.play();
        document.getElementById('btn-music').innerHTML = "🔊";
    } else {
        musicaActual.pause();
        document.getElementById('btn-music').innerHTML = "🎵";
    }
}

function desbloquearAudio() { console.log("GOAT Engine Ready"); }
