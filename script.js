// Definición de un módulo para el manejo del catálogo
const CatalogModule = (function () {
    // Variables privadas
    let movies = [];

    // Funciones privadas
    function renderMovieList() {
        const movieListSection = document.getElementById('movieList');
        movieListSection.innerHTML = '';

        movies.forEach(movie => {
            const movieElement = createMovieElement(movie);
            movieListSection.appendChild(movieElement);
        });
    }

    function createMovieElement(movie) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
        `;
        return movieCard;
    }

    // Funciones públicas
    return {
        init: function () {
            // Inicialización del módulo
            movies = [
                { title: 'Avengers: Endgame', description: 'La batalla final por el universo.', image: 'img/movie1.jpg' },
                { title: 'Inception', description: '¿Qué es real y qué es un sueño?', image: 'img/movie2.jpg' },
                // Agrega más películas según sea necesario
            ];

            // Renderizar la lista inicial
            renderMovieList();
        },

        addMovie: function (title, description, image) {
            // Agregar una nueva película
            const newMovie = { title, description, image };
            movies.push(newMovie);
            renderMovieList();
        },

        clearMovieList: function () {
            // Limpiar la lista de películas
            movies = [];
            renderMovieList();
        },
    };
})();

// Definición de un módulo para las interacciones de la página principal
const HomePageModule = (function () {
    // Variables privadas
    const addMovieBtn = document.getElementById('addMovieBtn');
    const clearListBtn = document.getElementById('clearListBtn');

    // Funciones privadas
    function setupEventListeners() {
        addMovieBtn.addEventListener('click', showAddMovieModal);
        clearListBtn.addEventListener('click', CatalogModule.clearMovieList);
    }

    function showAddMovieModal() {
        // Lógica para mostrar un modal o formulario para agregar películas
        const title = prompt('Ingrese el título de la película:');
        const description = prompt('Ingrese la descripción de la película:');
        const image = prompt('Ingrese la URL de la imagen de la película:');

        if (title && description && image) {
            CatalogModule.addMovie(title, description, image);
        }
    }

    // Funciones públicas
    return {
        init: function () {
            // Inicialización del módulo de la página principal
            setupEventListeners();
        },
    };
})();

// Ejecutar la inicialización de los módulos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    CatalogModule.init();
    HomePageModule.init();
});
