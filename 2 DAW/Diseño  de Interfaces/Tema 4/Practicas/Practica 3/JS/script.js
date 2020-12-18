function iniciar() {
    soltar = document.getElementById('destino');
    soltar.addEventListener('dragenter', function(e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener('dragover', function(e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener('drop', soltado, false);
}

function soltado(e) {
    e.preventDefault();
    var archivos = e.dataTransfer.files;



    let tabla = document.getElementById('infoArchivos');
    let tr = document.createElement('tr');
    let td_nombre = document.createElement('td');
    let td_size = document.createElement('td');
    let td_tipo = document.createElement('td');
    let td_icono = document.createElement('td');
    let img = document.createElement('img');

    for (var f = 0; f < archivos.length; f++) {

        td_nombre.innerHTML = archivos[f].name;
        td_size.innerHTML = archivos[f].size;
        td_tipo.innerHTML = e.dataTransfer.items[f].type;
        let type = e.dataTransfer.items[f].type.split("/");
        console.log(type);

        switch (e.dataTransfer.items[f].type) {
            case "image/" + type[1]:
                img.src = "../img.png";
                td_icono.appendChild(img);
                break;
            case "text/html":
                img.src = "../html.png";
                td_icono.appendChild(img);
                break;
            case "text/css":
                img.src = "../css.png";
                td_icono.appendChild(img);
                break;
            case "text/javascript":
                img.src = "../js.png";
                td_icono.appendChild(img);
                break;
            case "application/pdf":
                img.src = "../pdf.png";
                td_icono.appendChild(img);
                break;

            default:
                img.src = "../texto.png";
                td_icono.appendChild(img);
        }




        /*img.src = "../" + archivos[f].name;
        td_icono.appendChild(img);*/




        //lista += 'Archivo: ' + archivos[f].name + ' ' + archivos[f].size + '<br>';
    }


    //img.src = document.getElementById('submit').files.item(0).getAsDataURL();

    tr.appendChild(td_nombre);
    tr.appendChild(td_size);
    tr.appendChild(td_tipo);
    tr.appendChild(td_icono);
    //tr.appendChild(img);

    tabla.appendChild(tr);


    //soltar.innerHTML = lista;
}
window.addEventListener('load', iniciar, false);