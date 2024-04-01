const bankSbi = {
    name: "State Bank Of India",
    Location: "Mumbai",
    assets: 450000000000, //in USD
    branches: ["New Delhi","Bangalore","KOlkata","Chennai"]



}
console.log("=============== Step One ================");
console.log(bankSbi);

const bankLocation = {
    street: "Fc Road",
    city: "Pune",
    pincode: "423567"

}
console.log("=============== Step Two ================");
console.log(bankLocation);

console.log("========== Cloning an Two Object using Object.assign()=========");
//console.log(======== Cloning Of object 1 =========);
const cloneObjet1 = Object.assign({}, bankSbi);
console.log(`Cloning Of object 1: `,cloneObjet1); 

//console.log(======== Cloning Of object 2 =========);
const cloneObjet2 = Object.assign({}, bankLocation);
console.log( ` Cloning Of object 2:` ,cloneObjet2); 

console.log("============= Object 3 ==========");
 const rateOfInterest = {
    homeLoanInterest: "7.30% to 10.4% P.A",
    personalLoanInterest: "5.3% to 7.87% P.A",
    duelInterest: "4.2% to 5.9%",
}
console.log(rateOfInterest);

console.log("============ Merging 3 Objects ==========");
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);

console.log("=============== Traverse the Merged Objects =============");
const mergedObject = sbiDetails
for (const key in sbiDetails) {
    console.log(`${key} : ${sbiDetails[key]}`);
     
 }