
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

    // using getters to get yearly salary
    get yearlySal()
    {
        return this.annualSalary();
    }

}

let employee1 = new Employee(001, "Rahul", "Sharma", "Frontend Web Developer", 70000, 5);
console.log(employee1.yearlySal);
console.log(employee1.employeeDetail());
