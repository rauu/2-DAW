var modal1 = document.getElementById('miModal');

function modal() {

    modal1.style.display = 'block';

}

function aceptar() {

    modal1.style.display = 'none';
    alert("has aceptado el modal");
}

function cerrar() {

    modal1.style.display = 'none';

}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
};