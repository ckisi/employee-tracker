DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

\c employee_tracker_db;

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  deparment INTEGER NOT NULL,
  FOREIGN KEY (deparment) 
  REFERENCES departments(id) 
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  FOREIGN KEY (role_id) 
  REFERENCES role(id) 
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id) 
  REFERENCES employee(id) 
  ON DELETE SET NULL
);