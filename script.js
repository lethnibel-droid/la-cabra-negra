:root {
    --color-principal: #00d2ff;
    --glass: rgba(20, 20, 20, 0.85);
    --border: rgba(255, 255, 255, 0.1);
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: sans-serif; }

body { background: #000; color: white; min-height: 100vh; overflow-x: hidden; }

.efecto-glass {
    background: var(--glass);
    backdrop-filter: blur(15px);
    border: 1px solid var(--border);
}

.navbar {
    height: 70px; display: flex; align-items: center; justify-content: space-between;
    padding: 0 20px; position: fixed; width: 100%; z-index: 100;
}

.logo { 
    font-size: 1.5rem; font-weight: 900; color: var(--color-principal);
    text-shadow: 0 0 15px var(--color-principal);
}

.layout { display: flex; padding-top: 80px; max-width: 1400px; margin: 0 auto; }

.sidebar {
    width: 250px; height: 80vh; position: sticky; top: 80px;
    border-radius: 20px; padding: 20px; margin: 0 20px;
}

.feed { flex: 1; padding-right: 20px; }

.stories { display: flex; gap: 15px; padding-bottom: 20px; overflow-x: auto; }

.story-circle, .story-add {
    min-width: 65px; height: 65px; border-radius: 50%; border: 2px solid var(--color-principal);
    background: var(--glass); display: flex; align-items: center; justify-content: center;
}

.video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }

.modal {
    display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.9);
    z-index: 1000; align-items: center; justify-content: center;
}

.modal-content { width: 90%; max-width: 400px; padding: 30px; border-radius: 25px; text-align: center; }

input { width: 100%; padding: 12px; margin: 10px 0; background: #111; border: 1px solid #333; color: white; border-radius: 10px; }

.btn-ui { background: var(--color-principal); color: #000; border: none; padding: 10px 20px; border-radius: 50px; font-weight: 800; cursor: pointer; }

.btn-circular { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--border); background: var(--glass); color: white; cursor: pointer; margin-left: 10px; }

.picker { display: flex; justify-content: center; gap: 15px; margin: 20px 0; }
.dot { width: 40px; height: 40px; border-radius: 50%; cursor: pointer; }
.azul { background: #00d2ff; } .rojo { background: #ff004c; } .morado { background: #bc00ff; }

@media (max-width: 800px) {
    .sidebar { display: none; }
    .layout { padding: 80px 15px 0 15px; }
}
// Función de respaldo para el audio
function activarSonido() {
    console.log("Sistema de audio listo para 2026");
}
