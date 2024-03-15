class Cita {
    constructor(nombre, apellidos, telefono, id, fecha, observaciones) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.id = id;
        this.fecha = fecha;
        this.observaciones = observaciones;
    }

    toJSON() {
        return {
            nombre: this.nombre,
            apellidos: this.apellidos,
            telefono: this.telefono,
            id: this.id,
            fecha: this.fecha,
            observaciones: this.observaciones
        };
    }
}

function guardarNuevaCita() {
    const id = document.getElementById("id").value;

    if (id) {
        modificarCita();
    } else {
        guardarCitaNuevaLogica();
        guardarCitasEnCookies();
        limpiarFormulario();
    }
}

function modificarCita() {
    const id = document.getElementById("id").value;
    const citaIndex = citas.findIndex(cita => cita.id === id);

    if (citaIndex !== -1) {
        citas[citaIndex].nombre = document.getElementById("nombre").value;
        citas[citaIndex].apellidos = document.getElementById("apellidos").value;
        citas[citaIndex].telefono = document.getElementById("telefono").value;
        citas[citaIndex].fecha = document.getElementById("fecha").value;
        citas[citaIndex].observaciones = document.getElementById("observaciones").value;

        actualizarTabla();
        limpiarFormulario();
        guardarCitasEnCookies();
    } else {
        alert("No se encontró la cita para modificar.");
    }
}

window.onload = function() {
    cargarCitasDesdeCookies();
    actualizarTabla();
};

// Lógica para cargar citas almacenadas en las cookies
function cargarCitasDesdeCookies() {
    try {
        const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];

        // Convertir los objetos JSON a instancias de citas
        citas = citasGuardadas.map(cita => new Cita(
            cita.nombre,
            cita.apellidos,
            cita.telefono,
            cita.id,
            cita.fecha,
            cita.observaciones
        ));
    } catch (error) {
        console.error("Error al cargar las citas desde las cookies:", error);
        // Puedes manejar el error de alguna manera (por ejemplo, reiniciar las citas)
        citas = [];
    }
}

function actualizarTabla() {
    const citasTableBody = document.getElementById("citasTableBody");

    // Limpiar el contenido de las citas para mostrar
    citasTableBody.innerHTML = '';

    // Verificar si hay citas para mostrar
    if (citas.length > 0) {
        // Mostrar las citas en la tabla
        for (let i = 0; i < citas.length; i++) {
            const cita = citas[i];
            const row = citasTableBody.insertRow(i);

            // Orden
            const orderCell = row.insertCell(0);
            orderCell.textContent = i + 1;

            // Nombre
            const nombreCell = row.insertCell(1);
            nombreCell.textContent = cita.nombre;

            // Apellidos
            const apellidosCell = row.insertCell(2);
            apellidosCell.textContent = cita.apellidos;

            // Teléfono
            const telefonoCell = row.insertCell(3);
            telefonoCell.textContent = cita.telefono;

            // Fecha
            const fechaCell = row.insertCell(4);
            fechaCell.textContent = cita.fecha;

            // Observaciones
            const observacionesCell = row.insertCell(5);
            observacionesCell.textContent = cita.observaciones;

            // Acciones
            const actionsCell = row.insertCell(6);
            actionsCell.innerHTML = `<button onclick="eliminarCita(${i})">Eliminar</button> 
                                    <button onclick="cargarCitaParaModificar(${i})">Modificar</button>`;
        }
    } else {
        // Mostrar mensaje de datos vacío si no hay citas
        const emptyRow = citasTableBody.insertRow(0);
        const emptyCell = emptyRow.insertCell(0);
        emptyCell.textContent = "Dato vacío";
        emptyCell.colSpan = 7; // Ajusta esto según el número de columnas
    }
}

// Función para eliminar una cita
function eliminarCita(index) {
    citas.splice(index, 1);
    actualizarTabla();
    guardarCitasEnCookies();
}

// Función para cargar una cita para modificar
function cargarCitaParaModificar(index) {
    const cita = citas[index];
    document.getElementById("nombre").value = cita.nombre;
    document.getElementById("apellidos").value = cita.apellidos;
    document.getElementById("telefono").value = cita.telefono;
    document.getElementById('id').value = cita.id;
    document.getElementById('fecha').value = cita.fecha;
    document.getElementById('observaciones').value = cita.observaciones;
}

function guardarCitaNuevaLogica() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const fecha = document.getElementById("fecha").value;

    if (nombre && apellidos && telefono && fecha) {
        if (esNumero(telefono)) {
            const fechaActual = new Date();
            const fechaCita = new Date(fecha);

            // Verificar si la fecha de la cita es posterior a la fecha actual
            if (fechaCita > fechaActual) {
                const nuevaCita = new Cita(
                    nombre,
                    apellidos,
                    telefono,
                    generarId(),
                    fecha,
                    document.getElementById("observaciones").value
                );

                citas.push(nuevaCita);
                actualizarTabla();
                alert("Se ha guardado la nueva cita a nombre de : " + nombre + " y con feha: " + fecha);
                limpiarFormulario();
                alert("Los valores del formulario se han restablecidos correctamente.");
            } else {
                alert("La fecha de la cita debe ser posterior a la fecha y hora actuales.");
            }
        } else {
            alert("Por favor, ingrese un número válido en el campo de teléfono.");
        }
    } else {
        alert("Por favor, complete todos los campos obligatorios.");
    }
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("observaciones").value = "";
}

function generarId() {
    return Math.random().toString(36).substr(2, 9);
}

function guardarCitasEnCookies() {
    localStorage.setItem("citas", JSON.stringify(citas.map(cita => cita.toJSON())));
}

function esNumero(valor) {
    return !isNaN(valor);
}