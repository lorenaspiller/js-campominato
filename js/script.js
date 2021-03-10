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


/*
***** FUNZIONI *****
*/

//numeroRandom()
/**
 * numeroRandom - funzione che genera un numero random tra due numeri scelti dall'utente e restituisce un numero
 *
 * @param  {number} min numero minimo
 * @param  {number} max numero massimo
 * @return {number}     un numero random
 */
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//generatoreNumeri()
/**
 * generatoreNumeri - funzione che genera n numeri random tra 1 e 100 e restituisce un array di numeri senza numeri doppi
 *
 * @param  {number} min     numero minimo
 * @param  {number} max     numero massimo
 * @param  {number} nNumeri numeri da generare
 * @return {numbers}        array di numeri random
 */

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


//trovaInArray()
/**
 * trovaInArray - funzione che mi permette di trovare un elemento all'interno di un array
 *
 * @param  {var array}            array     seleziono l'array
 * @param  {number || string}     elemento  elemento da trovare nell'array
 * @return {true || false}                  true in caso abbia trovato l'elemento nell'array, false in caso contrario
 */

function trovaInArray(array, elemento) {
  var i = 0;
  trovato = false;
  while (i < array.length) {
    if (array[i] == elemento) {
      return true;
    }
    i++;
  }
  return false;
}


// INIZIO PROGRAMMA

// 1. Creo un array dove inserire i numeri random generati dal computer
var numeriRandomComputer = [];

/* 2. chiedo all'utente il grado di difficoltà
  con 0 i numeri generati saranno da 1 a 100
  con 0 i numeri generati saranno da 1 a 80
  con 0 i numeri generati saranno da 1 a 50
*/

do {
  var difficolta = parseInt(prompt("inserisci il grado di difficolta. \n con difficoltà 0 => tra 1 e 100 \n con difficoltà 1 => tra 1 e 80 \n con difficoltà 2 => tra 1 e 50"))
} while (isNaN(difficolta) || difficolta < 0 || difficolta > 2);

// 3. Applico la funzione nNumeri random all'array della cpu
var maxBombe = 0;

if (difficolta == 0) {
  numeriRandomComputer = generatoreNumeri(1, 100, 16);
  maxBombe = 100;
  console.log("la difficoltà scelta è 0 => numeri tra 1 e 100");
} else if (difficolta == 1) {
  numeriRandomComputer = generatoreNumeri(1, 80, 16);
  maxBombe = 80;
  console.log("la difficoltà scelta è 0 => numeri tra 1 e 80");
} else {
  numeriRandomComputer = generatoreNumeri(1, 50, 16);
  maxBombe = 50;
  console.log("la difficoltà scelta è 0 => numeri tra 1 e 50");
}

console.log(numeriRandomComputer);

// 4. Creo un array e inserisco i numeri scelti dall'utente
var scelteUtente = [];

var j = 0;
var uguali = false;

while ( (scelteUtente.length < (maxBombe - 16) ) && (uguali == false) ) {
  // 5. Chiedo all'utente di inserire un numero da 1 a un numero massimo scelto in base al livello

  do {
    var numeriSceltiUtente = parseInt(prompt("Inserisci un numero da 1 a " + maxBombe));
  } while ( (isNaN(numeriSceltiUtente)) || (numeriSceltiUtente > maxBombe) || (numeriSceltiUtente < 1) );


  // 6. Controllo se l'utente ha inserito lo stesso numero più volte
  if (trovaInArray(scelteUtente, numeriSceltiUtente) ) {

    var x = 0;
    do {
      numeriSceltiUtente = parseInt(prompt(" Questo numero l'hai già inserito!!! Inserisci un numero diverso"));
      x++;
    } while ( (isNaN(numeriSceltiUtente)) || (trovaInArray(scelteUtente, numeriSceltiUtente)) || (numeriSceltiUtente > maxBombe) || (numeriSceltiUtente < 1) );

  // 7. Controllo se il numero inserito dall'utente è anche nell'array dei numeri generati per la cpu
  } else if (trovaInArray(numeriRandomComputer, numeriSceltiUtente)) {
    uguali = true;
  }

  // 8. eseguo il push nell'array dei numeri scelti dall'utente (e quindi validi)
  scelteUtente.push(numeriSceltiUtente);


  // //SECONDO METODO PER LO SVOLGIMENTO DEL PROGRAMMA E PER I CONTROLLI
  // // 5. chiedo all'utente di inserire un numero da 1 al numero scelto in base al livello
  // var numeriSceltiUtente = parseInt(prompt("Inserisci un numero da 1 a " + maxBombe));
  //
  // // 6. controllo che il numero inserito sia un numero e che sia nel range richiesto dal livello
  // if ((isNaN(numeriSceltiUtente)) || (numeriSceltiUtente > maxBombe) || (numeriSceltiUtente < 1)) {
  //   alert("ATTENZIONE!! \n Devi inserire un numero che va da 1 a " + maxBombe);
  //
  // // 7. Controllo se il numero inserito dall'utente è anche nell'array dei numeri generati per la cpu
  // } else if ( trovaInArray(numeriRandomComputer, numeriSceltiUtente)) {
  //   uguali = true;
  //
  // // 8. Controllo se l'utente ha inserito lo stesso numero più volte
  // } else if (trovaInArray(scelteUtente, numeriSceltiUtente)) {
  //   alert("ATTENZIONE!! \n Hai già digitato questo numero!");
  //
  // } else {
  //
  // // 9. eseguo il push nell'array dei numeri scelti dall'utente (e quindi validi)
  //   scelteUtente.push(numeriSceltiUtente);
  // }

  console.log(scelteUtente);
  j++;
}


// console.log(scelteUtente);

// 10. Comunico i risultati all'utente
if (uguali) {
  console.log("HAI PERSO! Il numero di volte che hai inserito un numero consentito è: " + (scelteUtente.length) );
} else {
  console.log("Complimenti! Hai vinto");
}
