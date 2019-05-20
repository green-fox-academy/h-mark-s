CREATE TABLE task(
  tID INT AUTO_INCREMENT,
  task_name VARCHAR(100),
  task_description VARCHAR(200),
  deadline DATETIME,
  PRIMARY KEY(tID)
  );

CREATE TABLE person(
  pID INT AUTO_INCREMENT,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(80),
  PRIMARY KEY(pID)
  );

CREATE TABLE doing(
  dID INT AUTO_INCREMENT,
  tID INT,
  pID INT,
  done TINYINT(1),
  PRIMARY KEY(dID),
  FOREIGN KEY(tID) REFERENCES task(tID),
  FOREIGN KEY(pID) REFERENCES person(pID)
  );

INSERT INTO task(
    task_name,
    task_description,
    deadline)
  VALUES(
    'walk the dog',
    'take the dog for a walk plz',
    '2019-12-31 12:00:00'
  );

INSERT INTO task(
  task_name,
  task_description,
  deadline)
VALUES(
  'go shopping',
  'buy stuff like bread and butter',
  '2019-05-22 12:00:00'
);

INSERT INTO task(
  task_name,
  task_description,
  deadline)
VALUES(
  'pass the exam',
  'do not fail me',
  '2019-06-05 14:00:00'
); 

INSERT INTO person(
  first_name, last_name, email)
VALUES(
  'Bela',
  'Toth',
  'toth.bela@lofaszjoska.hu'
);

INSERT INTO person(
  first_name,
  last_name,
  email)
VALUES(
  'Jakab',
  'Gipsz',
  'jakab.gipsz@donotpmme.io'
);

INSERT INTO person(
  first_name,
  last_name,
  email)
VALUES(
  'Hank',
  'Hancock',
  'whatwillyoudo@whenjesuscomes.net'
);

INSERT INTO doing(
  tID,
  pID,
  done)
VALUES(
  '2',
  '2',
  '0'
);

INSERT INTO doing(
  tID,
  pID,
  done)
VALUES(
  '3',
  '1',
  '1'
);

DELETE FROM doing
WHERE tID = 1;

DELETE FROM task
WHERE tID = 1;

UPDATE task
SET task_description='buy tomatoes'
WHERE task_name='go shopping';

SELECT person.first_name, task.task_name, task.task_description
FROM person
JOIN doing
  ON person.pID = doing.pID
JOIN task
  ON doing.tID = task.tID
ORDER BY person.first_name ASC;
