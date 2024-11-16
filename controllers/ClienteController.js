// ClienteController.js
const fs = require('fs');
const path = require('path');

// Definir la clase Cliente con su constructor
class Cliente {
  constructor(id, CI, nombre, fecha_nacimiento, nacionalidad, telefono, provincia, canton, parroquia, barrio, calles) {
    this.id = id;
    this.CI = CI;
    this.nombre = nombre;
    this.fecha_nacimiento = fecha_nacimiento;
    this.nacionalidad = nacionalidad;
    this.telefono = telefono;
    this.provincia = provincia;
    this.canton = canton;
    this.parroquia = parroquia;
    this.barrio = barrio;
    this.calles = calles;
  }
}

// Ruta del archivo donde se guardarán los datos de clientes
const CLIENTES_FILE = path.join(__dirname, '../clientes.json');

// Leer los datos desde el archivo JSON
const leerClientes = () => {
  try {
    const data = fs.readFileSync(CLIENTES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Guardar los datos en el archivo JSON
const guardarClientes = (clientes) => {
  fs.writeFileSync(CLIENTES_FILE, JSON.stringify(clientes, null, 2));
};

// Crear una instancia de Cliente y agregarla al archivo
exports.createCliente = (req, res) => {
  let clientes = leerClientes();
  const nuevoCliente = new Cliente(
    clientes.length + 1,
    req.body.CI,
    req.body.nombre,
    req.body.fecha_nacimiento,
    req.body.nacionalidad,
    req.body.telefono,
    req.body.provincia,
    req.body.canton,
    req.body.parroquia,
    req.body.barrio,
    req.body.calles
  );
  clientes.push(nuevoCliente);
  guardarClientes(clientes);
  res.status(201).json(nuevoCliente);
};

// Obtener todos los clientes
exports.getAllClientes = (req, res) => {
  const clientes = leerClientes();
  res.json(clientes);
};

// Actualizar un cliente por ID
exports.updateCliente = (req, res) => {
  let clientes = leerClientes();
  const id = parseInt(req.params.id);
  const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);
  if (clienteIndex === -1) {
    return res.status(404).send('Cliente no encontrado');
  }
  const clienteActualizado = new Cliente(
    id,
    req.body.CI || clientes[clienteIndex].CI,
    req.body.nombre || clientes[clienteIndex].nombre,
    req.body.fecha_nacimiento || clientes[clienteIndex].fecha_nacimiento,
    req.body.nacionalidad || clientes[clienteIndex].nacionalidad,
    req.body.telefono || clientes[clienteIndex].telefono,
    req.body.provincia || clientes[clienteIndex].provincia,
    req.body.canton || clientes[clienteIndex].canton,
    req.body.parroquia || clientes[clienteIndex].parroquia,
    req.body.barrio || clientes[clienteIndex].barrio,
    req.body.calles || clientes[clienteIndex].calles
  );
  clientes[clienteIndex] = clienteActualizado;
  guardarClientes(clientes);
  res.json(clienteActualizado);
};

// Eliminar un cliente por ID
exports.deleteCliente = (req, res) => {
  let clientes = leerClientes();
  const id = parseInt(req.params.id);
  clientes = clientes.filter((cliente) => cliente.id !== id);
  guardarClientes(clientes);
  res.status(204).send();
};
