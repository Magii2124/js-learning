console.log(`======== Nested Object============`);
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address: {
        flatNo: 102,
        floorNumber: 3,
        street: "Bergen road",
        city: "LA",
        state: "ABC"
    }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);

console.log(`City: ${jennyPerson.address.city}`);
jennyPerson.address.state = "XYZ";


console.log(`======== Nested Object============`);
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address: {
        flatNo: 102,
        floorNumber: 3,
        street: "Bergen road",
        city: "LA",
        state: "ABC",
        getAddress: function(){
            const address = ` Flat Number: ${this.flatNo}, Floor Number: ${this.floorNumber}, Street: ${this.street}, City: ${this.city}, State: ${this.state}`;
            return address;
        }
    }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);

console.log(`City: ${jennyPerson.address.city}`);
jennyPerson.address.state = "XYZ";

console.log(`===== Jenny complete address to courier is======`);
const jennyAddress = jennyPerson.address.getAddress();
console.log(jennyAddress);