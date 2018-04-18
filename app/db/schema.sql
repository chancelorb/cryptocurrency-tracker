\c cryptoApp

DROP TABLE IF EXISTS users;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
email text not null unique,
password_digest text not null
);
