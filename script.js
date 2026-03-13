// BUSCA ESTO:
function login() {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        })
        .catch((error) => alert("Error: " + error.message));
}

// Y REEMPLÁZALO POR ESTO OTRO:
function login() {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            // Usamos Redirect en lugar de Popup para que no se bloquee
            return auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        })
        .catch((error) => alert("Error al iniciar: " + error.message));
}
