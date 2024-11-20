-- setup.sql

CREATE TABLE IF NOT EXISTS contact_info (
    key SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    contact_number VARCHAR(50) NOT NULL,
    company VARCHAR(255),
    job_title VARCHAR(255),
    email VARCHAR(255)
);
