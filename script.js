let musicaActual = null;

function abrirModal(id) { document.getElementById(id).style.display = "flex"; }
function cerrarModales() { document.querySelectorAll('.modal').forEach(m => m.style.display = "none"); }

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

function desbloquearAudio() { console.log("Sistema listo"); }
