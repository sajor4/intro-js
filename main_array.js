console.log('array')

// ARRAY----------------------------------------------------------------------------------------

// const pippo = ['pane', 'pizza', 'pasta', 'latte', 'biscotti'];  // <----ARRAY PRINCIPALE

// console.log(pippo);

// console.log(pippo.length)

// AGGIUNGERE  E TOGLIERE ELEMENTI----------------------------------------------------------------------

// pippo.push('acqua'); // aggiunge elemento tra parentesi alla fine dell'array
// pippo.unshift('vodka') // aggiunge elemento tra parentesi all'inizio dell'array

// const elementoCoda = pippo.pop(); // toglie ultimo elemento dell'array e lo mette in una variabile
// const elementoTesta = pippo.shift(); // toglie primo elemento dell'array e lo mette in una variabile

// console.log(elementoCoda)
// console.log(elementoTesta)

// console.log(pippo)


// CICLI E ARRAY----------------------------------------------------------------------------------------

// const pluto = [1, 2, 23, -4, 345, 0]

// for (let i = 0; i < pluto.length; i++) {
//     const element = pluto[i];
//     console.log(element)
// }

// for (const element of pluto){
//     console.log(element);
// }

// let i = 0;
// while (i < pluto.length) {
//     const element = pluto[i];
//     console.log(element);
//     i++;
//   }


//   for (let i = pluto.length -1; i >= 0; i--) {
//     const element = pluto[i];
//     console.log(element);    
//   }

  // TRASFORMAZIONI DI ARRAY ----------------------------------------------------------------------------
  // MAPPING

// const paco = [2, 5, -4, 2000, 7, 34]

// function multiplyArrayBy2(selectedArray) {

//     const emptyArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {

//         const element = selectedArray[i]; //seleziona l'elemento successivo ad ogni giro
//         const newElement = element * 2; // ad ogni giro moltiplica l'elemento per 2
//         emptyArray.push(newElement); // aggiunge l'elemento in un nuovo array da stampare
//     }
//     return emptyArray; // rilascia il nuovo array
// }

// console.log(multiplyArrayBy2(paco)); // stampa la funzione con costante 'paco'

// ----------

// function divideBy2ifEven(selectedArray) {
//     const newArray = [] // creazione di una nuova array vuota

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i]; //seleziona l'elemento successivo ad ogni giro

//         let newElement; // crea una variabile vuota per gli elementi nuovi che verranno creati
//         if (element % 2 === 0) { // Se element è divisibile per 2 (pari)
//             newElement = element / 2; // allora dividi per 2
//         } else {                    // altrimenti
//             newElement = element;   // lascia element originale
//         }
//         newArray.push(newElement); // inserisci i nuovi elementi nella nuova array
//     }
//     return newArray; // rilascia il nuovo array
// }

// console.log(divideBy2ifEven(paco)); // stampa la funzione con costante 'paco'

// ----------

// const pikachu = ['pika pika']

// function UpperCaseAll(selectedArray) {
    
//     const newArray = []
//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];

//         const newElement = element.toUpperCase();
//         newArray.push(newElement);
//     }
// return newArray;
// }

// console.log(UpperCaseAll(pikachu));

// FILTERING ---------------------------------------------------------------------------------

// const paperoga = [3, 5, 6, 9, 8, 111, -3, -8]
// const newArray = [];

// function removeEven(selectedArray) {
//     for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];

//     if (element % 2 !==0) {
//         newArray.push(element);
//     }
    
// }
// return newArray;
// }
//     console.log(removeEven(paperoga))

    // ----------------------------------------------------

    // const panda = [3, 5, 6, 9, 8, 111, -3, -8, 0, 20, -10000];

    // function removeNegativeAndMultipleBy2(selectedArray) {

    //     // const arrayWithoutNegative = removeNegative(selectedArray);
    //     // const arrayMultiplied = multiplyBy2(arrayWithoutNegative);
    
    //     // return arrayMultiplied;

    //     return multiplyArrayBy2(removeNegative(selectedArray));
    // }

    // console.log(removeNegativeAndMultipleBy2(panda));

    // ESERCIZI ----------------------------------------------

    const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2]
    const stringArray = ['23', 'PIPPO', 'pLuto', 'la CASA blu', 'osValdo', '', 'porchetta']

   // 1) mapping function che prende in input un array di numeri
//    e restituisce un array con tutti i numeri diminuiti di uno


    const newArray = []
    function removeOneFromAll(selectedArray) {
       for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        const newElement = selectedArray[i] - 1;
        newArray.push(newElement); // inserisci i nuovi elementi nella nuova array
       }
    return newArray;
}
    console.log(removeOneFromAll(numbersArray))

    // PRIMO ESERCIZIO GIUSTO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 2) mapping function che prende in input un array di numeri
//    e restituisce un array con i il valore assoluto dei numeri

function absoluteValueOnly(selectedArray) {
    const newArray = []; // creazione di una nuova array vuota


    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
     
        let newElement; // crea una variabile vuota per gli elementi nuovi che verranno creati
        if (element < 0) { // Se element è minore a zero
            newElement = Math.abs(element); // allora restituisci il valore assoluto
        } else {
            newElement = element; // lascia element originale
        }
        newArray.push(newElement); // inserisci i nuovi elementi nella nuova array
    }
    return newArray; // rilascia il nuovo array
}

console.log(absoluteValueOnly(numbersArray))

// SECONDO ESERCIZIO GIUSTO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 3) mapping function che prende in input un array di numeri
//    e restituisce un array di strighe con scritto 'PARI' se il numero
//    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari

function evenOrOdd(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        let newElement; // crea una variabile vuota per gli elementi nuovi che verranno creati
        if (element % 2 === 0) { // Se element è pari
            newElement = ('PARI') // stampa PARI
        } else { // Altrimenti
            newElement = ('DISPARI') // stampa DISPARI
        }
        newArray.push(newElement); // inserisci i nuovi elementi nella nuova array
    }
    return newArray;

}

console.log(evenOrOdd(numbersArray))

// TERZO ESERCIZIO GIUSTOOOOOOOOOO----------

// 4) mapping function che prende in input un array di stringhe
//    e le restituisce tutte minuscole

function allLowerCase(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];

        const newElement = element.toLowerCase();

        // let newElement;
        // if (element === element.toUpperCase()) {
        //     newElement = element.toLowerCase();
        // } else {
        //     newElement = element.toLowerCase();
        // }

        newArray.push(newElement);
    }
    return newArray;
}

console.log(allLowerCase(stringArray))


// 5) mapping function che prende in input un array di strighe
//    e restituisce un array di numeri con le lunghezze delle stringhe

function stringLenght(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        let newElement;
        if (element === undefined) {
            newElement = -1; // nessuna stringa potrà essere negativa
        } else {
            newElement = element.length;
        }

newArray.push(newElement)

    }
return newArray;
}

console.log(stringLenght(stringArray))

// 6) mapping function che prende in input un array di strighe
//    e restituisce le stringhe in formato camelCase

// 7) filter function che prende in input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri

function Only3Chars(selectedArray) {

const newArray = [];

for (let i = 0; i < selectedArray.length; i++) {
    const element = selectedArray[i];

    let newElement;
    if (selectedArray.length < 3) {
        newArray.push(newElement);      
    } 
    
    }
    return newArray;
}

console.log(Only3Chars(stringArray))

// 8) filter function che prende in input un array di strighe
//    e restituisce solo quelle che contengono la lettera 'p'


if (element.toLowerCase().includes('p')) {
    newArray.push(element);
}
// 9) filter function che prende in input un array di numeri
//    e restituisce i positivi divisibili per 3



// 10) fare una copia della home del sito di AXIA FORMAZIONE