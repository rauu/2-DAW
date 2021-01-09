function resize() {
    alert("Se ha redimensionado la pagina");
    let s = document.getElementById("resize");
    s.innerHTML = "Ancho: " + window.innerWidth + " --- Alto: " + window.innerHeight;
}

window.onresize = resize;