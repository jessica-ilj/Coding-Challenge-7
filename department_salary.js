//creating a department structure

const company = {  //stores the departments in the company with different objects
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

//Recursive Function to Calculate Total Salary for a Department
const calculateDepartmentSalary = (department)=> { 
    let departmentSalary = 0;
    
    for (let employee of department.employees){  //accepts a department object and recursively calculates the total salary for that department, including the salaries of all employees and their subordinates.
        departmentSalary += employee.salary // adding each employee’s salary to the total
        if (employee.subordinates.length >0) {
            for (let subordinate of employee.subordinates){
    departmentSalary+= subordinate.salary
    
            }
        }
    }
    console.log(departmentSalary);
    return departmentSalary;
    
    }
    
    // Function to Calculate the Total Salary for All Departments
    function calculateCompanySalary(company) {
        let totalSalary = 0;
      
        
        for (let department of company.departments) { // Iterate through each department in the company
          totalSalary += calculateDepartmentSalary(department); // Add the salary of the entire department
        }
      
        return totalSalary;
      }
    
    console.log("total salary for entrire company:", calculateCompanySalary(company))
