// esercizio 3 ------------------------------------------------------------------------------------

// definire una funzione 'min' che dati due numeri
// restituisce il minore

function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

const pikachu = min(9,7);
console.log(pikachu)

// La funzione min prende in input due parametri, num1 e num2, che rappresentano i due numeri da confrontare.Utilizza un'istruzione if 
// per confrontare i due numeri. Se num1 è minore di num2, la funzione restituisce num1, altrimenti restituisce num2.
// Ad esempio, se chiamiamo la funzione min(3, 7), il valore restituito sarà 3 perché 3 è il numero minore tra i due.
// Se chiamiamo la funzione min(9, 2), il valore restituito sarà 2 perché 2 è il numero minore tra i due.
// In sostanza, la funzione confronta i due numeri e restituisce quello più piccolo tra i due.

// Certamente! Ecco una spiegazione passo passo su come ho convertito la funzione in lambda function:

// 1. Iniziamo dalla definizione originale della funzione:
// ```javascript
// function min(num1, num2) {
//   if (num1 < num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// ```

// 2. Per trasformare questa funzione in una lambda function, iniziamo rimuovendo la parola chiave 'function':
// ```javascript
// const min = (num1, num2) => {
//   if (num1 < num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };
// ```

// 3. Successivamente, convertiamo l'istruzione 'if' in un'operazione ternaria, che è una forma compatta di un'istruzione 'if-else'. L'operatore ternario ha la seguente sintassi: `(condizione) ? (valore se vero) : (valore se falso)`. Applichiamo questa trasformazione all'interno della lambda function:
// ```javascript
// const min = (num1, num2) => (num1 < num2) ? num1 : num2;
// ```

// 4. Infine, dato che la lambda function ha un'unica istruzione di 'return', possiamo omettere le parentesi graffe e la parola chiave 'return' per rendere la sintassi ancora più compatta:
// ```javascript
// const min = (num1, num2) => (num1 < num2) ? num1 : num2;
// ```

// Ora abbiamo la funzione 'min' convertita in una lambda function. È importante notare che le lambda function sono solo una sintassi più concisa per definire funzioni e il comportamento della funzione rimane invariato.