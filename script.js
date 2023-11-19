// Función para manejar la personalización
function personalizar() {
    const nombreUsuario = prompt("Ingresa tu nombre:");
    if (nombreUsuario) {
        // Verificar si el usuario ingresó un nombre
        const mensajePersonalizado = document.createElement("p");
        mensajePersonalizado.textContent = `¡Bienvenido, ${nombreUsuario}! Personaliza tu lista de películas a continuación.`;
        document.getElementById("personalizacion").appendChild(mensajePersonalizado);
    }
}

// Función para agregar una nueva película
function agregarPelicula(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const director = document.getElementById("director").value;
    const anio = document.getElementById("anio").value;

    // Validar que los campos no estén vacíos
    if (titulo && director && anio) {
        const nuevaPelicula = {
            titulo,
            director,
            anio,
        };

        // Aquí debes implementar la lógica para agregar la película a la lista y actualizar la interfaz

        // Limpia los campos del formulario
        document.getElementById("titulo").value = "";
        document.getElementById("director").value = "";
        document.getElementById("anio").value = "";

        // Cerrar el modal
        $('#agregarPeliculaModal').modal('hide');
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para obtener detalles de la película y mostrarlos
function mostrarDetallesPelicula(tituloPelicula) {
    // Aquí debes implementar la lógica para obtener detalles de la película y actualizar la interfaz
}

// Event listeners
document.getElementById("personalizarBtn").addEventListener("click", personalizar);
document.getElementById("agregarPeliculaForm").addEventListener("submit", agregarPelicula);

// Ejemplo de tarjetas de películas con event listeners
const tarjetasPelicula = document.querySelectorAll(".tarjeta-pelicula");
tarjetasPelicula.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const tituloPelicula = tarjeta.getAttribute("data-titulo");
        mostrarDetallesPelicula(tituloPelicula);
    });
});
