


// // SCOPE ----------------------------------------------------------------------------------

// // global scope è  dichiarato fuori da qualsiasi graffa

// // const pippo = 10; // scope globale

// // if(pippo < 20){

// //     pippo = pippo + 3;
// //     let pluto = 4;
// // }

// // pluto = pluto +1;


// // SCOPe NESTATI
// function createPairArray(max) {
//     const tempArray = [];



//     for (let i = 0; i <= max; i++) {
        
//         if (i % 2 === 0) {
//         tempArray.push(i)    
//         }
//     }
//     return tempArray;
// }

// console.log("Funzione createPairArray", createPairArray(200))


// // FUNZIONE PARAMETRI ARGS --------------------------------------------------

// function mean() {
//     // console.log(arguments)

//     // const sum = v1 + v2 + v3;
//     // const mean = sum / 3;
//     // return mean;

//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         const value = arguments[i];
//         sum += value;
//     }
// const mean = sum/arguments.length;

// return mean;


// }

// console.log(mean(6,7,8))


// function sumAll(...args) {
// let sum = 0;
// for (let i = 0; i < args.length; i++) {
//     const value = args[i];
//     sum = sum + value
// }
// return sum;
// }
// console.log(mean(6,7,8))

// // REDUCE-----------------------------------------------------------------------

// function sumAllArray(arrayToSum) {
    
//     let accumulator = 1;

//     for (let i = 0; i < arrayToSum.length; i++) {
//         const current = arrayToSum[i];

//         // put your code here
//         accumulator = accumulator + current;
//     }
//     return accumulator;
// }

// console.log("sumAllArray", sumAllArray([2,3,4,5]))



// function multiplyAllArray(arrayToMultiply) {
    
//     let accumulator = 1;

//     for (let i = 0; i < arrayToMultiply.length; i++) {
//         const current = arrayToMultiply[i];

//         // put your code here
//         accumulator *= current;
//     }
//     return accumulator;
// }

// console.log("multiplyAllArray", multiplyAllArray([2,3,4,5]))



// function join(arrayToJoin) {
    
//     let accumulator = "";

//     for (let i = 0; i < arrayToJoin.length; i++) {
//         const current = arrayToJoin[i];

//         // put your code here
//         accumulator += current;
//     }
//     return accumulator;
// }

// console.log("arrayToJoin", join(["qui", "quo", "qua"]))





// function sumEvenOrOdd(arrayToReduce) {
    
//     let accumulator = {sumOfEven : 0, sumOfOdd: 0};

//     for (let i = 0; i < arrayToReduce.length; i++) {
//         const current = arrayToReduce[i];


//     if (current % 2 === 0) {
//         accumulator.sumOfEven += current;
//     } else {
//         accumulator.sumOfOdd += current;
//     }
// } 
//     return accumulator;
// }

// console.log("sumEvenOrOdd", sumEvenOrOdd([1, 2, 3, 4, 5, 6]))









// RICORSIONE -----------------------------------------------------------------------------------------


// FATTORIALE (!)

// 5! = 5 * 4 * 3 * 2 * 1 = 120!

// DEFINIZIONE
// 1) 1! = 1;
// 2) n! = n * (n-1)!

// 5! = 5 * 4!
//          4 * 3!
//              3! * 2!
//                   2 * 1!
//                       1


// function fattoriale(n){
//     if (n === 1){
//     //1)
//     return 1;
// }  else {
//     //2)
//     return n * fattoriale(n-1);
// }
// }
// console.log(fattoriale(5))


// function min(v1, v2) {
//     let minimun;
//     if (v1 > v2) {
//         minimun = v2;
//     } else {
//         minimun = v1;
//     }
//     return minimun
// }



// function isEven(n) {

//     if(n === 0){
//         return true;
//     } else if (n === 1){
//         return false;
//     } else {
//         return isEven(n - 2)
//     }
// }
// console.log('isEven', isEven(5));
// console.log('isEven', isEven(20));
// console.log('isEven', isEven(89));




function isogram(str) {
    
    
}




























