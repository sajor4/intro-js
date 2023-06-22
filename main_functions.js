
// function square( specialNumber ) {
//    const result = specialNumber * specialNumber;
//    return result; 
// }

// const pippo = square(16)


// console.log(pippo);



// function logUpperCase ( stringToLog ) {
//     const uppercaseString = stringToLog.toUpperCase();
//     console.log(uppercaseString);
// }

// logUpperCase('mi piace il calcio')


// function gentleAlarm() {
//     alert('ciao caro amico, come stai??')
// }


// gentleAlarm()

// function logMultipleTimes(stringToLog, times) {
//     for (let i = 0; i < times; i++){
//         console.log(stringToLog)
//     }
// }

// logMultipleTimes('pizza', 100)

// function pariDispari(number) {
//     if (number % 2 === 0){
//         return true;
//     }  else {
//         return false;
//     }
// }

// const pikachu = pariDispari(27)
// console.log(pikachu)

// SINTASSI ALTERNATIVE------------------------------------------------------------------------------------------

// function square(number) {
//     // const result = number * number;
//     // return result;
//     return number * number;
// }

// console.log(square(3));

// // anonymous function 

// const square2 = function(number) {
//     const result = number * number;
//     return result;
// }

// console.log(square2(10)) //


// // lambda function
// const square3 = (number) => {
//     const result = number * number;
//     return result;
// }

// console.log(square3(2)) //4

// const square4 = number => number * number;

// const pow = (base, exponent) => base ** exponent;

// console.log(square4(8)); // 64
// console.log(pow(2,10)); // 1024

// PARAMETRI -----------------------------------------------------------------------------------

// function logParameters(parameter1, parameter2) {
//     console.log('parametro 1',parameter1);
//     console.log('parametro 2',parameter2);
// }

// logParameters ('pippo',5);

// logParameters(27);

// logParameters();

// function pow(base, exponent) {

//     if (base === undefined) {
//         return "che cavolo fai??"
//     }
//     if (exponent !== undefined) {
//         const result = base ** exponent;
//         return result;
//     } else {
//         const result2 = base ** 2;
//         return result2;
//     }
// }

// const pippo = pow(4,4);
// console.log(pippo);

// const pikachu = pow(4);
// console.log(pikachu);

// const paperino = pow()
// console.log(paperino);

// VALORI DI DEFAULT --------------------------------------------------------------------------------

// function pow(base, exponent = 2) {
//     const result = base ** exponent;
//     return result;
// }

// console.log(pow(5,3)); // 125
// console.log(pow(5)) //25

// const startingString = '25'

// console.log(startingString * 2);

// const parse = parseInt(startingString, 10);

// console.log(startingString, typeof startingString)
// console.log(parse, typeof parse)

// esercizio 1----------------------------------------------------------------------------------------

// definire una funzione 'pow' che non faccia uso dell'operatore '**'
// ne della libreria Math

function pow(base, exponent) {
    
}

// esercizio 2 ---------------------------------------------------------------------------------------

// definire una funzione 'correctCase' che prende in input una stringa e la restituisce
// trasformando la prima lettera in maiuscolo

// ' la casa blu' => 'La casa blu'

function correctCase() {
    
}

// esercizio 3 ------------------------------------------------------------------------------------

// definire una funzione 'min' che dati due numeri
// restituisce il minore

// (4,2) => 2

// esercizio 4 ------------------------------------------------------------------------------------

// definire una funzione 'clamp' che prende come parametri tre numeri:
// valore, massimo e minimo.
// Se valore è minore di minimo, restituisce minimo
// se valore è maggiore di massimo, restituisce massimo
// altrimenti restituisce valore

// esercizio 5 ------------------------------------------------------------------------------------

// definire una funzione chessboard che prende come parametro
// size e stampa la scacchiera

// esercizio 6 -------------------------------------------------------------------------------------------

// definire funzione 'ellipse' che prende come parametro una stringa
// se la  stringa è minore di 20 caratteri la ritorna non modificata
// altrimenti la taglia a 20 caratteri e aggiunge 3 puntini

// esercizio 7 -------------------------------------------------------------------------------------------

// definire una funzione reverseString che data una stringa la restituisce al contrario

// ex 'casa rosa' => 'asor asac'

// esercizio 8 -------------------------------------------------------------------------------------------

// scrivere tutti gli esercizi in lamba