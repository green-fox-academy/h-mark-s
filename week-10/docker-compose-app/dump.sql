CREATE DATABASE auction_app;
USE auction_app;

CREATE TABLE items (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(120) NOT NULL,
	expiry_date DATETIME NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE bids (
	bId INT NOT NULL AUTO_INCREMENT,
	iId INT NOT NULL,
	name VARCHAR(120) NOT NULL,
	amount INT NOT NULL,
	PRIMARY KEY (bId),
  FOREIGN KEY(iId) references items(id)
);

INSERT INTO items (title, expiry_date) VALUES ('book', NOW());
