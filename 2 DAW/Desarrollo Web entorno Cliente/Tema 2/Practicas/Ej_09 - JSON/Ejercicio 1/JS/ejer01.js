let ciclos = [{
        "name": "SMR",
        "discription": "Sistemas microinformaticos y redes"
    },
    {
        "name": "ASIR",
        "discription": "Administracion de sistemas informaticos  y redes"
    },
    {
        "name": "DAW",
        "discription": "Desarrollo de aplicaciones web"
    },
    {
        "name": "DAM",
        "discription": "Desarrollo de aplicaciones multiplataforma"
    }
];

function obtener() {
    let ul = document.createElement("ul");
    for (let i = 0; i < ciclos.length; i++) {
        let li = document.createElement("li");

        li.innerHTML = (ciclos[i].name + " - " + ciclos[i].discription);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}