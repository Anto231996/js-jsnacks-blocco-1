/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let firstWord = prompt ('Inserisci una parola')
let secondWord = prompt ('Inserisci una seconda parola')

if (firstWord.length > secondWord.length) {
  console.log("la prima parola e' piu' lunga");
  
} else if (firstWord.length < secondWord.length){
  console.log("la seconda parola e' piu' lunga");
  
} else {
  console.log("le parole sono uguali")
}