/*
  Chiedi un numero di 7 cifre all'utente
  e calcola la somma di tutte le cifre che compongono il numero. 
*/

const numeroUtente = prompt("Inserisci un numero di 7 cifre");

let sum = 0;

for (let i=0; i<numeroUtente.length ; i++){
sum = sum + parseInt(numeroUtente.charAt(i));

}
console.log(sum)