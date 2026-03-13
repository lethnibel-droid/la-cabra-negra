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
