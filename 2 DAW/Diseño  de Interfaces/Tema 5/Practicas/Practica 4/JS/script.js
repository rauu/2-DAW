// Función para obtener el valor de una variable
function getEstiloComponente(componente, variable) {
    // Obtenemos las propiedades y valores del componente
    let estiloComponente = getComputedStyle(document.querySelector(componente));
    console.log(`La variable: ${variable}, tiene el valor de: ${estiloComponente.getPropertyValue(variable)}`);
}


// Función para modificar el valor de una variable en css
function setEstiloComponente(componente, variableH1, variableP, valorH1, valorP) {
    let selectorComponente = document.querySelector(componente);
    let estiloComponente = getComputedStyle(document.querySelector(componente));
    console.log(parseFloat(estiloComponente.getPropertyValue(variableH1)) + 0.5);
    selectorComponente.style.setProperty(variableH1, parseFloat(estiloComponente.getPropertyValue(variableH1)) + valorH1 + "em");
    selectorComponente.style.setProperty(variableP, parseFloat(estiloComponente.getPropertyValue(variableP)) + valorP + "em");

}

function boton() {
    setEstiloComponente(":root", "--fuente-normal-h1", "--fuente-normal-p", 0.05, 0.05);
}