
'use strict';

// WAIT FOR THE HTML PAGE TO LOAD
document.addEventListener('DOMContentLoaded', () => {

    // CREATE AN ARRAY OF EMPLOYEES
    let employees = [
        [1001, 'Heaven Miller', 1234, 'heaven@email.com', 'Marketing'],
        [1002, 'Douglas Williams', 2345, 'doug@email.com', 'Finance'],
        [1003, 'Mark Wilson', 3456, 'mark@email.com', 'IT'],
        [1004, 'Sarah Johnson', 4567, 'sarah@email.com', 'HR'],
        [1005, 'David Brown', 5678, 'david@email.com', 'Sales']
    ];


    // CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
    // IF IT DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

    if (localStorage.getItem('employees') !== null) {
        employees = JSON.parse(localStorage.getItem('employees'));
    } else {
        localStorage.setItem('employees', JSON.stringify(employees));
    }


    // GET DOM ELEMENTS

    const form = document.getElementById('addForm');
    const table = document.getElementById('empTable');
    const tbody = table.querySelector('tbody');

    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const extensionInput = document.getElementById('extension');
    const emailInput = document.getElementById('email');
    const departmentInput = document.getElementById('department');
    const output = document.getElementById('empCount');


    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

    let count = employees.length;
    output.textContent = `(${count})`;


    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

    buildGrid();


    // BUILD THE EMPLOYEES GRID

    function buildGrid() {

        // CLEAR THE TABLE BODY
        tbody.innerHTML = '';

        // LOOP THROUGH THE EMPLOYEES ARRAY
        for (const employee of employees) {

            // CREATE A NEW TABLE ROW
            const row = document.createElement('tr');

            // CREATE THE ROW USING A TEMPLATE LITERAL
            row.innerHTML = `
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td>
                    <button type="button" class="delete btn btn-danger btn-sm">X</button>
                </td>
            `;

            // APPEND THE ROW TO THE TABLE BODY
            tbody.appendChild(row);
        }

        // UPDATE EMPLOYEE COUNT
        count = employees.length;
        output.textContent = `(${count})`;

        // SAVE EMPLOYEES TO LOCAL STORAGE
        localStorage.setItem('employees', JSON.stringify(employees));
    }


    // ADD EMPLOYEE FUNCTION

    function addEmployee(employeeArray) {

        // ADD NEW EMPLOYEE TO EXISTING ARRAY
        employees.push(employeeArray);

        // REBUILD THE GRID
        buildGrid();
    }


    // REMOVE EMPLOYEE FUNCTION

    function removeEmployee(employeeID) {

        // REMOVE EMPLOYEE USING FILTER
        employees = employees.filter(employee => employee[0] !== employeeID);

        // REBUILD THE GRID
        buildGrid();
    }


    // ADD EMPLOYEE FORM EVENT

    form.addEventListener('submit', (e) => {

        // PREVENT FORM SUBMISSION
        e.preventDefault();

        // GET VALUES FROM THE TEXT BOXES
        const id = Number(idInput.value.trim());
        const name = nameInput.value.trim();
        const extension = Number(extensionInput.value.trim());
        const email = emailInput.value.trim();
        const department = departmentInput.value;

        // VALIDATE EMPLOYEE INFORMATION
        if (!id || !name || !extension || !email || !department) {
            alert('Please complete all employee fields.');
            return;
        }

        // CHECK FOR DUPLICATE EMPLOYEE ID
        if (employees.some(employee => employee[0] === id)) {
            alert('This employee ID already exists.');
            idInput.focus();
            return;
        }

        // CREATE A NEW EMPLOYEE ARRAY
        const newEmployee = [
            id,
            name,
            extension,
            email,
            department
        ];

        // ADD EMPLOYEE TO THE ARRAY
        addEmployee(newEmployee);

        // RESET THE FORM
        form.reset();

        // SET FOCUS BACK TO THE ID TEXT BOX
        idInput.focus();

    });


    // DELETE EMPLOYEE EVENT

    table.addEventListener('click', (e) => {

        // CHECK IF THE X BUTTON WAS CLICKED
        if (e.target.classList.contains('delete')) {

            // CONFIRM DELETION
            if (confirm('Are you sure you want to delete this employee?')) {

                // GET EMPLOYEE ID FROM THE TABLE ROW
                const row = e.target.closest('tr');
                const employeeID = Number(row.cells[0].textContent);

                // REMOVE EMPLOYEE
                removeEmployee(employeeID);
            }
        }
    });

});
