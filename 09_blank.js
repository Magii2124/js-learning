let professor = {
    name: "Jenny",
    age: 35,
    subject: "Operating System",
    city: "XYZ",
    payment: "1lakh",
       degrees:{
           engineering: "CSC",
           PHD: "Adv Computing",
           doctorate: "B.A.M.S",
           lawyers: "Tax lawyer",
          
       },
       certificates :  ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],
     

       }
console.log(============== Add minimum 5 properties of professor ===========);
console.log(professor);


console.log(============ Include nested object "Degrees" ============);
console.log(professor.degrees);

console.log(============= Add one Array "Certificates" ============);
console.log(professor.certificates);

console.log(=========== To add New Property ===========);
professor.totalExperience = "14 years";
console.log(Total experience of professor is:${professor.totalExperience} );

console.log(============ Modify any Existing Property ==============);
professor.city = "ABC";
console.log(professor);

console.log(=========== ADD new certificate ============);
professor.certificates.splice(2,0,"Oracle Certified");
console.log(professor.certificates);

console.log(============= Last Element of the array ===============);
const lastElement = professor.certificates[professor.certificates.length-1];
console.log(lastElement);

console.log(============= Complete Object ==============);
console.log(professor);

console.log(=========== Traversing Array =============);
for (const element of professor.certificates) {
   console.log(element);
    
}