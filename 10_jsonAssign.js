const jsonString = `
{
  "name": "Aleix Melon",
  "id": "E08245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by": "E0012"
}`;

const obj = JSON.parse(jsonString);

// Log on console role → DEV
console.log("Role:", obj.role[0]);

// Log only last name "Melon"
const fullName = obj.name.split(" ");
console.log("Last Name:", fullName[1]);

// Log only joining year of employee 2019
const joiningDate = obj.doj.split("-");
console.log("Joining Year:", joiningDate[2]);