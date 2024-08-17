const inquirer = require('inquirer');
const { Pool } = require('pg');
const Department = require('./lib/department.js');
const Role = require('./lib/role.js');
const Employee = require('./lib/employee.js');

const pool = new Pool(
  {
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employee_tracker_db database.`)
);

pool.connect();

Department.view(pool);
Role.view(pool);
Employee.view(pool);

/*
inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: ['View all departments', 
        'View all roles', 
        'View all employees', 
        'Add a department', 
        'Add a role', 
        'Add an employee', 
        'Update an employee role'],
    },
  ])
*/