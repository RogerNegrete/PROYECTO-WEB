// /javascripts/datos.js

// Inicializar o cargar los datos de localStorage
var clientes = JSON.parse(localStorage.getItem('clientes')) || [
    {
        id: 1,
        nombre: "Juan Pérez",
        ci: "0102030405",
        telefono: "0991234561",
        direccion: {
            provincia: "Pichincha",
            canton: "Quito",
            parroquia: "Centro Histórico",
            barrio: "San Marcos",
            calles: "Calle Flores y Sucre"
        },
        fecha_nacimiento: "1985-05-15",
        nacionalidad: "Ecuatoriana"
    },
    {
        id: 2,
        nombre: "María Gómez",
        ci: "0203040506",
        telefono: "0991234562",
        direccion: {
            provincia: "Guayas",
            canton: "Guayaquil",
            parroquia: "Tarqui",
            barrio: "Urdesa",
            calles: "Avenida Victor Emilio Estrada"
        },
        fecha_nacimiento: "1990-07-20",
        nacionalidad: "Ecuatoriana"
    },
    {
        id: 3,
        nombre: "Carlos Sánchez",
        ci: "0304050607",
        telefono: "0991234563",
        direccion: {
            provincia: "Azuay",
            canton: "Cuenca",
            parroquia: "El Sagrario",
            barrio: "El Vergel",
            calles: "Av. Solano y Remigio Crespo"
        },
        fecha_nacimiento: "1978-03-10",
        nacionalidad: "Ecuatoriana"
    },
    // Agrega los clientes 4 al 10 de manera similar...
];

var abogados = JSON.parse(localStorage.getItem('abogados')) || [
    {
        id: 1,
        nombre: "Lic. Ana Martínez",
        ci: "0405060708",
        tipo_especialidad: "Derecho Civil",
        licencia_procurador: "LIC12345",
        fecha_nacimiento: "1975-11-25",
        fecha_titulacion: "2000-06-15",
        telefono: "0987654321"
    },
    {
        id: 2,
        nombre: "Dr. Luis Torres",
        ci: "0506070809",
        tipo_especialidad: "Derecho Penal",
        licencia_procurador: "LIC23456",
        fecha_nacimiento: "1980-01-30",
        fecha_titulacion: "2005-09-20",
        telefono: "0987654322"
    },
    {
        id: 3,
        nombre: "Abg. Sofía Herrera",
        ci: "0607080910",
        tipo_especialidad: "Derecho Laboral",
        licencia_procurador: "LIC34567",
        fecha_nacimiento: "1982-08-12",
        fecha_titulacion: "2007-12-05",
        telefono: "0987654323"
    },
    // Agrega los abogados 4 al 10 de manera similar...
];

var asuntos = JSON.parse(localStorage.getItem('asuntos')) || [
    {
        id: 1,
        num_expediente: "EXP2023-001",
        id_cliente: 1,
        fecha_inicio: "2023-01-10",
        fecha_finalizacion: "",
        estado: "en_tramite",
        observaciones: "Caso de divorcio."
    },
    {
        id: 2,
        num_expediente: "EXP2023-002",
        id_cliente: 2,
        fecha_inicio: "2023-02-15",
        fecha_finalizacion: "2023-08-20",
        estado: "archivado",
        observaciones: "Reclamación laboral."
    },
    {
        id: 3,
        num_expediente: "EXP2023-003",
        id_cliente: 3,
        fecha_inicio: "2023-03-05",
        fecha_finalizacion: "",
        estado: "en_tramite",
        observaciones: "Asunto civil sobre propiedad."
    },
    // Agrega los asuntos 4 al 10 de manera similar...
];

var asignaciones = JSON.parse(localStorage.getItem('asignaciones')) || [
    { id_asunto: 1, id_abogado: 1 },
    { id_asunto: 2, id_abogado: 2 },
    { id_asunto: 3, id_abogado: 3 },
    // Agrega más asignaciones según sea necesario...
];

// Función para guardar datos en localStorage
function guardarDatos() {
    localStorage.setItem('clientes', JSON.stringify(clientes));
    localStorage.setItem('abogados', JSON.stringify(abogados));
    localStorage.setItem('asuntos', JSON.stringify(asuntos));
    localStorage.setItem('asignaciones', JSON.stringify(asignaciones));
}

// Funciones para añadir nuevos datos
function agregarCliente(cliente) {
    // Validar que el cliente tenga un ID único
    if (clientes.some(c => c.id === cliente.id)) {
        console.error("ID de cliente duplicado:", cliente.id);
        alert("El ID del cliente ya existe. Intenta nuevamente.");
        return;
    }
    clientes.push(cliente);
    guardarDatos();
}

function agregarAbogado(abogado) {
    // Validar que el abogado tenga un ID único
    if (abogados.some(a => a.id === abogado.id)) {
        console.error("ID de abogado duplicado:", abogado.id);
        alert("El ID del abogado ya existe. Intenta nuevamente.");
        return;
    }
    abogados.push(abogado);
    guardarDatos();
}

function agregarAsunto(asunto) {
    // Validar que el asunto tenga un ID único
    if (asuntos.some(a => a.id === asunto.id)) {
        console.error("ID de asunto duplicado:", asunto.id);
        alert("El ID del asunto ya existe. Intenta nuevamente.");
        return;
    }
    asuntos.push(asunto);
    guardarDatos();
}

function agregarAsignacion(asignacion) {
    // Validar que la asignación no exista ya
    if (asignaciones.some(a => a.id_asunto === asignacion.id_asunto && a.id_abogado === asignacion.id_abogado)) {
        console.error("Asignación duplicada para Asunto:", asignacion.id_asunto, " y Abogado:", asignacion.id_abogado);
        alert("Esta asignación ya existe. Intenta nuevamente.");
        return;
    }
    asignaciones.push(asignacion);
    guardarDatos();
}

// Funciones para obtener datos
function obtenerClientes() {
    return clientes;
}

function obtenerAbogados() {
    return abogados;
}

function obtenerAsuntos() {
    return asuntos;
}

function obtenerAsignaciones() {
    return asignaciones;
}

// Función para actualizar un asunto existente
function actualizarAsunto(id_asunto, nuevosDatos) {
    const index = asuntos.findIndex(a => a.id === id_asunto);
    if (index === -1) {
        console.error("Asunto no encontrado:", id_asunto);
        alert("Asunto no encontrado.");
        return;
    }
    asuntos[index] = { ...asuntos[index], ...nuevosDatos };
    guardarDatos();
}
