INSERT INTO departments (name) 
VALUES ('Quality'),
       ('Testing'), 
       ('Programmer'), 
       ('Accounting'),
       ('HR');

INSERT INTO roles (title, salary, department) 
VALUES ('Developer', 100000.00, 3), 
       ('Code Tester', 90000.00, 2),
       ('Accountant', 80000.00, 4), 
       ('Database Manager', 95000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Smith', 1, NULL), 
       ('Jane', 'Doe', 2, 1), 
       ('Bert', 'Summer', 3, 1), 
       ('Jessica', 'Walter', 1, 1);