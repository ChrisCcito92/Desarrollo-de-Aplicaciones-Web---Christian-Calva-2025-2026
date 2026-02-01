// GALERÍA INTERACTIVA
// Referencias a elementos del DOM
const inputImagen = document.getElementById("inputImagen");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const contenedor = document.getElementById("contenedorGaleria");

// Variable que almacena la imagen seleccionada
let seleccionada = null;

// FORMULARIO DE VALIDACIÓN
// Referencias al formulario y botón de envío
const form = document.getElementById("form-validacion");
const btnEnviar = document.getElementById("btnEnviar");

// Referencias a los campos del formulario
const campos = {
    nombre: document.getElementById("nombre"),
    correo: document.getElementById("correo"),
    password: document.getElementById("password"),
    confirmar: document.getElementById("confirmar"),
    edad: document.getElementById("edad")
};

// Referencias a los mensajes de error
const errores = {
    nombre: document.getElementById("error-nombre"),
    correo: document.getElementById("error-correo"),
    password: document.getElementById("error-password"),
    confirmar: document.getElementById("error-confirmar"),
    edad: document.getElementById("error-edad")
};

// FORMULARIO DE CONTACTO
document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtenemos los valores ingresados
    const nombre = document.getElementById("nombreContacto").value;
    const email = document.getElementById("emailContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;

    // Mensaje de confirmación simple
    alert(
        "Gracias " + nombre + 
        ", hemos recibido tu mensaje. Nos pondremos en contacto pronto."
    );

    // Limpia el formulario luego de enviar
    this.reset();
});

// LISTA DINÁMICA DE SERVICIOS Y MOSTRAR Y AGREGAR SERVICIOS A LA LISTA
// Referencia al input del servicio
const inputServicio = document.getElementById("inputServicio");

// Referencia al botón para agregar servicios
const btnAgregarServicio = document.getElementById("btnAgregarServicio");

// Referencia a la lista <ul>
const listaServicios = document.getElementById("listaServicios");

// Arreglo de servicios veterinarios
let servicios = [
    "Consulta veterinaria",
    "Vacunación",
    "Desparasitación",
    "Cirugía básica"
];

// Función que muestra todos los servicios dentro del <ul>
function mostrarServicios() {
    // Limpia la lista antes de volver a pintarla
    listaServicios.innerHTML = "";

    // Recorre el arreglo de servicios
    servicios.forEach(function (servicio) {
        // Crea un elemento <li>
        const li = document.createElement("li");

        // Asigna el texto del servicio al <li>
        li.textContent = servicio;

        // Agrega el <li> a la lista <ul>
        listaServicios.appendChild(li);
    });
}

// Evento click del botón "Agregar servicio"
btnAgregarServicio.addEventListener("click", function () {
    // Obtiene el texto ingresado y elimina espacios extra
    const nuevoServicio = inputServicio.value.trim();

    // Valida que el campo no esté vacío
    if (nuevoServicio !== "") {
        // Agrega el nuevo servicio al arreglo
        servicios.push(nuevoServicio);

        // Actualiza la lista en pantalla
        mostrarServicios();

        // Limpia el input
        inputServicio.value = "";
    }
});

// Muestra los servicios iniciales al cargar la página
mostrarServicios();

// FORMULARIO DE CONTACTO - MENSAJE FINAL
// Referencia al formulario de contacto
const formContacto = document.getElementById("formContacto");

// Referencia al mensaje de éxito
const mensajeExito = document.getElementById("mensaje-exito");

// Evento submit del formulario
formContacto.addEventListener("submit", function (e) {
    // Evita que la página se recargue
    e.preventDefault();

    // Muestra el mensaje de éxito
    mensajeExito.classList.remove("d-none");

    // Limpia los campos del formulario
    formContacto.reset();

    // Oculta el mensaje después de 4 segundos
    setTimeout(function () {
        mensajeExito.classList.add("d-none");
    }, 4000);
});
