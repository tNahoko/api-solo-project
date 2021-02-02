BEGIN TRANSACTION;

CREATE TABLE scrum (id serial UNIQUE NOT NULL, name VARCHAR(50) UNIQUE NOT NULL, role VARCHAR(30) NOT NULL, level INT NOT NULL);

INSERT INTO scrum (name, role, level) VALUES
('Keizo', 'Scrum Master', 2),
('Seth', 'Product Owner', 1),
('Shota', 'Developer', 1),
('Fred', 'Developer', 2),
('Nahoko', 'Developer', 0);

COMMIT;