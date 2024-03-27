



let person = {
    name: "Abhishek",
    city: "Sangola",
    exprience: 10,
    salary: `2 lac`,
    mobileNumber: `xxxxxxxx29`,
    degrees: {
        Engineering:"CSE",
        PHD:"Adv Computing",
        Master:"BTECH"

    },
    certificates: ["Hacker Rank Participarion","Certificate in IFE course","Certificate in Adv Programing"],

}

console.log(`== STEP ONE ==`);

console.log(`*********** Add minimum 5 properties ************`);
console.log(person);



console.log(`==STEP TWO ==`);
console.log(`*********** include nested object 'degrees' ******************`);
console.log(person.degrees);

console.log(`== STEP Three ==`);
console.log(`*********** Add one Array "certificates" ******************`);
console.log(person.certificates);

console.log(`== STEP FOUR ==`);
console.log(`*********** To add new Property ******************`);
person.totalExprience = "13 years";
console.log('Total exprience of person is : ${person.totalExprience}');

console.log(`== STEP FIVE ==`);
console.log(`************** Modify any Existing Property`);
person.salary = "3 lac";
console.log(person);

console.log(`== STEP SIX ==`);
console.log(`************** Add new Certificate *************`);
person.certificates.splice ( 2,0,"Oracle Certified");
console.log(person.certificates);

console.log(`== STEP SEVEN ==`);
console.log(`************** last element of the array *************`);
const lastElement =
person.certificates[person.certificates.length-1];
console.log(lastElement);


console.log(`== STEP EIGHT ==`);
console.log(`************** Complete Object *************`);
console.log(person);

console.log(`== STEP NINE ==`);
console.log(`************** Traversing Array *************`);
for (const element of person.certificates){
    console.log(element);
}
    









