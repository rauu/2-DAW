setTimeout(function () {
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    method: "GET",
  }).done(function (data) {
    console.log(data);
    $("#body").css("background-color", "white");
    $("#body").css("backgroundImage", "none");
    for (let x = 0; x < data.length; x++) {
      $("#countries").append(new Option(data[x].name, data[x].alpha2Code));
    }
  });
}, 3000);
