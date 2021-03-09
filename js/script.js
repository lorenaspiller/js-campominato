/*
CAMPO MINATO
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/




// FUNZIONI
// funzione che genera un numero random tra 1 e 100
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}

// funzione che genera n numeri random tra 1 e 100

function generatoreNumeri(min, max, nNumeri) {
  var arrayNumeri = [];
  var i = 0;
  while (i < nNumeri) {
    var numeriComputer = numeroRandom(min, max);
    // Controllo che i numeri generati non siano duplicati
    if (arrayNumeri.includes(numeriComputer)) {
      numeriComputer = numeroRandom(min, max);
    }
    arrayNumeri.push(numeriComputer);

    i++;
  }
  return arrayNumeri;
}


// 1. Creo un array dove inserire i numeri random generati dal computer
var numeriRandomComputer = [];

// 2. chiedo all'utente il grado di difficoltà
// con 0 i numeri generati saranno da 1 a 100
// con 0 i numeri generati saranno da 1 a 80
// con 0 i numeri generati saranno da 1 a 50

do {
  var difficolta = parseInt(prompt("inserisci il grado di difficolta. \n con difficoltà 0 => tra 1 e 100 \n con difficoltà 1 => tra 1 e 80 \n con difficoltà 2 => tra 1 e 50"))
} while (isNaN(difficolta) || difficolta < 0 || difficolta > 2);

// 3. Applico la funzione nNumeri random all'array della cpu
if (difficolta == 0) {
  var numeriRandomComputer = generatoreNumeri(1, 100, 16);
  console.log("la difficoltà scelta è 0 => numeri tra 1 e 100");
} else if (difficolta == 1) {
  var numeriRandomComputer = generatoreNumeri(1, 80, 16);
  console.log("la difficoltà scelta è 0 => numeri tra 1 e 80");
} else {
  var numeriRandomComputer = generatoreNumeri(1, 50, 16);
  console.log("la difficoltà scelta è 0 => numeri tra 1 e 50");
}

console.log(numeriRandomComputer);

// 4. Creo un array e inserisco i numeri scelti dall'utente
var scelteUtente = [];

var j = 0;
var uguali = false;

do {
  // 5. Chiedo all'utente di inserire un numero da 0 a 100
  do {
    var numeriSceltiUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  } while ( (isNaN(numeriSceltiUtente)) || (numeriSceltiUtente > 100) || (numeriSceltiUtente < 1) );

  // 6. Controllo l'utente ha inserito lo stesso numero più volte
  if (scelteUtente.includes(numeriSceltiUtente)) {
    var x = 0;
    do {
      numeriSceltiUtente = parseInt(prompt(" Questo numero l'hai già inserito!!! Inserisci un numero diverso"));
      x++;
    } while ( (isNaN(numeriSceltiUtente)) || (scelteUtente.includes(numeriSceltiUtente)) || (numeriSceltiUtente > 100) || (numeriSceltiUtente < 1) );
  }

  // 7. Controllo se il numero inserito dall'utente è anche nell'array dei numeri generati per la cpu
  if ( numeriRandomComputer.includes(numeriSceltiUtente)) {
    uguali = true;
  }

  // 8. Inserisco il numero scelto dall'utente nell'array generato precedentemente
  scelteUtente.push(numeriSceltiUtente);
  console.log(scelteUtente);
  j++;
} while ( (j <= 84) && (uguali == false) );

// console.log(scelteUtente);

// 9. Comunico i risultati all'utente
if (uguali) {
  console.log("hai perso! Il numero di volte che hai inserito un numero consentito è: " + (j - 1) );
} else {
  console.log("hai vinto");
}
