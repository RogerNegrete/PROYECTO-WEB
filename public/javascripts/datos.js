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
    }
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
    }
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
    }
];

var asignaciones = JSON.parse(localStorage.getItem('asignaciones')) || [
    { id_asunto: 1, id_abogado: 1 },
    { id_asunto: 2, id_abogado: 2 },
    { id_asunto: 3, id_abogado: 3 }
];

// Función para guardar datos en localStorage
function guardarDatos() {
    localStorage.setItem('clientes', JSON.stringify(clientes));
    localStorage.setItem('abogados', JSON.stringify(abogados));
    localStorage.setItem('asuntos', JSON.stringify(asuntos));
    localStorage.setItem('asignaciones', JSON.stringify(asignaciones));
}

// Función para generar el siguiente ID incremental
function generarNuevoId(datos) {
    if (!Array.isArray(datos) || datos.length === 0) {
        return 1; // Si no hay datos, el primer ID será 1
    }
    return Math.max(...datos.map(item => item.id)) + 1; // Incrementar el ID máximo existente
}

// Función para agregar un cliente
function agregarCliente(cliente) {
    // Generar un ID incremental
    cliente.id = generarNuevoId(clientes);

    // Verificar si ya existe un cliente con la misma CI
    if (clientes.some(c => c.ci === cliente.ci)) {
        alert("Ya existe un cliente con esta Cédula de Identidad.");
        return;
    }

    clientes.push(cliente);
    guardarDatos();
    alert("Cliente registrado exitosamente.");
}

// Función para agregar un abogado
function agregarAbogado(abogado) {
    abogado.id = generarNuevoId(abogados);

    if (abogados.some(a => a.ci === abogado.ci)) {
        alert("Ya existe un abogado con esta Cédula de Identidad.");
        return;
    }

    abogados.push(abogado);
    guardarDatos();
    alert("Abogado registrado exitosamente.");
}

// Función para agregar un asunto
function agregarAsunto(asunto) {
    // Generar un ID incremental
    asunto.id = generarNuevoId(asuntos);

    if (asuntos.some(a => a.num_expediente === asunto.num_expediente)) {
        alert("El número de expediente ya existe. Intenta nuevamente.");
        return;
    }

    asuntos.push(asunto);
    guardarDatos();
    alert("Asunto registrado exitosamente.");
}

// Función para agregar una asignación
function agregarAsignacion(asignacion) {
    if (asignaciones.some(a => a.id_asunto === asignacion.id_asunto && a.id_abogado === asignacion.id_abogado)) {
        alert("Esta asignación ya existe.");
        return;
    }

    asignaciones.push(asignacion);
    guardarDatos();
    alert("Asignación registrada exitosamente.");
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
        alert("Asunto no encontrado.");
        return;
    }
    asuntos[index] = { ...asuntos[index], ...nuevosDatos };
    guardarDatos();
}
