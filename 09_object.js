

let person = {
    name: "Abhishek",
    city: "Sangola",
    exprience: 10
}
console.log(person);
console.table(person);

console.log('Type of person is: ${Type of person}');

console.log(`****** Accessing object properties ******`);

let personCity = person ["city"];
console.log(`Person city is: ${personCity}`);

let personExp = person.exprience
console.log(`Person city is: ${personExp}`);



console.log(`******* Delete properties from an object *******`);
delete person.exprience;
console.log(person);

console.log(`****** Creating an empty object ****`);
let address={
    
}

