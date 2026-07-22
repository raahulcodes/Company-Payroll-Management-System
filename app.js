
// defining an empty array for storing every employee in the form of objects
let employees = [];

class Employee
{

    // making basic salary and years of experience private fields
    #salary;
    #yrexperience;

    // an employee using constructor(special function) to allocate the fields to itself
    constructor(empid, fname, lname, dept, salary, yrexperience)
    {
        this.empid = empid;
        this.fname = fname;
        this.lname = lname;
        this.dept = dept;
        this.#salary = salary;
        this.#yrexperience = yrexperience;
    }

    // employee details method
    employeeDetail()
    {
        return "Employee Id: " + this.empid + " . Employee Name: " + this.fname + " " + this.lname + " . Employee Department: " + this.dept + " . Employee Salary: " + this.#salary + " . Employee Years of Experience: " + this.#yrexperience;
    }

    // monthly salary
    monthlySalary()
    {
        return this.#salary;
    }

    // annual salary
    annualSalary()
    {
        return (12*this.#salary);
    }

    // calculating bonus
    bonus()
    {
        // creating bonuses for specific departments
        if(this.dept == "HR" || this.dept == "IT")
        {
            return "Salary After 10% Bonus: " + (this.#salary + (this.#salary*0.1));
        }
        return "No Bonus for this dept. " + this.#salary;
    }

    // calculating tax
    tax()
    {
        return "Tax on " + this.#salary + " = " + (0.08*this.#salary);
    }

    // final salary after tax and bonus
    finalSalary()
    {
        return "Final Salary after Tax and Bonus: " + (this.#salary + ((this.#salary*0.1)-(this.#salary*0.08))) + " \n ------------------------------------------------------------------------ ";
    }

    // using getters to get yearly salary, bonus, tax and final salary
    get yearlySal()
    {
        return "Annual Salary: " + this.annualSalary() + " | " + this.bonus() + " | " + this.tax() + " | " + this.finalSalary();
    }

    // getting the experience
    exp()
    {
        return this.#yrexperience;
    }

}

let employee1 = new Employee(1001, "Rahul", "Sharma", "HR", 70000, 5);
let employee2 = new Employee(1002, "Guriqbal", "Singh", "Marketing", 50000, 3);
let employee3 = new Employee(1003, "Umesh", "Singh", "IT", 50000, 2);
let employee4 = new Employee(1004, "Basant", "Thakur", "Finance", 50000, 10);
let employee5 = new Employee(1005, "Subhash", "Sharma", "Sales", 40000, 3);
let employee6 = new Employee(1006, "Anil", "Singh", "Design", 40000, 4);

// Employee1
console.log(employee1.employeeDetail());
console.log(employee1.yearlySal);


// Employee2
console.log(employee2.employeeDetail());
console.log(employee2.yearlySal);


// Employee3
console.log(employee3.employeeDetail());
console.log(employee3.yearlySal);


// Employee4
console.log(employee4.employeeDetail());
console.log(employee4.yearlySal);


// Employee5
console.log(employee5.employeeDetail());
console.log(employee5.yearlySal);


// Employee6
console.log(employee6.employeeDetail());
console.log(employee6.yearlySal);

// pushing the employee1, employee2........... to employees empty array
employees.push(employee1, employee2, employee3, employee4, employee5, employee6);

// displaying all the employees using forEach
console.log("----------------- Active Employees ----------------------")
employees.forEach(e=>
{
    console.log("-------------------");
    console.log("Employee Id: " + e.empid + "\n" +
                "Name: " + e.fname + " " + e.lname + "\n" +
                "Department: " + e.dept + "\n" +
                "Years of Experience: " + e.exp() + "\n" +
                "Anual Salary: " + e.annualSalary() + "\n" +
                "Bonus: " + e.bonus() + "\n" + 
                "Tax: " + e.tax() + "\n" + 
                "Final Salary: " + e.finalSalary() 
    )
    console.log("-------------------");

}
)

// defining a varibale for highest salary and employee name
let highestSalary = 0;
let empName;
let highestExperience = 0;
let totalSalary = 0;

// finding the highest paid employee
employees.forEach(emp=>
{
    if(highestSalary<emp.monthlySalary())
    {
        highestSalary+=emp.monthlySalary();
        empName = emp.fname + " " + emp.lname;
    }
}
);

// printing the highest paid salary and employee name
console.log("Highest Paid Employee: " + empName + " . Highest Paid Salary: " + highestSalary);

// finding the highest experience employee
employees.forEach(emp=>
{
    if(highestExperience<emp.exp())
    {
        highestExperience=emp.exp();
        empName = emp.fname + " " + emp.lname;
    }
}
);

// printing the highest paid salary and employee name
console.log("Most Experienced Employee:: " + empName + " . Highest Experience: " + highestExperience);

// finding totals
employees.forEach(emp=>
{
    totalSalary+=emp.monthlySalary();
}
);

// printing the total no of employees, total expenditure on salary, total average salary
console.log("Total No. of Employees: " + employees.length + 
            "\nTotal Salary: " + totalSalary + 
            "\nAverage Salary: " + (totalSalary/employees.length));


