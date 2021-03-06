DROP DATABASE IF EXISTS movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movieList (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(40),
  watched TINYINT NOT NULL DEFAULT 0,
  UNIQUE KEY (title)
);

-- INSERT INTO movieList(title)
-- VALUES ('Mean Girls'), ('Hackers'), ('The Grey'), ('Sunshine'), ('Ex Machina');