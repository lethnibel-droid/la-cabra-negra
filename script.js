function subirVideo() {
    let titulo = prompt("Título del video:");
    if(titulo) {
        const feed = document.getElementById('feed');
        feed.innerHTML += `
            <div class="card">
                <div class="thumb"></div>
                <h3>${titulo}</h3>
                <p>Canal de La Cabra</p>
            </div>
        `;
    }
}
