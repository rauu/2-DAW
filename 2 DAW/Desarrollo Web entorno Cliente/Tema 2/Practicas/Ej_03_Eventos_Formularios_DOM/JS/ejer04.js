let count = 1;

function anadir() {


    let text = prompt("escribe texto");
    //var id_HTML = document.getElementsByTagName("p");
    let new_p = document.createElement("p");
    new_p.className = "text";
    new_p.innerHTML = count + ". " + text;
    document.body.appendChild(new_p);

    count++;
}

function eliminar() {
    let p = document.getElementsByClassName("text");
    let num = p.length - 1;
    console.log(num);
    if (num > 0) {
        let x = document.getElementsByClassName("text")[num];
        x.parentNode.removeChild(x);
    } else {
        alert("No se puede eliminar mas");
    }
}