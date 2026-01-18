const inputImagen = document.getElementById("inputImagen");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const contenedor = document.getElementById("contenedorGaleria");

let seleccionada = null;

// Agregar imagen
btnAgregar.addEventListener("click", () => {
    const url = inputImagen.value.trim();
    if (url === "") return;

    const img = document.createElement("img");
    img.src = url;

    // Seleccionar imagen al hacer click
    img.addEventListener("click", () => {
        if (seleccionada) {
            seleccionada.classList.remove("img-seleccionada");
        }
        img.classList.add("img-seleccionada");
        seleccionada = img;
    });

    contenedor.appendChild(img);
    inputImagen.value = "";
});

// Eliminar imagen seleccionada
btnEliminar.addEventListener("click", () => {
    if (seleccionada) {
        seleccionada.remove();
        seleccionada = null;
    }
});

// Agregar con tecla Enter
inputImagen.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        btnAgregar.click();
    }
});

// Eliminar con tecla Supr / Backspace
document.addEventListener("keydown", e => {
    if ((e.key === "Delete" || e.key === "Backspace") && seleccionada) {
        seleccionada.remove();
        seleccionada = null;
    }
});

// Obtenemos referencia al formulario y al botón de enviar
const form = document.getElementById("form-validacion");
const btnEnviar = document.getElementById("btnEnviar");

// Objeto que almacena referencias a los inputs del formulario
const campos = {
    nombre: document.getElementById("nombre"),
    correo: document.getElementById("correo"),
    password: document.getElementById("password"),
    confirmar: document.getElementById("confirmar"),
    edad: document.getElementById("edad")
};

// Objeto que almacena referencias a los contenedores donde se mostrarán mensajes de error
const errores = {
    nombre: document.getElementById("error-nombre"),
    correo: document.getElementById("error-correo"),
    password: document.getElementById("error-password"),
    confirmar: document.getElementById("error-confirmar"),
    edad: document.getElementById("error-edad")
};

// Validación del nombre → mínimo 3 caracteres
function validarNombre() {
    const valido = campos.nombre.value.trim().length >= 3;
    marcarCampo("nombre", valido, "Mínimo 3 caracteres");
    return valido;
}

// Validación del correo con expresión regular básica para formato e-mail
function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valido = regex.test(campos.correo.value.trim());
    marcarCampo("correo", valido, "Correo no válido");
    return valido;
}

// Validación de la contraseña → mínimo 8 caracteres, 1 número y 1 símbolo
function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    const valido = regex.test(campos.password.value);
    marcarCampo("password", valido, "Debe tener mínimo 8 caracteres, un número y un símbolo");
    return valido;
}

// Validación de la confirmación de contraseña → debe coincidir con la original
function validarConfirmar() {
    const valido = campos.confirmar.value === campos.password.value && campos.confirmar.value !== "";
    marcarCampo("confirmar", valido, "Las contraseñas no coinciden");
    return valido;
}

// Validación de edad → debe ser número y mayor o igual a 18
function validarEdad() {
    const edad = parseInt(campos.edad.value);
    const valido = !isNaN(edad) && edad >= 18;
    marcarCampo("edad", valido, "Debes tener 18 años o más");
    return valido;
}

// Función para marcar los campos como válidos o inválidos y mostrar mensajes
function marcarCampo(campo, valido, msg) {
    // Limpiamos estilos previos y mensajes
    campos[campo].classList.remove("campo-valido", "campo-invalido");
    errores[campo].textContent = "";

    // Aplicamos clase según el resultado
    if (valido) {
        campos[campo].classList.add("campo-valido");
    } else {
        campos[campo].classList.add("campo-invalido");
        errores[campo].textContent = msg;
    }
}

// Función global que valida todo el formulario
function validarFormulario() {
    const resultado =
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmar() &&
        validarEdad();

    // Habilitamos o deshabilitamos botón de enviar según validaciones
    btnEnviar.disabled = !resultado;
}

// Añadimos evento input a cada campo para validar en tiempo real
Object.values(campos).forEach(input => {
    input.addEventListener("input", validarFormulario);
});

// Evento submit del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene el envío real
    alert("Formulario enviado correctamente");
});

// Evento para limpiar estilos cuando se resetea el formulario
form.addEventListener("reset", () => {
    Object.values(campos).forEach(c => c.classList.remove("campo-valido", "campo-invalido"));
    Object.values(errores).forEach(e => e.textContent = "");
    btnEnviar.disabled = true;
});