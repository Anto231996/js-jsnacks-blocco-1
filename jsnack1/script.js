/*
   L'utente inserisce due numeri in successione, con due prompt.
   Il software stampa il maggiore.
*/

let userFirstNumber = parseInt(prompt('Scegli un numero'))
document.getElementById("first-number").innerHTML = userFirstNumber;
let userSecondNumber = parseInt(prompt('Scegli un secondo numero'))
document.getElementById("second-number").innerHTML = userSecondNumber;


if (userFirstNumber > userSecondNumber) {console.log(userFirstNumber);
   document.getElementById("higher-number").innerHTML = userFirstNumber;
}
else{console.log(userSecondNumber)
   document.getElementById("higher-number").innerHTML = userSecondNumber
}