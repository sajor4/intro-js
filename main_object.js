console.log('OBJECT')

const studente  = {nome: 'Damiano', anno: 1993, sposato: false}
console.log(studente);

console.log(studente.nome);

console.log(studente['anno']);

studente.indirizzo = 'Taggia';

console.log(studente);

console.log(studente.conto);

console.log(Object.keys(studente));
console.log(Object.values(studente));

for (const key in studente) {    
    const value = studente[key];
    console.log(key, value);
}










const student3 = {
    name: 'Cesare',
    yob: 2003,
    isMarried: false,
    address: 'Genova',
    marks: [8,4,5,7,8,8],
    dog: {
        name: 'Luna',
        yob: 2016,
    }
}


const student4 = {
    name: 'Stefano',
    yob: 1998,
    isMarried: false,
    address: 'Genova',
    marks: [8,4,5,7,8,8],
    dog: null,
}

function calculateAge(student){
 
    const actualYear = new Date().getFullYear();

    const age = actualYear - student.yob;
    return age;
      
}

console.log(calculateAge(student3))
console.log(calculateAge(student4))





function calculateAgeDog(student){

    if (student.dog) {
    const actualYear = new Date().getFullYear();

    const dogAge = (actualYear - student.dog.yob) * 7;
    
    return dogAge;

} else {
    return -1
}
}

console.log(calculateAgeDog(student3))
console.log(calculateAgeDog(student4))

function calculateMean(student) {
    
    let sum = 0;

    for (const mark of student.marks) {
        sum += mark;
    }

    const mean = sum/student.marks.length;
    return mean;
}

console.log(calculateMean(student3))
console.log(calculateMean(student4))