
// CICLO WHILE---------------------------------------------------------------------------------------

// let indice = 0;

// while (indice < 10) {
    
//     console.log('sono un\'istruzione che deve essere ripetuta')

//     // indice = indice +1;

//     // indice *= 2;

//     indice++;

//     // indice--;
// }

// let indice = 0;

// while (indice < 100) {

//     if (indice % 2 === 0) {
//     console.log(indice);
//     }
//     indice++;
// }

// while (true) {

//     const input = prompt('scrivi una frase o scrivi FINE per terminare')
//     if (input === 'FINE') {
//         break;
//     } else {
//         // console.log(input.length);
//         // alert('la lunghezza della frase inserita è di ' + input.length + ' caratteri')
//         alert(`la lunghezza della frase inserita è ${input.length} caratteri`)

//     }
// }

// CICLO DO WHILE -------------------------------------------------------------------------------------------------------------------

// let indice = 0;

// do {
//     console.log('sono un\'istruzione che deve essere ripetuta');
//     indice++
// } while (indice < 10);

// CICLO FOR-----------------------------------------------------------------------------------------------------------

// let indice = 0;
// while (indice < 10) {
//     console.log('sono un\'istruzione che deve essere ripetuta')
//     indice++;
// }

// for (let index = 0; index < 10; index++) {
//     console.log('sono un\'istruzione che deve essere ripetuta')
// }

// let index = 0;
// for (let index = 0; index < 100; index += 2) {
//     console.log('sono un numero pari e sono: ' + index)
// }


// let index = 0;

// for (let index = 0; index < 100; index++) {
//     if (index < 50) {
//         console.log(index * 2);
//     } else {
//         console.log(index / 2);
//     }
// }

// for (let index = 0; index <= 100; index++) {
//     console.log(index);
// }

// for (let i = 100; i >= 0; i--) {

//     if (i % 2 === 0) {
//     console.log(null)
//     } else {
//         console.log('dispari ' + i)
//     } 
// }

// const paperone = 'stringa di prova';

// for (let i = 0; i < paperone.length; i++) {

//     const char = paperone[i]
//     console.log(char);
// }

// CAPITOLO 2 ES 1-----------------------------------------------

// let startingString = '#'

// for (let i = 0; i < 7; i++) {
//     console.log(startingString);
//     startingString = startingString + '#'
// }

// CAPITOLO 2 ES 2----------------------------------------------

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('FIZZBUZZ');
//     } else if (i % 3 === 0){
//         console.log('FIZZ');
//     } else if (i % 5 === 0){
//         console.log('BUZZ');
//      } else {
//         console.log(i);
//         }
// }

// CICLI NESTATI-----------------------------------------------

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j< 10; j++) {
//     console.log('riga: ' + i + ', colonna: ' + j);
//     }
// }

// ES 3-------------------------------------------

// VERSIONE EASY

// let chessboard = '' 

// for (let i = 0; i < 8; i++) {
    
//     if (i % 2 === 0) {
//         chessboard = chessboard + ' # # # #\n'
//     } else {
//         chessboard = chessboard + '# # # # \n'
//     }
// }

// console.log(chessboard)

// VERSIONE HARD--------------------------------------------------------------------------------------------

const size = 4;

let chessboard = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                chessboard = chessboard + ' ';
            } else {
                chessboard = chessboard + '❤'
            }
        } else {
            if (j % 2 === 0) {
                chessboard = chessboard + '❤'
            } else {
                chessboard = chessboard + ' '
            }
        }
    }
    chessboard = chessboard + '\n'
}

console.log(chessboard);





















