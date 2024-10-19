<?php
session_start();
include "dbmanager.php";


if($_SERVER["REQUEST_METHOD"] == "POST"){

    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    $query = "INSERT INTO `users` (`userName`, `userPassword`) VALUES ('$username', '$password')";
    try {
        mysqli_query($conn, $query);
        $_SESSION['username'] = $username;
        header("Location: ../views/loggedin.php");
    }catch (Exception $e){
        header("Location: ../views/error.php");
    }

}
