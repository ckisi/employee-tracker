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

class CLI {
  static async initialPrompt() {
    const data = await inquirer
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
    ]);
    return data;
  }

  static async addDepartmentPrompt() {
    const data = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the department?',
        },
      ]);
      return data;
  }

  static async addRolePrompt() {
    const data = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the role?',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the salary of the role?',
        },
        {
          type: 'input',
          name: 'department',
          message: 'Which department does the role belong to?',
        },
      ]);
      return data;
  }

  static async addEmployeePrompt() {
    const data = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'firstName',
          message: `What is the employee's first name?`,
        },
        {
          type: 'input',
          name: 'lastName',
          message: `What is the employee's last name?`,
        },
        {
          type: 'input',
          name: 'role',
          message: `What is the employee's role?`,
        },
        {
          type: 'input',
          name: 'manager',
          message: `Who is the employee's manager?`,
        },
      ]);
      return data;
  }

  static async updateEmployeePrompt() {
    const data = await inquirer
      .prompt([
        {
          type: 'list',
          name: 'update',
          message: 'Choose an employee to update',
          choices: [],
        },
      ]);
      return data;
  }
}

const data = CLI.initialPrompt();

switch(data) {
  case 'View all departments':
    Department.view(pool);
    break;
  case 'View all roles':
    Role.view(pool);
    break;
  case 'View all employees':
    Employee.view(pool);
    break;
  case 'Add a department':
    const department = CLI.addDepartmentPrompt();
    break;
  case 'Add a role':
    const role = CLI.addRolePrompt();
    break;
  case 'Add an employee':
    const employee = CLI.addEmployeePrompt();
    break;
  case 'Update an employee role':
    break;
}