-- CREATING TABLES --

CREATE TABLE resturaunt_items (
	id SERIAL NOT NULL,
	name TEXT NOT NULL,
	price TEXT NOT NULL,
	description TEXT NOT NULL,
	image_path TEXT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE orders (
	id SERIAL NOT NULL,
	full_name TEXT NOT NULL,
	email TEXT NOT NULL,
	postal_code TEXT NOT NULL,
	city TEXT NOT NULL,
	PRIMARY KEY(id)
);