let boton_increse = document.getElementById("add");
let boton_decrese = document.getElementById("minus");
let boton_reset = document.getElementById("reset");

boton_increse.addEventListener("click", () => {

    increaseFontSize(":root", "--h1FontSize", "--pFontSize", 2, 2);
});

boton_decrese.addEventListener("click", () => {
    decreaseFontSize(":root", "--h1FontSize", "--pFontSize", 2, 2);
});

boton_reset.addEventListener("click", () => {
    reset(":root", "--h1FontSize", "--pFontSize");
});

function increaseFontSize(componente, variableH1, variableP, valorH1, valorP) {
    let selectorComponente = document.querySelector(componente);
    let estiloComponente = getComputedStyle(document.querySelector(componente));

    console.log(parseFloat(estiloComponente.getPropertyValue(variableH1)));
    console.log(parseFloat(estiloComponente.getPropertyValue(variableP)));

    if (
        parseFloat(estiloComponente.getPropertyValue(variableH1)) < 60 &&
        parseFloat(estiloComponente.getPropertyValue(variableP)) < 30
    ) {
        boton_increse.disabled = false;
        boton_decrese.disabled = false;

        selectorComponente.style.setProperty(
            variableH1,
            parseFloat(estiloComponente.getPropertyValue(variableH1)) + valorH1 + "px"
        );
        selectorComponente.style.setProperty(
            variableP,
            parseFloat(estiloComponente.getPropertyValue(variableP)) + valorP + "px"
        );
    } else {
        boton_increse.disabled = true;
    }
}

function decreaseFontSize(componente, variableH1, variableP, valorH1, valorP) {
    let selectorComponente = document.querySelector(componente);
    let estiloComponente = getComputedStyle(document.querySelector(componente));

    console.log(parseFloat(estiloComponente.getPropertyValue(variableH1)));
    console.log(parseFloat(estiloComponente.getPropertyValue(variableP)));

    if (
        parseFloat(estiloComponente.getPropertyValue(variableH1)) > 20 &&
        parseFloat(estiloComponente.getPropertyValue(variableP)) > 8
    ) {
        boton_decrese.disabled = false;
        boton_increse.disabled = false;

        selectorComponente.style.setProperty(
            variableH1,
            parseFloat(estiloComponente.getPropertyValue(variableH1)) - valorH1 + "px"
        );
        selectorComponente.style.setProperty(
            variableP,
            parseFloat(estiloComponente.getPropertyValue(variableP)) - valorP + "px"
        );
    } else {
        boton_decrese.disabled = true;
    }
}

function reset(componente, variableH1, variableP) {
    let selectorComponente = document.querySelector(componente);
    let estiloComponente = getComputedStyle(document.querySelector(componente));

    boton_decrese.disabled = false;
    boton_increse.disabled = false;

    selectorComponente.style.setProperty(variableH1, "30px");
    selectorComponente.style.setProperty(variableP, "16px");
    console.log(parseFloat(estiloComponente.getPropertyValue(variableH1)));
    console.log(parseFloat(estiloComponente.getPropertyValue(variableP)));
}

const chk = document.getElementById("chk");
let dark = false;
chk.addEventListener("change", () => {
    let nav = document.getElementById("navbar");

    if (!dark) {
        setEstiloComponente(":root", "--background-color", "#292C35");
        setEstiloComponente(":root", "--background-color-card", "#B4B6C1");
        setEstiloComponente(":root", "--text-fuera", "white");
        nav.classList.remove("navbar-light", "bg-light");
        nav.classList.add("navbar-dark", "bg-dark");
        dark = true;
    } else if (dark) {
        setEstiloComponente(
            ":root",
            "--background-color",
            getEstiloComponente(":root", "--background-color")
        );
        setEstiloComponente(
            ":root",
            "--background-color-card",
            getEstiloComponente(":root", "--background-color-card")
        );
        setEstiloComponente(
            ":root",
            "--text-fuera",
            getEstiloComponente(":root", "--text-fuera")
        );
        nav.classList.add("navbar-light", "bg-light");
        nav.classList.remove("navbar-dark", "bg-dark");
        dark = false;
    }
});

function getEstiloComponente(componente, variable) {
    // Obtenemos las propiedades y valores del componente
    let estiloComponente = getComputedStyle(document.querySelector(componente));
    return estiloComponente;
}
// Función para modificar el valor de una variable en css
function setEstiloComponente(componente, variable, valor) {
    let selectorComponente = document.querySelector(componente);
    selectorComponente.style.setProperty(variable, valor);
}
