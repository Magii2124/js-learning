// Employee class definition
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

// Employee instances
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

// Array of employees
let arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];

// 1. Sort the 'arrayEmployees' in descending order of employee IDs
arrayEmployees.sort((a, b) => b.emp_id - a.emp_id);
console.log('Sorted by descending IDs:');
arrayEmployees.forEach(emp => console.log(emp.emp_id, emp.emp_name, emp.emp_dept));

// 2. Sort the 'arrayEmployees' in ascending order of employee department
// If departments are equal, sort by ID
arrayEmployees.sort((a, b) => {
    if (a.emp_dept === b.emp_dept) {
        return a.emp_id - b.emp_id;
    }
    return a.emp_dept.localeCompare(b.emp_dept);
});
console.log('Sorted by ascending department:');
arrayEmployees.forEach(emp => console.log(emp.emp_id, emp.emp_dept, emp.emp_company));

// 3. Sort the employee array in descending order of employee salary
arrayEmployees.sort((a, b) => b.emp_salary - a.emp_salary);
console.log('Sorted by descending salaries:');
arrayEmployees.forEach(emp => console.log(emp.emp_name, emp.emp_salary, emp.emp_company));