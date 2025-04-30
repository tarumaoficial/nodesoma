
let readlineSync = require('readline-sync');

let n = 1;
let total =0;

console.log("programa que soma 10 numeros")

let i = 1;
while (n!=0)
{
    n = parseFloat(readlineSync.question(`informe o ${i} numero:` ));
    total = total + n;
    i++;
}

console.log(`Total = ${total}`)