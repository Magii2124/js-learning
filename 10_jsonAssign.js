const employeeJson = {
  "name": "Aleix Melon",
  "id": "E00245",
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
};

// Convert JSON to object
const employee = JSON.parse(JSON.stringify(employeeJson));

// Log role
console.log("Role:", employee.role[0]);

// Log last name
const fullNameArray = employee.name.split(" ");
const lastName = fullNameArray[fullNameArray.length - 1];
console.log("Last Name:", lastName);

// Log joining year
const joiningYear = new Date(employee.doj).getFullYear();
console.log("Joining Year:", joiningYear);
