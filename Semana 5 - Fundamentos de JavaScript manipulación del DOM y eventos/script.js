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