console.log('hello world')

// Tipi di base ---------------------------------------------------------

// 'pokemon' // string

// 34 56.6 -23 // number

// true false // boolean

// tipi strani

// NaN = not a number

// undefined

// null

// variabili con let---------------------------------------------

// let pippo = 5;

// console.log(typeof pippo);

// pippo = 'viva il caffé';

// console.log(typeof pippo);

// console.log(pippo);

// variabili con const---------------------------------------------

// const pikachu = 12;

// console.log(pikachu);

// variabili con var (NON USARE)-----------------------------------------------

// var paperino = true;

// console.log(paperino);

// paperino = -123;

// console.log(paperino);

// differenza con let-------------------------------------

// topolino = 5;

// let topolino;

// guarda cosa fa var-------------------------------------------

// topolino = 5;

// var topolino;

// console.log(topolino);

// // altri esempi

// let qui = (5 + 9);
// let quo = (5 * 9);
// let qua = (5 / 9);
// let paperone = 5 ** 3; // elevamento a potenza

// let basettoni = 6 % 2; // modulo ti da il resto delle divisioni, ti fa capire se un numero è pari o dispari

// console.log(qui);
// console.log(quo);
// console.log(qua);
// console.log(paperone);
// console.log(basettoni);

// let ilNumeroPiuPiccolo = -Infinity;
// let ilNumeroPiuGrande = +Infinity;

// const paperoga = Math.sqrt(16);

// console.log(paperoga);

// const crashBandicoot = 'pippo' / 3;
// console.log(crashBandicoot);

// Boolean ------------------------------------------------------------------------------------------------------------

// const etabeta = true;

// console.log(etabeta);

// // !(not) !true => false;
//  console.log(!etabeta)

// // && (and)  true && true => true;
// // && (and)  true && false => false;
// // && (and)  false && true => false;
// // && (and)  false && false => false;

// const squirtle = false;
// console.log(etabeta && !squirtle)

// // || (or) true || true => true
// // || (or) true || false => true
// // || (or) false || true => true
// // || (or) false || false => false

// console.log(etabeta || squirtle);
// console.log(!etabeta || squirtle);

// console.log(etabeta || squirtle) && etabeta;

// String ----------------------------------------------------------------------

// const orazio = 'io adoro javascript';
// console.log(orazio[0]);
// console.log(orazio[9]);

// const clarabella = 'perchè non sono sano di mente'
// console.log(orazio + clarabella);
// console.log(orazio + ' ' + clarabella);

// const aladdin = 27;
// console.log(orazio + aladdin);

// console.log(clarabella.length)
// console.log(clarabella.toUpperCase())


// // undefined and null------------------------------------------------------------------

// const macchiaNera = 5;

// let paperinik;
// console.log(paperinik); // undefined

// paperinik = 12; 
// console.log(paperinik);

// paperinik = undefined; // noooooooooo
// console.log(paperinik);

// paperinik = null;
// console.log(paperinik);

// operatori di confronto-----------------------------------------------------------------------

// const nonnaPapera = 12;

// const ciccio = 24;

// const joseCarioca = '12';

// // maggiore >
// // maggiore uguale >=

// console.log(ciccio > nonnaPapera)

// // minore <
// // minore uguale <=

// console.log(ciccio < nonnaPapera)

// // !== (diverso)

// console.log(ciccio !== nonnaPapera)

// // == (uguale con cast)
// // === (uguale stretto)

// console.log(nonnaPapera == joseCarioca); // non usarlo maiiiiiiiiiiiiiiiii
// console.log(nonnaPapera === joseCarioca);

// corto circuito operatori---------------------------------------------------------------------

// let biancaNeve = 'spaghetti';
// let ariel = 'ciao';
// let cenerentola = biancaNeve || ariel;
// console.log(cenerentola);

// alert e prompt-------------------------------------------------------------------------------

// alert('ciao a tutti');

// const elsa = prompt('come ti chiami?');

// console.log(elsa)

// if else control flow-------------------------------------------------------------------------

// const mulan = prompt('dimmi un numero');
// if ((mulan % 2) === 0) {
//     alert('hai inserito un numero pari')
// }    else {
//     alert('hai inserito un numero dispari')
// }

// console.log('fine del programma')

// const jasmine = prompt('inserisci un numero')

// const isJasmineDivisibleBy3 = jasmine % 3 === 0;

// const isJasmineDivisibleBy5 = jasmine % 5 === 0;

// if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {
//     alert('FIZBUZZ');
// } else if (isJasmineDivisibleBy3) {
//     alert('FIZZ');
// } else if (isJasmineDivisibleBy5) {
//     alert('BUZZ');
// } else {
//     alert(jasmine);
// }

// switch control flow -----------------------------------------------------------------------------

const rapunzel = prompt('inserisci FIZZ, BUZZ o FIZZBUZZ')

switch (rapunzel) {
    case 'FIZZ':
        alert('vuoi un numero divisibile per tre')
        break;
    case 'BUZZ':
        alert('vuoi un numero divisibile per cinque')
        break;
    case 'FIZZBUZZ':
        alert('vuoi un numero divisibile per tre e per cinque')
        break;
    default:
        alert('hai sbagliato ad inserire la parola')
        break;
}