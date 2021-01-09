//Input del input de HTML
let text = document.getElementById("text");


function font_big() {
    if (text.value == "") {
        console.log(text);

        alert("Tiene que escribir una ID en el input. Puede escribir \"parrafo1\" o \"parrafo2\"");
    } else {
        let p = document.getElementById(text.value);
        if (p == null) {
            alert("La ID que ha escrito no existe");
        } else {
            let size = (window.getComputedStyle(p).getPropertyValue("font-size"));
            let em = parseFloat(size) / 16;
            console.log((em));

            if (em < 2) {
                p.style.fontSize = em + 0.05 + "em";

                console.log(em);
            } else if (em == 2) {
                alert("El texto no se puede agrandar mas");
            }
        }


    }

}

function font_small() {
    if (text.value == "") {
        console.log(text);

        alert("Tiene que escribir una ID en el input. Puede escribir \"parrafo1\" o \"parrafo2\"");
    } else {
        let p = document.getElementById(text.value);
        if (p == null) {
            alert("La ID que ha escrito no existe");
        } else {
            let size = (window.getComputedStyle(p).getPropertyValue("font-size"));
            let em = parseFloat(size) / 16;
            console.log((em));

            if (em > 0.9) {
                p.style.fontSize = em - 0.05 + "em";

                console.log(em);
            } else if (em == 0.9) {
                alert("El texto no se puede reducir mas");
            }
        }


    }
}

function font_original() {
    let font1 = document.getElementById("parrafo1");
    let font2 = document.getElementById("parrafo2");

    font1.style.fontSize = "initial";
    font2.style.fontSize = "initial";
}