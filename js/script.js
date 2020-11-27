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

    // PUNTO 3-------------------------------------------------------------
    // riprendo l'array di prima dei nomi
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

    // creo un oggetto vuoto, dopo andro ad inserire i dati dell'Utente
    var newUser = {};
    // chiedo 3 volte un prompt per ricevere i dati
    var messaggio = "";
    var userData;
    for(var i = 0; i < 3; i++) {
      switch (i) {
        case 0:
          messaggio = "Nome";
          userData = "nome";
          break;
        case 1:
          messaggio = "cognome";
          userData = "cognome";
          break;
         case 2:
          messaggio = "età";
          userData = "eta";
          break;
      }
      if(i == 2) {
        var value = parseInt(prompt("Inserisci il tuo " + messaggio));
      } else {
        var value = prompt("Inserisci il tuo " + messaggio);
      }
      newUser[userData] = value;
    }

    studenti.push(newUser);
    console.log(studenti);

  }
);
