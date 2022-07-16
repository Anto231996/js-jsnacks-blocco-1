/*
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

let utente = prompt("Inserisci il nome");
const invitati = ["Simone", "Francesco", "Riccardo", "Salvatore", "Felicia", "Stefano", "Antonio", "Manuel", "Matteo", "Alessandro"];


let presente = false;

for (let i = 0; i < invitati.length; i++){
   if(invitati[i] === utente){
      presente = true;
   }
}

if(presente){
   console.log("presente")
} else{
   console.log("non e' presente")
}