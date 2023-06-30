// ESERCIZIO1------------------------------------------------
// scrivere una funzione che dati un array di numeri 
// li eleva al quadrato e rimuove gli oggetti negativi

const testArray = [2, -12, 0, 27, 4, -3, 12, 1, -1]

function squareAllAndRemoveNegatives(arr) {
    const onlyPositiveArray = arr.filter(el => el >= 0) //filtro numeri negativi dall'array
    console.log("🚀 ~ file: main-examples.js:9 ~ squareAllAndRemoveNegatives ~ onlyPositiveArray:", onlyPositiveArray)
    //console log di onlypositivearray, quindi stampa l'array eliminando tutti i negativi (ctrl+Alt+L)
    const squaredArray = onlyPositiveArray.map(el => el ** 2); // elevo al quadrato gli elementi dell'array rimasti (solo positivi)

    return squaredArray;
}

console.log(squareAllAndRemoveNegatives(testArray));


// ESERCIZIO1v2------------------------------------------------

function squareAllAndRemoveNegatives2(arr) {
    const newArray = arr.filter(el => el >= 0).map(el => el ** 2);
    //  si sono concatenate due funzioni, il primo filtra e dal nuovo array che viene creato si effettua un map elevando tutto a 2
    return newArray;
}

console.log(squareAllAndRemoveNegatives2(testArray));

// ESERCIZIO1v3------------------------------------------------

function squareAllAndRemoveNegatives3(arr) {
    // volendo si può fare il return immediatamente 
    return newArray = arr.filter(el => el >= 0).map(el => el ** 2);
}

console.log(squareAllAndRemoveNegatives3(testArray));

// ESERCIZIO1v4------------------------------------------------

function squareAllAndRemoveNegatives4(arr) {

    const accumulator = [];

    for (const number of arr) { // qui "number" è l'element dell'array "arr", è l'equivalente del for classico

        if (number >= 0) {
            const newNumber = number ** 2;
            accumulator.push(newNumber);
        }
    }
    return accumulator;
}
console.log('v4', squareAllAndRemoveNegatives4(testArray));



// ESERCIZIO2------------------------------------------------

// scrivi una funzione che dato un array di numeri
// somma tutti quelli divisibili per 3

function summAllDivisibleBy3(arr) {

    const divisibleBy3 = arr.filter(el => el % 3 === 0); // filtra i numeri divisibili per 3
    const sum = divisibleBy3.reduce((acc, curr) => acc + curr, 0);
    // a quei numeri, fare la reduce dove si va a sommare l'accumulator con il current(che aumenta a ogni ciclo), 
    // 0 è lo starting value dell'accumulator
    return sum;

}

console.log(summAllDivisibleBy3(testArray));

// v2------------------------------------
function summAllDivisibleBy3V2(arr) {

    let accumulator = 0;

    for (const number of arr) {

        if (number % 3 === 0) {
            accumulator = accumulator + number;
        }
    }
    return accumulator;
}

console.log(summAllDivisibleBy3V2(testArray));


// v3---------------------

function summAllDivisibleBy3V3(arr) {

    return arr.reduce((acc, curr) => {
        if (curr % 3 === 0) {
            acc = acc + curr;
        }
        return acc;
    }, 0)
}

console.log(summAllDivisibleBy3V3(testArray));


// ESERCIZIO3------------------------------------------------

// data una stringa di elementi separati da virgole
// convertire gli elementi in numeri,
// togliere quelli che non sono numeri
// e sommare i numeri tra loro

const testString = '2000,10,pippo,345,-234,ciambella,2,,'

function convertToNumberAndSumAll(str) {
    const stringArray = str.split(','); // trasforma la stringa in un array (lo split taglia una stringa nell'elemento indicato e lo trasforma)
    const numbersArray = stringArray.map(el => parseFloat(el)); // parseFloat converte una stringa in numero
    //console.log("🚀 ~ file: main-examples.js:118 ~ convertToNumberAndSumAll ~ numbersArray:", numbersArray)


    function isANumber(element) {
        if (isNaN(element)) {
            return false;
        } else {
            return true;
        }
    }

    const onlyNumbersArray = numbersArray.filter(isANumber);

    const sum = onlyNumbersArray.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(convertToNumberAndSumAll(testString));


// COPIA DA ANDREA l'altra versione

function convertToNumberAndSumAllv2(str) {
    
    const stringArray = str.split(',')
    let accumulator = 0;

    for (const str of stringArray){

        const number = perseFloat(str);
        if (!isNaN(number)) {
            accumulator = accumulator + number;
        }
    }
    return accumulator;
}

console.log(convertToNumberAndSumAllv2(testString));
//reduce

function convertToNumberAndSumAllv3(str){

    return str.split(',').reduce((acc,curr) => {

        const number = parseFloat(curr);

        if (!isNaN(number)) {
            acc = acc + number;
        }

        return acc;
    }
    ,0)
} 

console.log(convertToNumberAndSumAll3(testString));