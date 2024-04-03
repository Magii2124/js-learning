console.log("*********** STEP 1 ***********");

class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }

    logDetails() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Mileage: ${this.mileage} miles`);
    }
}

// Example usage:
let car1 = new Vehicle("Toyota", "Camry", 2020, "Silver", 50000);
car1.logDetails();
let car2 = new Vehicle("Mahindra", "scorpio", 2023, "Black",25000);
car2.logDetails();
let car3 = new Vehicle("Bmw", "BMW m4", "2018", "Golden", 5000);
car3.logDetails();
let car4 = new Vehicle("Mercidies", "M50", 2020, "Purple", 40000);
car4.logDetails();
let car5 = new Vehicle("Swift", "Dezire", 2017, "White", 20000);
car5.logDetails();




console.log("==================== Create and Treversing array ====================");
// Add objects to an array
const arrayOfVehicles = [car1,car2,car3,car4,car5];
for ( const element of arrayOfVehicles){
       element.logDetails();
}




console.log("****************************** STEP 2 ******************************");
 class College {
    name
    city
    grade
    departments
    constructor(name,city,grade,departments){
        this.name = name;
        this.city = city;
        this.grade = grade;
        this.departments = departments;
    }
    display(){
        console.log(` College Details ==> Name:${this.name} , City:${this.city} , Grade:${this.grade} , Departments:${this.departments}`);

    }
 }
 const ftc = new College("KBP","Pandharpur","C", 7);
 ftc.display();
 const sveri = new College("FABTECH","Sangola","A",5);
 sveri.display();
 const kit = new College("SBDM","Atpadi", "A+" , 9);
 kit.display();
 const coep = new College("COEP","Mumbai","A+",18);
 coep.display();


