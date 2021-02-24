// Detectamos el scroll en la página
window.onscroll = function(e) {
    /* 
      Obtenemos todos los elementos que tengan la clase animate__animated y sean hijos de la clase scroll-animations
      Busca información sobre la función querySelectorAll
    */

    let elements = document.querySelectorAll(".scroll-animations .animate__animated");
    // Recorremos la lista de elementos
    for (var i = 0; i < elements.length; i++) {
        // Comprobamos si están en el viewport
        if (isInViewport(elements[i]) === true) {
            // En caso afirmativo agregamos la clase de animación fadeInLeft
            elements[i].classList.add("animate__fadeInLeft");
        }
    }
};

// Función para detectar si un elemento está siendo visualizado (se encuentra dentro del viewport)
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}

// Función para realizar animacion del formulario si hay errores
function animarForm() {
    // Obtenemos los elementos input y text area del formulario
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let textarea = document.getElementById("mensaje");
    console.log(nombre.value);
    // Si nombre está vacio

    if (nombre.value == "" || nombre.value == null) {
        nombre.classList.add("animate__animated", "animate__shakeX", "form-error");
        nombre.addEventListener('animationend', () => {
            nombre.classList.remove("animate__animated", "animate__shakeX");
        });
    }
    //nombre.addEventListener(transitionEvent, transitionEndCallback);



    // Agregamos las clases form-error, animate__animated y animate__shakeX al input

    // Al acabar la animación, quitamos las clases animate__animated y animate__shakeX al input

    // Si el nombre no está vacío

    // Quitamos la clase form-error al input


    // Repetir proceso anterior para el correo
    if (correo.value == "" || correo.value == null) {
        correo.classList.add("animate__animated", "animate__shakeX", "form-error");
        correo.addEventListener('animationend', () => {
            correo.classList.remove("animate__animated", "animate__shakeX");
        });
    }

    // Repetir proceso anterior para el mensaje
    if (textarea.value == "" || textarea.value == null) {
        textarea.classList.add("animate__animated", "animate__shakeX", "form-error");
        textarea.addEventListener('animationend', () => {
            textarea.classList.remove("animate__animated", "animate__shakeX");
        });
    }
    if (!nombre.value == "") {
        nombre.classList.remove("form-error");
    }
    if (!correo.value == "") {
        correo.classList.remove("form-error");
    }
    if (!textarea.value == "") {
        textarea.classList.remove("form-error");
    }
}


//Función para animar el botón
function animarBtn(el) {
    // Añadimos las clases animate__animated y animate__hinge al elemento recibido por parametro
    // Al acabar la animacion, quitamos las clases animate__animated y animate__hinge al elemento recibido por parámetro

    el.classList.add("animate__animated", "animate__hinge");
    el.addEventListener('animationend', () => {
        el.classList.remove("animate__animated", "animate__hinge");
    });
}