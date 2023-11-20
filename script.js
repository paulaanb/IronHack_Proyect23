// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Personalización del Usuario
  document.getElementById('personalizarBtn').addEventListener('click', function() {
    var nombreUsuario = prompt('Por favor, ingresa tu nombre:');
    if (nombreUsuario !== null && nombreUsuario !== '') {
      document.getElementById('nombreUsuario').innerText = '¡Hola, ' + nombreUsuario + '!';
      document.getElementById('preguntas').style.display = 'block';
    }
  });

  // Recopilar información sobre preferencias del usuario
  document.getElementById('finalizarBtn').addEventListener('click', function() {
    var genero = document.getElementById('genero').value;
    var plataforma = document.getElementById('plataforma').value;

    // Realizar recomendaciones según las preferencias del usuario
    if (genero === 'accion' && plataforma === 'netflix') {
      alert('Te recomendamos películas de acción en Netflix. ¡Disfruta!');
      redirigir('https://www.netflix.com/browse/genre/1365');
    } else if (genero === 'comedia' && plataforma === 'amazon') {
      alert('Te recomendamos comedias en Amazon Prime Video. ¡Diviértete!');
      redirigir('https://www.amazon.com/gp/video/storefront');
    } else if (genero === 'drama' && plataforma === 'cine') {
      alert('Te recomendamos dramas en el cine. ¡Prepárate para una experiencia emotiva!');
      redirigir('https://www.google.com/search?q=dramas+en+cine');
    } else {
      alert('Gracias por personalizar tu experiencia. ¡Disfruta del cine!');
    }
  });

  // Función para redirigir a la URL proporcionada
  function redirigir(url) {
    window.location.href = url;
  }

  // Cambios de Color
  document.getElementById('cambiarColorBtn').addEventListener('click', function() {
    var colores = ['#ffcccb', '#b3e6ff', '#ffd700', '#c2f0c2'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
  });

  // Nuevas funciones
  function cambiarColorFondo() {
    var colores = ['#ffcccb', '#b3e6ff', '#ffd700', '#c2f0c2'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
  }

  function mostrarElemento(id) {
    document.getElementById(id).style.display = 'block';
  }

  function ocultarElemento(id) {
    document.getElementById(id).style.display = 'none';
  }

  function personalizarExperiencia() {
    var nombre = prompt('¡Hola! Por favor, introduce tu nombre:');
    if (nombre) {
      var gustos = prompt(`Hola ${nombre}! ¿Cuáles son tus gustos?`);
      var mensaje = `Bienvenido ${nombre}! Disfruta de las películas según tus gustos: ${gustos}`;
      alert(mensaje);
    }
  }
});
