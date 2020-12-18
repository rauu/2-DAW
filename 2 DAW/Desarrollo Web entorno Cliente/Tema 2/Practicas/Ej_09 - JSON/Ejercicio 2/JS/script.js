//Coger todos los valores del formulario
var formulario = document.getElementById('form');
var nombre = formulario.nombre;
var apellidos = formulario.apellidos;
var nif = formulario.dni;
var email = formulario.email;
var color = document.getElementsByName("colores");
//var color_value = " ";
var json_array = [];
var array_color = [];



//Function guardar para guardar los valores en JSON(LocalStorage)
function guardar() {

    //For para coger el valor de checkbox
    for (let y = 0; y < color.length; y++) {
        if (color[y].checked) {
            array_color.push(color[y].value);
        }
        color[y].checked = false;
    }

    //console.log(color_value);


    //meter los valores en na array de forma JSON
    if (nombre.value == "" || apellidos.value == "" || nif.value == "" || email.value == "") {
        alert("Tiene que rellenar todos los datos");
    } else {


        json_array.push({
            "nombre": nombre.value,
            "apellidos": apellidos.value,
            "nif": nif.value,
            "email": email.value,
            "color": JSON.stringify(array_color)
        });
        console.log(json_array);
        //localStorage.usuario = JSON.stringify(json_array);
        localStorage.setItem('usuario', JSON.stringify(json_array));
        nombre.value = "";
        apellidos.value = "";
        nif.value = "";
        email.value = "";
        array_color = [];
        console.log(array_color);
        //color[0].checked = false;
        //color[1].checked = false;
        //color[2].checked = false;
        //color_value = " ";
    }
}






function recuperar() {
    let recuperar_name = prompt("Escriba el nombre de usuario que quiere recuperar");
    var recuperar_array = JSON.parse(localStorage.getItem("usuario"));
    console.log(recuperar_array.length);
    for (let x = 0; x < recuperar_array.length; x++) {
        if (recuperar_name == recuperar_array[x].nombre) {
            nombre.value = recuperar_array[x].nombre;
            apellidos.value = recuperar_array[x].apellidos;
            nif.value = recuperar_array[x].nif;
            email.value = recuperar_array[x].email;
            console.log(JSON.parse(recuperar_array[x].color));
            for (let y = 0; y < 3; y++) {
                console.log(JSON.parse(recuperar_array[x].color)[y]);
                //for (let y = 0; y < ((JSON.parse(recuperar_array[x].color))).length; y++) {
                //console.log(color[0].value);
                if ((JSON.parse(recuperar_array[x].color)[y]) == color[y].value) {
                    color[y].checked = true;
                    console.log(color[y].value);
                }
            }
            //console.log(recuperar_array[0].color[0]);


        } else {
            alert("El nombre de usuario no existe");
            break;
        }

    }

    /* nombre.value = localStorage.getItem("Nombre");
     apellidos.value = localStorage.getItem("Apellidos");
     nif.value = localStorage.getItem("Nif");
     email.value = localStorage.getItem("Email");*/
}


function borrar() {
    localStorage.clear();
}