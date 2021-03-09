/*
CAMPO MINATO
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// FUNZIONI

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}


// 1. Creo un array dove inserire i numeri random generati dal computer
var numeriRandomComputer = [];

// 2. Il computer deve generare 16 numeri casuali tra 1 e 100.
for (var i = 0; i < 16; i++) {
  var numeriComputer = numeroRandom(1, 100);
  // 3. Controllo che i numeri generati non siano duplicati
  if (numeriRandomComputer.includes(numeriComputer)) {
    numeriComputer = numeroRandom(1, 100);
  }
  numeriRandomComputer.push(numeriComputer);
  // console.log(numeriComputer);
}

console.log(numeriRandomComputer);

// 4. Creo un array e inserisco i numeri scelti dall'utente
var scelteUtente = [];
var j = 0;
var uguali = false;

do {
  do {
    var numeriSceltiUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  } while ( (isNaN(numeriSceltiUtente)) || (numeriSceltiUtente > 100) || (numeriSceltiUtente < 1) );


  if (scelteUtente.includes(numeriSceltiUtente)) {
    var x = 0;
    do {
      numeriSceltiUtente = parseInt(prompt(" Questo numero l'hai già inserito!!! Inserisci un numero diverso"));
      x++;
    } while ( (isNaN(numeriSceltiUtente)) || (scelteUtente.includes(numeriSceltiUtente)) || (numeriSceltiUtente > 100) || (numeriSceltiUtente < 1) );
  }

  if ( numeriRandomComputer.includes(numeriSceltiUtente)) {
    uguali = true;
  }
  scelteUtente.push(numeriSceltiUtente);
  console.log(scelteUtente);
  j++;
} while ( (j <= 84) && (uguali == false) );


console.log(scelteUtente);

if (uguali) {
  console.log("hai perso! Il numero di volte che hai inserito un numero consentito è: " + (j - 1) );
} else {
  console.log("hai vinto");
}
