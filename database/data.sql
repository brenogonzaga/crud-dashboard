CREATE DATABASE dev;
USE dev;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (name, email, status)
VALUES("Breno Gonzaga", "breno.gonzaga@ifam.edu.br", "active");
