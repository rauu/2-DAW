function cargar() {
    setTimeout(getCountries, 3000);
}

function getCountries() {
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "white";
    body.style.backgroundImage = "none";


    let select = document.getElementById("countries");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);

            for (let x = 0; x < myObj.length; x++) {

                //option.value =

                select.add(new Option(myObj[x].name, myObj[x].alpha2Code));
            }

        } else {
            console.log('Ha ocurrido un error: ${xhttp.status}');
        }
    };
    xhttp.send();
}