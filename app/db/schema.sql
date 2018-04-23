\c cryptoApp

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favorites;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username text not null unique,
password_digest text not null,
email text not null unique,
date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE favorites (
id SERIAL PRIMARY KEY,
users_id INT references users(id),
symbol text,
date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (email, username, password_digest)
VALUES ('c@gmail.com', 'Utrecht', 'motivational');

INSERT INTO users (email, username, password_digest)
VALUES ('h@gmail.com', 'amsterdam', 'gek');

INSERT INTO users (email, username, password_digest)
VALUES ('a@gmail.com', 'denver', 'blij');

INSERT INTO users (email, username, password_digest)
VALUES ('n@gmail.com', 'newYork', 'stoer');
