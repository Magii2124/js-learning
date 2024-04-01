
console.log("******************** Creating Obj with 4 Properties ********************");
var bankSbi = {
    name: "State Bank Of India",
    Location: "Mumbai",
    assets: 450000000000, //in USD
    branches: ["New Delhi","Bangalore","KOlkata","Chennai"]

};
console.log(bankSbi);

console.log("******** BankLocation Using Literels with Properties ********");
var bankLocation = {
    street: "Fc Road",
    city: "Pune",
    pincode: "423567"
}
console.log(bankLocation);

console.log("******* Cloning 2 object using Object.assign() *******");

console.log("======= Clone object 1 =======");
const cloneObject1 = Object.assign({},bankSbi);
console.log(`Cloning Of Object 1:`,CloneObject1);

console.log("====== Cloning Of Object 2 ======");
const cloneObject2 = Object.assign({},bankLocation);
console.log(`Cloning Of object 2:`,cloneObject2);


 console.log("******** rateOfIntrest with Properties ********");

 var rateOfIntrest = {
    homeLoneInterest: '7.5% to 9.3% P.A',
    personalLoneInterest: '13.2% to 15.9% P.A',
    duaInterest: '4.2% to 6.8% P.A'
 }

 console.log(rateOfIntrest);


 console.log("********* Merge Step 1, Step 2 and Step 4 *********");
 const banksbi = {

 }