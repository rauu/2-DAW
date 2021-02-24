let boton_increse = document.getElementById("add");
let boton_decrese = document.getElementById("minus");
let boton_background_default = document.getElementById("background_default");
let boton_background_black = document.getElementById("background_black");
let boton_background_blue = document.getElementById("background_blue");

boton_increse.addEventListener("click", () => {
    increaseFontSize(":root", "--fuente-normal-h1", "--fuente-normal-p", 0.25, 0.25);
});


boton_decrese.addEventListener("click", () => {
    decreaseFontSize(":root", "--fuente-normal-h1", "--fuente-normal-p", 0.05, 0.05);
});




function setEstiloComponente(componente, variable, valor) {
    let selectorComponente = document.querySelector(componente);
    selectorComponente.style.setProperty(variable, valor);
}


boton_background_default.addEventListener("click", () => {

    setEstiloComponente(":root", "--background-color", "white");
    setEstiloComponente(":root", "--text-color", "black");

});

boton_background_black.addEventListener("click", () => {

    setEstiloComponente(":root", "--background-color", "black");
    setEstiloComponente(":root", "--text-color", "grey");

});

boton_background_blue.addEventListener("click", () => {

    setEstiloComponente(":root", "--background-color", "blue");
    setEstiloComponente(":root", "--text-color", "black");

});



// Función para incrementar el valor de una variable de fontsize en CSS
function increaseFontSize(componente, variableH1, variableP, valorH1, valorP) {

    let selectorComponente = document.querySelector(componente);
    let estiloComponente = getComputedStyle(document.querySelector(componente));

    console.log(parseFloat(estiloComponente.getPropertyValue(variableH1)));
    console.log(parseFloat(estiloComponente.getPropertyValue(variableP)));

    if (parseFloat(estiloComponente.getPropertyValue(variableH1)) < 3 && parseFloat(estiloComponente.getPropertyValue(variableP)) < 2.5) {

        boton_increse.disabled = false;
        boton_decrese.disabled = false;

        selectorComponente.style.setProperty(variableH1, parseFloat(estiloComponente.getPropertyValue(variableH1)) + valorH1 + "em");
        selectorComponente.style.setProperty(variableP, parseFloat(estiloComponente.getPropertyValue(variableP)) + valorP + "em");

    } else {
        boton_increse.disabled = true;
    }

}

function decreaseFontSize(componente, variableH1, variableP, valorH1, valorP) {

    let selectorComponente = document.querySelector(componente);
    let estiloComponente = getComputedStyle(document.querySelector(componente));

    console.log(parseFloat(estiloComponente.getPropertyValue(variableH1)));
    console.log(parseFloat(estiloComponente.getPropertyValue(variableP)));

    if (parseFloat(estiloComponente.getPropertyValue(variableH1)) > 1.5 && parseFloat(estiloComponente.getPropertyValue(variableP)) > 1.0) {

        boton_decrese.disabled = false;
        boton_increse.disabled = false;

        selectorComponente.style.setProperty(variableH1, parseFloat(estiloComponente.getPropertyValue(variableH1)) - valorH1 + "em");
        selectorComponente.style.setProperty(variableP, parseFloat(estiloComponente.getPropertyValue(variableP)) - valorP + "em");

    } else {
        boton_decrese.disabled = true;
    }
}