const inquirer = require('inquirer');
const { Pool } = require('pg');
const Department = require('./lib/department.js');
const Role = require('./lib/role.js');
const Employee = require('./lib/employee.js');
require('dotenv').config();

const pool = new Pool(
  {
    user: process.env.USER_KEY,
    password: process.env.PASS_KEY,
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