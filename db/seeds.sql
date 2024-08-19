INSERT INTO departments (name) 
VALUES ('HR'),
       ('Testing');

INSERT INTO roles (title, salary, department) 
VALUES ('Developer', 100000.00, 2), 
       ('Code Tester', 90000.00, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Smith', 1, NULL), 
       ('Jane', 'Doe', 2, 1);