//Crear un conjunto de promesas que deban resolverse ambas para continuarcon su ejecución 


/*const p1 = fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
}).then(data => {
    return data;
}).catch(err => {
    console.log(err);
});




const p2 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();
}).then(data => {
    return data;
}).catch(err => {
    console.log(err);
});


//Creacion de select
let select = document.createElement('select');
select.options[0] = new Option("--", "--");
Promise.all([p1, p2]).then(
    value => {
        console.log(value);
        for (let x = 0; x < value[0].length; x++) {
            select.options[x + 1] = new Option(value[0][x].username, value[0][x].id);
        }
        document.body.appendChild(select);


        select.onchange = () => {
            tabla(value[1]);
        };
    }
);
*/




//Crear un conjunto de promesas ​​que deban resolverse ambas para continuarcon su ejecución usando la estructura Async/Await ​(3.5pts)




/*async function loadJsonUser(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    thrownewError(response.status);
}
loadJsonUser('https://jsonplaceholder.typicode.com/users')
    .then(j => {
        console.log(j);
    }).catch(e => {
        console.log(e);
    });



async function loadJsonPost(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    thrownewError(response.status);
}
loadJsonPost('https://jsonplaceholder.typicode.com/posts')
    .then(j => {
        console.log(j);
        return j;
    }).catch(e => {
        console.log(e);
    });
*/



async function loadJsonUser(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    thrownewError(response.status);
}

//Creacion de select
let select = document.createElement('select');
select.options[0] = new Option("--", "--");
loadJsonUser('https://jsonplaceholder.typicode.com/users')
    .then(j => {
        console.log(j);
        for (let x = 0; x < j.length; x++) {
            select.options[x + 1] = new Option(j[x].username, j[x].id);
        }
        document.body.appendChild(select);
    }).catch(e => {
        console.log(e);
    });

async function loadJsonPost(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    thrownewError(response.status);
}

loadJsonPost('https://jsonplaceholder.typicode.com/posts')
    .then(j => {
        console.log(j);
        select.onchange = () => {
            tabla(j);
        };
    }).catch(e => {
        console.log(e);
    });


function tabla(data) {
    if (document.getElementsByTagName("table").length > 0) {
        for (let i = 0; i < document.getElementsByTagName("table").length; i++) {
            document.getElementsByTagName("table")[i].parentElement.removeChild(document.getElementsByTagName("table")[i]);
        }
    }
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let th_titulo = document.createElement('th');
    let th_cuerpo = document.createElement('th');
    let new_tbody = document.createElement('tbody');



    th_titulo.innerHTML = "Titular";
    th_cuerpo.innerHTML = "Cuerpo";

    tr.appendChild(th_titulo);
    tr.appendChild(th_cuerpo);
    table.appendChild(tr);

    for (let x = 0; x < data.length; x++) {
        if (data[x].userId == select.value) {
            let td_titular = document.createElement('td');
            let td_cuerpo = document.createElement('td');
            let tr_body = document.createElement('tr');
            td_titular.innerHTML = data[x].title;
            td_cuerpo.innerHTML = data[x].body;
            tr_body.appendChild(td_titular);
            tr_body.appendChild(td_cuerpo);
            new_tbody.appendChild(tr_body);




            table.appendChild(new_tbody);
            //table.appendChild(tr_body);


        }
    }
    document.body.appendChild(table);
}