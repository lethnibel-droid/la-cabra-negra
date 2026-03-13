:root {
    --color-principal: #00d2ff; 
    --color-glow: rgba(0, 210, 255, 0.3);
    --bg-dark: #030303;
    --card-bg: rgba(20, 20, 20, 0.8);
    --glass: rgba(255, 255, 255, 0.03);
    --border-glass: rgba(255, 255, 255, 0.1);
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; }

body { 
    background-color: var(--bg-dark); 
    color: white; 
    overflow: hidden;
    background-image: radial-gradient(circle at 50% -20%, var(--color-glow), transparent 40%);
}

header {
    height: 80px; display: flex; justify-content: space-between; align-items: center;
    padding: 0 50px; background: rgba(0,0,0,0.8); backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-glass); position: fixed; width: 100%; z-index: 1000;
}

.logo { 
    font-family: 'Syncopate', sans-serif; font-size: 1.4rem;
    color: var(--color-principal); letter-spacing: 4px;
    text-shadow: 0 0 10px var(--color-glow);
}

.main-container { display: flex; margin-top: 80px; height: calc(100vh - 80px); }

aside { width: 280px; background: rgba(0,0,0,0.4); padding: 40px 20px; border-right: 1px solid var(--border-glass); }

.nav-item {
    padding: 16px 20px; border-radius: 18px; cursor: pointer; margin-bottom: 15px; 
    color: #666; transition: 0.4s; display: flex; align-items: center; gap: 15px;
}

.nav-item:hover, .nav-item.active { background: var(--glass); color: var(--color-principal); transform: translateX(5px); }

main { flex-grow: 1; padding: 50px; overflow-y: auto; }

.section { display: none; }
.section.active { display: block; animation: appear 0.5s forwards; }

@keyframes appear { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 35px; }
.video-card { background: var(--card-bg); border-radius: 28px; overflow: hidden; border: 1px solid var(--border-glass); transition: 0.4s; }
.video-card:hover { transform: translateY(-10px); border-color: var(--color-principal); box-shadow: 0 20px 40px var(--color-glow); }
.thumb { height: 200px; background: #000; }
iframe { width: 100%; height: 100%; border: none; }
.info { padding: 25px; }

.btn-ui { background: white; color: black; border: none; padding: 12px 25px; border-radius: 15px; font-weight: 800; cursor: pointer; transition: 0.3s; }
.btn-ui.full { width: 100%; margin-top: 10px; }
.btn-ui:hover { background: var(--color-principal); box-shadow: 0 0 20px var(--color-glow); transform: scale(1.05); }

.modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 2000; justify-content: center; align-items: center; }
.modal-content { background: #0a0a0a; padding: 40px; border-radius: 30px; border: 1px solid var(--border-glass); width: 400px; text-align: center; }
input { width: 100%; padding: 15px; margin: 10px 0; background: #151515; border: 1px solid #333; color: white; border-radius: 12px; }

.theme-flex { display: flex; gap: 15px; margin-top: 20px; }
.dot { width: 40px; height: 40px; border-radius: 50%; border: none; cursor: pointer; }
.btn-cerrar { background: none; border: none; color: grey; margin-top: 15px; cursor: pointer; }
