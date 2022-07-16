/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */

const num = [];
let sum = 0;

for (let i = 0 ; i < 10 ; i++){
    num.push(Math.floor(Math.random() * 100 ) );
    sum = sum + num;
}

console.log(num);