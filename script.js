// script.js

function cambiarColorFondo() {
  var colores = ['#ffcccb', '#b3e6ff', '#ffd700', '#c2f0c2'];
  var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}

function agregarNoticia() {
  var tituloNoticia = prompt('Ingrese el título de la noticia:');
  var contenidoNoticia = prompt('Ingrese el contenido de la noticia:');

  if (tituloNoticia && contenidoNoticia) {
    // Crea un nuevo elemento de noticia
    var nuevaNoticia = document.createElement('div');
    nuevaNoticia.className = 'noticia';

    // Agrega el contenido de la noticia
    nuevaNoticia.innerHTML = `<h3>${tituloNoticia}</h3><p>${contenidoNoticia}</p>`;

    // Agrega la noticia al contenedor de noticias
    var contenedorNoticias = document.getElementById('contenedorNoticias');
    contenedorNoticias.appendChild(nuevaNoticia);
  } else {
    alert('Por favor, complete tanto el título como el contenido de la noticia.');
  }
}

function mostrarOcultarElemento(id) {
  var elemento = document.getElementById(id);
  if (elemento) {
    if (elemento.style.display === 'none' || elemento.style.display === '') {
      elemento.style.display = 'block';
    } else {
      elemento.style.display = 'none';
    }
  }
}

function iniciarPersonalizacion() {
  var nombreUsuario = prompt('Por favor, ingresa tu nombre:');
  if (nombreUsuario !== null && nombreUsuario !== '') {
    document.getElementById('nombreUsuario').innerText = '¡Hola, ' + nombreUsuario + '!';
    document.getElementById('preguntas').style.display = 'block';
  }
}

function finalizarPersonalizacion() {
  var genero = document.getElementById('genero').value;
  var plataforma = document.getElementById('plataforma').value;

  if (genero === 'accion' && plataforma === 'netflix') {
    alert('Te recomendamos películas de acción en Netflix. ¡Disfruta!');
    redirigir('https://www.netflix.com/browse/genre/1365');
  } else if (genero === 'comedia' && plataforma === 'amazon') {
    alert('Te recomendamos comedias en Amazon Prime Video. ¡Diviértete!');
    redirigir('https://www.amazon.com/gp/video/storefront');
  } else if (genero === 'drama' && plataforma === 'hbo') {
    alert('Te recomendamos dramas en HBO. ¡Prepárate para una experiencia emotiva!');
    redirigir('https://www.hbo.com/movies');
  } else if (genero === 'accion' && plataforma === 'amazon') {    
    alert('Te recomendamos películas de acción en Amazon Prime Video. ¡Disfruta!');
    redirigir('https://www.primevideo.com/-/es/genre/action');
  } else if (genero === 'comedia' && plataforma === 'netflix') {
    alert('Te recomendamos comedias en Netflix. ¡Diviértete!');
    redirigir('https://www.netflix.com/browse/genre/6548');
  } else if (genero === 'drama' && plataforma === 'cine') {
    alert('Te recomendamos dramas en el cine. ¡Prepárate para una experiencia emotiva!');
    redirigir('https://www.google.com/search?q=dramas+en+cine');
  } else {
    alert('Gracias por personalizar tu experiencia. ¡Disfruta del cine!');
  }
}

// Función para redirigir a la URL proporcionada
function redirigir(url) {
  window.location.href = url;
}
