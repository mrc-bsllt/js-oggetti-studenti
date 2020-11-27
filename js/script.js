$(document).ready(
  function() {

    // creo un oggetto con le seguenti proprietà: nome, cognome e età
    var user = {
      nome: "Marco",
      cognome: "Busellato",
      eta: 28
    }
    console.log(user);

    // stampo a schermo tutte le proprietà
    for (key in user) {
      console.log(key, user[key]);
      $("#user_list").append("<li>" +  key.toUpperCase() + ": " + user[key] +  "</li>");
    }

  }
);
