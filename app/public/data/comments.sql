CREATE database msis;

USE msis;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    commentID INTEGER PRIMARY KEY AUTO_INCREMENT,
    newComment VARCHAR(64),
    );

INSERT INTO Comments (commentID, newComment) VALUES
();
