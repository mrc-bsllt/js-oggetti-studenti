$(document).ready(
  function() {

    // PUNTO 1------------------------------------------------------------
    // creo un oggetto con le seguenti proprietà: nome, cognome e età
    var user = {
      nome: "Marco",
      cognome: "Busellato",
      eta: 28
    }

    // stampo a schermo tutte le proprietà
    for (key in user) {
      $("#user_list").append("<li>" +  key.toUpperCase() + ": " + user[key] +  "</li>");
    }

    // PUNTO 2-----------------------------------------------------------
    // creo un array di studenti
    var studenti = [
      {
        nome: "Marco",
        cognome: "Busellato"
      },
      {
        nome: "Simone",
        cognome: "Romiti"
      },
      {
        nome: "Enrico",
        cognome: "Rombaldoni"
      },
      {
        nome: "Gianluca",
        cognome: "Pesce"
      },
      {
        nome: "Marco",
        cognome: "Calvieri"
      },
      {
        nome: "Alessandro",
        cognome: "Neri"
      },
      {
        nome: "Riccardo",
        cognome: "Ferrari"
      },

    ];
    console.log(studenti);

    for(var i = 0; i < studenti.length; i++) {
      for (key in studenti[i]) {
        if(key == "nome") {
          $("#students_list").append("<span>" + studenti[i][key] + " " + "</span>");
        } else {
          $("#students_list").append("<span>" + studenti[i][key] + "</span><br>");
        }
      }
    }




  }
);
