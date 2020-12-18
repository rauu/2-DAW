//Todas las funciones. Validate_form() es un onlick que tiene el boton.
function validate_form() {
    validate_name();
    validate_direccion();
    validate_NIF();
    validate_Date();
    validate_postal();
    validate_pais();
    validate_Genero();
    validate_Check();
    validate_Num();
    validate_mail();
    validacion_password();
    mostrar_Datos();

}

//Objetos Id de HTML
let name = document.getElementById("nameForm");
let direccion = document.getElementById("dirrecionForm");
let nif = document.getElementById("nifForm");
let selectedText = document.getElementById("fechaNacimiento");
let postal = document.getElementById("postal");
let pais = document.getElementById("paisForm");
let genero = document.getElementsByName("gender");
let check = document.getElementsByName("color");
let num = document.getElementById("telefonoForm");
let mail = document.getElementById("emailForm");
let pass1 = document.getElementById("passwordForm");
let pass2 = document.getElementById("passwordRe");


//Los booleanos para mostrar_DAtos
let namebool = false;
let direccionbool = false;
let nifbool = false;
let datebool = false;
let postalbool = false;
let paisbool = false;
let generobool = false;
let numbool = false;
let mailbool = false;
let passbool = false;
let checkbool = false;


//Validacion nombre para que no este vacio
function validate_name() {

    if (name.value == "") {
        alert("El nombre no peude estar en vacio");
        input_border(name.getAttribute("id"));
    } else {
        namebool = true;
    }

    return namebool;
}
console.log("NOMBREREERERE: " + namebool);
//Validacion direccion para que no este vacia
function validate_direccion() {
    if (direccion.value == "") {
        alert("La direccion no peude estar en vacio");
        input_border(direccion.getAttribute("id"));
    } else {
        direccionbool = true;
    }
    return direccionbool;
}

//82311129V Para probar
//Validacion NIF
function validate_NIF() {
    if (nif.value == "") {
        alert("El campo de NIF no puede estar vacia");
        input_border(nif.getAttribute("id"));
    } else {
        let dni = nif.value;
        let num = dni.slice(0, 8);
        let caracter = dni.slice(8, 9);
        var letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

        if (isNaN(num)) {
            alert("Has introducido el numero icorecto de NIF");
            input_border(nif.getAttribute("id"));
        } else {
            var result = num % 23;
            var ans = letters[result];

            if (ans != caracter) {
                alert("El NIF introducido esta mal");
                input_border(nif.getAttribute("id"));
            } else {
                nifbool = true;
            }
        }
    }
    return nifbool;
}

//Validadcoin fecha para que no sea una fecha de futuro y que tenga mayor que 18 años
function validate_Date() {
    var selectedDate = new Date(selectedText.value);
    var now = new Date();
    console.log(selectedText.value);
    if (selectedText.value == "") {
        alert("Tiene que poner una fecha");
        input_border(selectedText.getAttribute("id"));
    } else if (selectedDate > now) {
        alert("No puede poner una fecha de futuro");
        input_border(selectedText.getAttribute("id"));
    } else if (now.getFullYear() - selectedDate.getFullYear() < 18) {
        alert("No puedes registrarte porque eres menor de edad");
        input_border(selectedText.getAttribute("id"));
    } else {
        datebool = true;
    }
    return datebool;
}

//Validacion de Codigo postal
function validate_postal() {
    if (isNaN(postal.value)) {
        alert("Has escrito mal el codigo postal");
        input_border(postal.getAttribute("id"));
    } else if (postal.value == "") {
        alert("No has escrito el codigo postal");
        input_border(postal.getAttribute("id"));
    } else {
        postalbool = true;
    }
    return postalbool;
}

//Validacion pais para que no este en vacio
function validate_pais() {
    console.log(pais.value);
    if (pais.value == "") {
        alert("Tienes que indicar tu pais");
        input_border(pais.getAttribute("id"));
    } else {
        paisbool = true;
    }
    return paisbool;
}


//Validacion de genero para que haya uno seleccionado
function validate_Genero() {
    console.log(genero);
    if (!(genero[0].checked || genero[1].checked || genero[2].checked)) {
        alert("No ha seleccionado su genero");
    } else {
        generobool = true;

    }
    return generobool;

}


//Validacion check
function validate_Check() {
    if (!(check[0].checked || check[1].checked || check[2].checked)) {
        alert("No ha seleccionado el color");
    } else {
        checkbool = true;
    }
    return checkbool;
}

//Validacion numero
function validate_Num() {
    let validate = /^([9,7,6]{1})+([0-9]{8})$/;
    if (!validate.exec(num.value)) {
        alert("No puedes dejar vacio el campo de telefono o escribir un mal numero");
        input_border(num.getAttribute("id"));
    } else {
        numbool = true;
    }
    return numbool;
}

//Validacion de Email
function validate_mail() {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value)) {
        alert("Tienes que escribir el correo");
        input_border(mail.getAttribute("id"));
    } else {
        mailbool = true;
    }
    return mailbool;
}

//Validacion password
function validacion_password() {

    if (pass1.value != pass2.value) {
        alert("Las contraseñas no coinciden");
        input_border(pass1.getAttribute("id"));
        input_border(pass2.getAttribute("id"));
    } else if (pass1.value == "") {
        alert("No has escrito la contraseña");
        input_border(pass1.getAttribute("id"));
    } else if (pass2.value == "") {
        alert("No has confirmado la contrtaseña");
        input_border(pass2.getAttribute("id"));
    } else {
        passbool = true;
    }
    return passbool;
}

//Boton Reset

function resetForm() {
    document.getElementById("reset").reset();


}


//Function in que paso id como parameto del input que poner border red
function input_border(id_name) {
    let idStyle = document.getElementById(id_name);
    idStyle.style.border = "1px solid red";
}


function mostrar_Datos() {
    let color = "";
    for (let x = 0; x < check.length; x++) {
        if (check[x].checked) {
            color += check[x].value + " ";
        }
    }
    let generoMD = "";
    for (let x = 0; x < genero.length; x++) {
        if (genero[x].checked) {
            generoMD += genero[x].value;
        }
    }


    if (namebool == true && direccionbool == true && nifbool == true && datebool == true && generobool == true && checkbool == true && numbool == true && mailbool == true && passbool == true) {
        alert("Se ha enviado el formulario correctamente");
        alert("Nombre: " + name.value + "\n" +
            " Direccion: " + direccion.value + "\n" +
            "NIF: " + nif.value + "\n" +
            "Fecha de nacimiento: " + selectedText.value + "\n" +
            "Codigo Postal: " + postal.value + "\n" +
            "Pais: " + pais.value + "\n" +
            "Genero: " + generoMD + "\n" +
            "Preferencia: " + color + "\n" +
            "Telefono: " + num.value + "\n" +
            "Email: " + mail.value + "\n"
        );
    } else {
        alert("No se ha podido enviar el formulario");
    }
}