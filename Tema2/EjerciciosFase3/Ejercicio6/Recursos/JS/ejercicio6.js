const correo = prompt("Ingresa una dirección de correo electrónico:");

function protege_email(email) {
    // Eliminamos los espacios en blanco
    email = email.trim();
    
    // Encontramos la posición del símbolo '@'
    const posicionArroba = email.indexOf('@');
    
    // Y si la dirección de correo es válida
    /*
    slice() extrae la parte del nombre de usuario desde el inicio 
    de la cadena (0) hasta el índice de la posición del símbolo @
    */
    if (posicionArroba > 1) {
        // Obtenemos la parte del nombre de usuario y la parte del dominio
        const nombreUsuario = email.slice(0, posicionArroba);
        const dominio = email.slice(posicionArroba);
        
        // Sacamos la dirección protegida
        return nombreUsuario.charAt(0) + '...' + dominio;
    } else {
        return "Dirección de correo no válida";
    }
}

console.log("Dirección protegida:", protege_email(correo));