//Seleccionar frutas
var clases = document.getElementsByClassName("fpeque");
//Function anonima para coger todas las id de frutas y pasar el valor de la fruta seleccioinado a la funcion Fruta
for (let frutas of clases) {
    frutas.addEventListener(
        "dblclick",
        () => {
            Fruta(frutas.id);
        },
        false
    );
}

function Fruta(x) {
    //Img on dblclick
    console.log(x);
    let img = document.getElementById(x).getElementsByClassName("peque")[0].getAttribute("src");
    console.log(img);

    //Si hay una id llamada a en la img pues que me lo quite
    if (document.getElementById("a") != null) {
        let p = document.getElementById("a");
        p.parentElement.firstChild.remove();
    }

    //Creacion de la etiqueta img y luego pasar la img de dblclick
    let img_fac = document.getElementById("ffac");
    let img_clone = document.createElement("img");
    img_clone.src = img;
    img_clone.setAttribute('id', 'a');
    img_clone.classList.add("peque");
    console.log(img_clone);
    img_fac.appendChild(img_clone);


    //Pasar la referencia
    let ref = document.getElementById(x).getElementsByTagName("span")[0].innerText;
    let input_ref = document.getElementById("ref");
    input_ref.value = ref;

    //Pasar el precion
    let price = document.getElementById(x).getElementsByTagName("span")[1].innerText;
    let input_price = document.getElementById("precio");
    input_price.value = price;

}

//Bools para probar que estan bien los campos.



//Funcion Grabar
function Grabar() {
    //Comprobacion de DNI
    let input_dni = document.getElementById("dni").value;
    Dni(input_dni);

    //Comprobacion de Cantidad
    let input_cantidad = document.getElementById("cantidad").value;


    let cantidad = input_cantidad.replace(",", ".");


    Cantidad(cantidad);


    //Comprobacion referencia para que no este en vacia
    let input_ref = document.getElementById("ref").value;
    Ref(input_ref);

    //Value de Input de  precio
    //let input_precio = document.getElementById(x).getElementsByTagName("span")[1].innerText;
    let input_precio = document.getElementById("precio").value;

    //Introducir Tabla

    //Primero se comprobaran errores si hay en los input

    if (Dni(input_dni) == false) {
        alert("El DNI INTRODUCIDO ES INCORRECTA");
    } else if (Ref(input_ref) == false) {
        alert("TIENE QUE SELECCIONAR ALGUN PRODUCTO");
    } else if (Cantidad(input_cantidad) == false) {
        alert("LA CANTIDAD NO ES CORRECTA");
    } else {
        // Se empieza a crear la tabla 
        let table = document.getElementById('lineas');
        let tr = document.createElement("tr");
        let td_dni = document.createElement("td");
        let td_ref = document.createElement("td");
        let td_precio = document.createElement("td");
        let td_cantidad = document.createElement("td");
        let td_total = document.createElement("td");
        let td_borrar = document.createElement("td");

        //creacion de Boton
        let boton = document.createElement("button");
        boton.innerText = "Borrar";
        td_borrar.appendChild(boton);

        //Agregacion de los clases si algun elemento lo necesite
        boton.classList.add("boton");
        td_total.classList.add("total_num", "a_derecha");
        td_precio.classList.add("a_derecha");
        td_cantidad.classList.add("a_derecha");


        //Asignacion de onlick a boton Borrar
        //boton.setAttribute('onclick', Borrar);
        boton.addEventListener('click', () => {
            tr.remove();

            //Actualizar el Precio
            Precio();
        });



        //Meter los valores a la tabla
        td_dni.innerText = input_dni.toUpperCase();
        td_ref.innerText = input_ref;
        td_precio.innerText = input_precio + ".00";
        td_cantidad.innerText = cantidad;
        td_total.innerText = (input_precio * cantidad);

        tr.appendChild(td_dni);
        tr.appendChild(td_ref);
        tr.appendChild(td_precio);
        tr.appendChild(td_cantidad);
        tr.appendChild(td_total);
        tr.appendChild(td_borrar);
        table.appendChild(tr);


        //Actualizar el Precio
        Precio();

        //Borrar todos los campos para el sigiente campo
        Cancelar();

    }

}


//Function Validar dni
function Dni(input_dni) {

    if (input_dni == "") {
        bool_dni = false;
        return bool_dni;
    } else {
        let dni = input_dni.toUpperCase();
        let num = dni.slice(0, 8);
        let caracter = dni.slice(8, 9);
        var letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

        if (isNaN(num)) {
            return false;
        } else {
            var result = num % 23;
            var ans = letters[result];

            if (ans != caracter) {
                return false;

            } else {
                return true;

            }
        }
    }
}

// Comprobacion de Cantidad

function Cantidad(input_cantidad) {

    if (isNaN(input_cantidad)) {
        return false;
    } else if (input_cantidad == "") {
        return false;
    } else {
        bool_cantidad = true;
        return true;
    }


}


//Comprobacion de Referencia para que no este en vacion
function Ref(input_ref) {

    if (input_ref == "") {
        return false;
    } else {
        return true;
    }
}

//Boton cancelar
function Cancelar() {
    document.getElementById("dni").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("ref").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("a").src = " ";

    /*input_dni.innerHTML = "";
    input_cantidad.innerHTML = " ";
    input_ref.innerHTML = " ";
    input_precio.innerHTML = "";
    console.log("dsf");*/

}


//Calcular el total de de los precios
function Precio() {

    let total = document.getElementsByClassName("total_num");
    let sum = 0;
    for (let x = 0; x < total.length; x++) {
        sum += parseFloat(total[x].innerText);
    }

    //Coger el total de html
    let total_html = document.getElementsByClassName("total")[0];

    total_html.innerText = sum;

}