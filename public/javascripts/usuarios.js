// usuarios.js

// Datos de usuarios para inicio de sesión

// 10 Clientes con idCliente correspondiente
var usuariosClientes = [
    { username: "cliente1", password: "passcliente1", role: "cliente", idCliente: 1 },
    { username: "cliente2", password: "passcliente2", role: "cliente", idCliente: 2 },
    { username: "cliente3", password: "passcliente3", role: "cliente", idCliente: 3 },
    { username: "cliente4", password: "passcliente4", role: "cliente", idCliente: 4 },
    { username: "cliente5", password: "passcliente5", role: "cliente", idCliente: 5 },
    { username: "cliente6", password: "passcliente6", role: "cliente", idCliente: 6 },
    { username: "cliente7", password: "passcliente7", role: "cliente", idCliente: 7 },
    { username: "cliente8", password: "passcliente8", role: "cliente", idCliente: 8 },
    { username: "cliente9", password: "passcliente9", role: "cliente", idCliente: 9 },
    { username: "cliente10", password: "passcliente10", role: "cliente", idCliente: 10 }
];

// 10 Administradores (no necesitan idCliente)
var usuariosAdministradores = [
    { username: "admin1", password: "passadmin1", role: "admin" },
    { username: "admin2", password: "passadmin2", role: "admin" },
    { username: "admin3", password: "passadmin3", role: "admin" },
    { username: "admin4", password: "passadmin4", role: "admin" },
    { username: "admin5", password: "passadmin5", role: "admin" },
    { username: "admin6", password: "passadmin6", role: "admin" },
    { username: "admin7", password: "passadmin7", role: "admin" },
    { username: "admin8", password: "passadmin8", role: "admin" },
    { username: "admin9", password: "passadmin9", role: "admin" },
    { username: "admin10", password: "passadmin10", role: "admin" }
];

// Unir ambos arreglos para usarlos en la validación
var usuarios = usuariosClientes.concat(usuariosAdministradores);
