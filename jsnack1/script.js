/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

let userFirstNumber = parseInt(prompt('Scegli un numero'))
let userSecondNumber = parseInt(prompt('Scegli un secondo numero'))

if (userFirstNumber > userSecondNumber) {console.log(userFirstNumber)} 
else{console.log(userSecondNumber)}