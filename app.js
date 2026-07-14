
class Employee
{

    // making basic salary and years of experience private
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
