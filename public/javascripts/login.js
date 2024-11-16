// login.js

// Asegúrate de que 'usuarios.js' esté incluido en tu 'index.html' antes de este archivo

// Variables globales que contienen los usuarios

// Cargar los usuarios desde localStorage si existen; si no, usar los de 'usuarios.js'
if (localStorage.getItem('usuarios')) {
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
} else {
    // Verificar que los arreglos de usuarios estén definidos
    if (typeof usuarios === 'undefined') {
        // Si no están definidos, muestra un error en la consola
        console.error("El arreglo 'usuarios' no está definido. Asegúrate de incluir 'usuarios.js' antes de 'login.js'.");
    }
    // Si 'usuarios.js' está incluido, 'usuarios' ya estará definido
}

// Función para validar las credenciales de inicio de sesión
function validateLogin() {
    // Obtener los valores ingresados por el usuario en el formulario
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    // Validar que los campos no estén vacíos
    if (username === "" || password === "") {
        document.getElementById("errorMessage").innerText = "Por favor, ingresa tu usuario y contraseña.";
        return false; // Evita el envío del formulario
    }

    // Buscar el usuario en el arreglo 'usuarios'
    var authenticatedUser = usuarios.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        // Guardar el estado de sesión y datos del usuario en localStorage
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userRole", authenticatedUser.role);
        localStorage.setItem("username", authenticatedUser.username);

        // Si es un cliente, guardar también su 'idCliente'
        if (authenticatedUser.role === "cliente") {
            localStorage.setItem("idCliente", authenticatedUser.idCliente);
        }

        // Redirigir al usuario a la página correspondiente según su rol
        if (authenticatedUser.role === "admin") {
            window.location.href = "menu_admin.html";
        } else if (authenticatedUser.role === "cliente") {
            window.location.href = "menu_cliente.html";
        } else {
            // Si el rol no es reconocido, mostrar un mensaje de error
            document.getElementById("errorMessage").innerText = "Rol de usuario no válido.";
            return false;
        }

        return false; // Evita el envío del formulario y la recarga de la página
    } else {
        // Si las credenciales no son válidas, mostrar un mensaje de error
        document.getElementById("errorMessage").innerText = "Usuario o contraseña incorrectos.";
        return false; // Evita el envío del formulario y la recarga de la página
    }
}
