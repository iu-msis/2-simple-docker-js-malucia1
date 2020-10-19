<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO Comments (commentText)
  VALUES (?)'
);

$stmt->execute([
  $_POST['commentText'],
]);

header('HTTP/1.1 303 See Other');
header('Location: ../comments/');
