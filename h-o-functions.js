// HIGHER ORDER FUNCTIONS---------------------------------------
// MAP

// function map(array, transFunc){

//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         const newElement = transFunc(element);

//         tempArray.push(newElement)
//     }
//         return tempArray;
// }

// function addOne(element) {
//     const newElement = element + 1;
//     return newElement;
// }

// console.log(map([20, 8, 44], addOne));



// const testArray = [12, 34, 5, 0, -23]

// function multiplyBy2(element) {
//     const newElement = element * 2;
//     return newElement;
// }

// console.log(testArray.map(multiplyBy2))
// console.log(testArray.map((element) => element * 2))


// const testArray2 = ['CIAO', 'qui', 'sticazzi', 'il sole splendente']

// console.log(testArray2.map((element) => element.length))

// function multiplyByIndex(element, i, originalArray) {
//     newElement = element * i;
//     return newElement;
// }

// console.log(testArray.map(multiplyByIndex))


// FILTER ----------------------------------------------------------------------------

// function removeNegative(array) {
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (element >= 0) {
//             tempArray.push(element);
//         }
//     }
//         return tempArray;
// }

// console.log(removeNegative([0,3,5,-2,-5,8]))

// function filter(array, filterFunc){

//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (filterFunc(element)) {
//             tempArray.push(element);
//         }
//     }
//         return tempArray;
// }

// function isPositive(element){
//     if (element >= 0){
//     return true;
// } else {
//     return false;
// }
// }

// console.log(filter([0, 3, 5, -2, -5, 8], isPositive));

// const testArray3 = [0, 3, 5, -2, -5, 8]

// function isEven(element){
//     if(element % 2 === 0){
//         return true
//     } else{
//         return false
//     }
// } 

// console.log(testArray3.filter(isEven)); // stampare solo elementi con un numero pari
// console.log(testArray3.filter((element, index) => index % 2 === 0)); // stampare solo elementi con index pari

// REDUCE ----------------------------------------------------------------------


// function sumArray(array){

//     let accumulator = 0;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = accumulator + current

//     }
//         return accumulator;
// }

// function reduce(array, reduceFunc, startingValue) {
    
//     let accumulator = startingValue;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = reduceFunc(accumulator, current);
//     }
//     return accumulator;
// }

// function sum(accumulator,current){
//     const newAccumulator = accumulator + current;
//     return newAccumulator;
// }

// console.log(reduce([23,4,4,6,3],sum,0))

// testArray4 = [4,3,2,1];

// function multiply(acc,curr) {
//     const newAcc = acc * curr;
//     return newAcc;
// }

// console.log(testArray4.reduce(multiply, 1));
// console.log(testArray4.reduce((acc,curr) => acc * curr, 1));


// function sumOnlyOddIndex(acc, curr, index, originalArray){

//     if (index % 2 !== 0){
//         const newAcc = acc + curr;
//         return newAcc;
//     } else {
//         return acc;
//     }
// }

// console.log(testArray4.reduce(sumOnlyOddIndex, 0))


// function sumAll(array){

//     let accumulator = array[0];

//     for (let i = 1; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = accumulator + current;

//     }
//         return accumulator;
// }

// console.log(sumAll([2,3,4]));



// ESERCIZI

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2]
// const stringArray = ['23', 'PIPPO', 'pLuto', 'la CASA blu', 'Osvaldo', '', 'porchetta']

// 1) mapping function che prende in input un array di numeri
//    e restituisce un array con tutti i numeri diminuiti di uno




// 2) mapping function che prende in input un array di numeri
//    e restituisce un array con i il valore assoluto dei numeri




// 3) mapping function che prende in input un array di numeri
//    e restituisce un array di strighe con scritto 'PARI' se il numero
//    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari

// function toPariOrDispari(element){
//     if (element % 2 === 0) {
//         return 'pari';
//     }
//     return 'dispari';
// }



// 4) mapping function che prende in input un array di stringhe
//    e le restituisce tutte minuscole



// 5) mapping function che prende in input un array di strighe
//    e restituisce un array di numeri con le lunghezze delle stringhe



// 7) filter function che prende in input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri



// 8) filter function che prende in input un array di strighe
//    e restituisce solo quelle che contengono la lettera 'p'


// 9) filter function che prende in input un array di numeri
//    e restituisce i positivi divisibili per 3

// 10) reduce function che dato un array di stringhe somma tutte le lunghezze

// function sumLenght(acc, currret) {
//     return acc += currret.lenght;
// }

// console.log(stringArray.reduce(sumLenght, 0))
// console.log(stringArray.reduce((a,c) => a + c.lenght , 0))


// //11) reduce function che dati un array di stringhe somma le lunghezze delle ultime 3

// function sumLenghtIfLast3(acc, curr, index, originalArray) {
//     if (index >= originalArray.lenght -3) {
//         return acc + curr.lenght;
//     }
//     return acc;
// }

// SORTING -------------------------------------------------------------------------------------------------

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2]
// const stringArray = ['23', 'PIPPO', 'pLuto', 'la CASA blu', 'Osvaldo', '', 'porchetta']

// stringArray.sort();
// console.log(stringArray);

// function compareAscendingNumbers(n1, n2) {
//     if (n1 < n2){
//         return -1;
//     } else if (n1 > n2) {
//         return +1;
//     } else {
//         return 0;
//     }
// }

// function compareDescendingNumbers(n1, n2) {
//     if (n1 < n2){
//         return +1;
//     } else if (n1 > n2) {
//         return -1;
//     } else {
//         return 0;
//     }
// }



// numbersArray.sort(compareAscendingNumbers)

// console.log(numbersArray)

// function compareDescendingNumbers2(n1, n2) {
//     return n1 - n2;
// }

// numbersArray.sort((n1, n2) => n1 - n2)

// console.log(numbersArray);


// stringArray.sort((s1, s2) => s1.localeCompare(s2))
// console.log(stringArray)


// const student1 = {
//     name: 'Manuela',
//     yob: 1988,
//     marks: [10,8,7,5]
// }

// const student2 = {
//     name: 'Damiano',
//     yob: 1993,
//     marks: [9,8,7,10]
// }

// const student3 = {
//     name: 'Cesare',
//     yob: 2003,
//     marks: [7,8,7,6]
// }

// const student4 = {
//     name: 'Isabella',
//     yob: 1996,
//     marks: [10,8,9,9]
// }

// const student5 = {
//     name: 'Stefania',
//     yob: 1996,
//     marks: [9,4,7,6]
// }

// const student6 = {
//     name: 'Ares',
//     yob: 1993,
//     marks: [10,10,10,10]
// }


// const students = [student1,student2,student3,student4,student5,student6];

// function compareStudentsByNameAscending(s1, s2) {
// return s1.name.localeCompare(s2.name);
// }

// function compareStudentsByYobDescending(s1,s2) {
//     return s2.yob -s1.yob;
// }


// students.sort(compareStudentsByNameAscending)

// console.log(students)

// function compareStudentsByYobDescending(s1,s2) {
//     return s2.yob -s1.yob;
// }

// students.sort(compareStudentsByYobDescending);
// console.log(students)

// function compareStudentsByNameAndYear(s1,s2) {
//     if (s1.name.localeCompare(s2.name) === 0){
//         return s2.yob - s1.yob;
//     } else {
//         return s1.name.localeCompare(s2.name);
//     }  
// }

// students.sort(compareStudentsByNameAndYear);
// console.log(students)


// function calculateMean(arrayOfNumbers) {
//     const sumOfArray = arrayOfNumbers.reduce((a, c) => a + c);
//     const mean = sumOfArray / arrayOfNumbers.lenght;
//     return mean;
// }

// function compareStudentsByMeanOfMarks(s1,s2){
//     return calculateMean(s1.marks) - calculateMean(s2.marks)
// }

// students.sort(compareStudentsByMeanOfMarks);
// console.log(students)

//FIND-------------------------------------------------------------------

const stringArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta']

function isGreaterThan3Chars(element){
    if (element.length > 3){
    return true;
    }
    return false;
}

console.log(stringArray.find(isGreaterThan3Chars)); // find restituisce una stringa, non un array

//SOME -----------------------------------------------------------------

function isGreaterThan30Chars(element){
    if (element.length > 30){
        return true;
        }
        return false;

}

console.log(stringArray.some(isGreaterThan30Chars));