let totalAnuncios = 0;
let musicaActual = null;

// --- FUNCIONES DE VENTANAS ---
function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function cerrarModales() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = "none");
}

// --- FUNCIÓN PARA EL BOTÓN "PUBLICAR" ---
function motorPublicar() {
    const titulo = document.getElementById('v-titulo').value;
    const url = document.getElementById('v-url').value;

    if (titulo === "" || url === "") {
        alert("Por favor, pon un título y un link de video");
        return;
    }

    // Extraer el ID del video de YouTube (lo que va después de v=)
    let videoID = "";
    if (url.includes("v=")) {
        videoID = url.split("v=")[1].split("&")[0];
    } else {
        videoID = url.split("/").pop();
    }

    // Crear la tarjeta del anuncio
    const contenedor = document.getElementById('grid-videos');
    const nuevaCard = document.createElement('div');
    nuevaCard.className = "card-anuncio efecto-glass";
    
    nuevaCard.innerHTML = `
        <div style="padding:10px; font-weight:bold; color:var(--color-principal)">🔥 ANUNCIO ACTIVO</div>
        <iframe src="https://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>
        <div style="padding:15px;">
            <h4>${titulo}</h4>
            <div style="display:flex; justify-content:space-between; margin-top:10px;">
                <span>❤️ <b id="likes-${totalAnuncios}">0</b></span>
                <button onclick="darLike(${totalAnuncios})" class="btn-ui" style="padding:5px 10px; font-size:10px;">LIKE</button>
            </div>
        </div>
    `;

    // Añadir al inicio de la cartelera
    contenedor.prepend(nuevaCard);
    
    // Actualizar contador global
    totalAnuncios++;
    document.getElementById('count-ads').innerText = totalAnuncios;
    
    // Limpiar y cerrar
    document.getElementById('v-titulo').value = "";
    document.getElementById('v-url').value = "";
    cerrarModales();
}

function darLike(id) {
    let linkCount = document.getElementById(likes-${id});
    linkCount.innerText = parseInt(linkCount.innerText) + 1;
}

// --- FUNCIONES DE MÚSICA Y TEMA (Mantener las anteriores) ---
function toggleMusica() {
    if (!musicaActual) musicaActual = document.getElementById('audio-azul');
    if (musicaActual.paused) {
        musicaActual.play();
        document.getElementById('btn-music').innerHTML = "🔊";
    } else {
        musicaActual.pause();
        document.getElementById('btn-music').innerHTML = "🎵";
    }
}

function cambiarTema(color, nombre) {
    document.documentElement.style.setProperty('--color-principal', color);
    if(musicaActual) musicaActual.pause();
    musicaActual = document.getElementById('audio-' + nombre);
    cerrarModales();
}
