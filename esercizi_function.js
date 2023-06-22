// esercizio 3 ------------------------------------------------------------------------------------

// definire una funzione 'min' che dati due numeri
// restituisce il minore

// function min(num1, num2) {
//     if (num1 < num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// const pikachu = min(9,7);
// console.log(pikachu)

// esercizio 1----------------------------------------------------------------------------------------

// definire una funzione 'pow' che non faccia uso dell'operatore '**'
// ne della libreria Math

// function pow(base, exponent) {

// }

// esercizio 2 ---------------------------------------------------------------------------------------

// definire una funzione 'correctCase' che prende in input una stringa e la restituisce
// trasformando la prima lettera in maiuscolo

// ' la casa blu' => 'La casa blu'

function correctCase(stringToLog) {
    if (stringToLog.length === 0) {
        return str;
    } else {

        const firstLetter = stringToLog[0].toUpperCase();
        const restOfString = stringToLog.slice(1);

        return firstLetter + restOfString;
    }
}

const stringToLog = 'Mi piace il ceviche'
const finalString = correctCase(stringToLog)

console.log(finalString)

// (4,2) => 2

// esercizio 4 ------------------------------------------------------------------------------------

// definire una funzione 'clamp' che prende come parametri tre numeri:
// valore, massimo e minimo.
// Se valore è minore di minimo, restituisce minimo
// se valore è maggiore di massimo, restituisce massimo
// altrimenti restituisce valore

function clamp(valore, min, max) {
    if (valore < min) {
        return min;
    } else if (valore > max) {
        return max;
    } else {
        return valore;
    }

}

const crash = clamp(100, 4, 20)
console.log(crash)

// esercizio 5 ------------------------------------------------------------------------------------

// definire una funzione chessboard che prende come parametro
// size e stampa la scacchiera

// esercizio 6 -------------------------------------------------------------------------------------------

// definire funzione 'ellipse' che prende come parametro una stringa
// se la  stringa è minore di 20 caratteri la ritorna non modificata
// altrimenti la taglia a 20 caratteri e aggiunge 3 puntini

function ellipse(stringOfTwenty) {
    if (stringOfTwenty.length < 20) {
        return stringOfTwenty;
    } else {
        return stringOfTwenty.slice(0, 20) + "...";
    }
}

const mario = ellipse('a me piace molto il ceviche')
console.log(mario)

// esercizio 7 -------------------------------------------------------------------------------------------

// definire una funzione reverseString che data una stringa la restituisce al contrario

function reverseString(string) {
    let reversed = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
}

const inputString = "casa rosa";
const reversedString = reverseString(inputString);

console.log(reversedString);

// ex 'casa rosa' => 'asor asac'

// esercizio 8 -------------------------------------------------------------------------------------------

// scrivere tutti gli esercizi in lamba