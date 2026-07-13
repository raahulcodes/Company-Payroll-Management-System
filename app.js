
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
        return "Annual Salary: " + this.annualSalary();
    }

    // calculating bonus
    bonus()
    {
        // creating bonuses for specific departments
        if(this.dept == "Frontend Web Developer" || this.dept == "AI Engineer")
        {
            return "Salary After 10% Bonus: " + (this.#salary + (this.#salary*0.1));
        }
        return "No Bonus for this dept. " + this.#salary;
    }

}

let employee1 = new Employee(1001, "Rahul", "Sharma", "Frontend Web Developer", 70000, 5);
let employee2 = new Employee(1002, "Guriqbal", "Singh", "SEO Specialist", 50000, 3);

// Employee1
console.log(employee1.employeeDetail());
console.log(employee1.yearlySal);
console.log(employee1.bonus());

// Employee2
console.log(employee2.employeeDetail());
console.log(employee2.yearlySal);
console.log(employee2.bonus());
