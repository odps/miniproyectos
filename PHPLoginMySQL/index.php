<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $_SERVER["PHP_SELF"]?></title>
    <style>
        body {
            text-align: center;
        }
    </style>
</head>
<body>
<h1>Registration</h1>
<form method="POST" action="./controller/loginctl.php">
    Username: <br><input type="text" name="username"><br></br>
    Password: <br><input type="password" name="password"><br></br>
    <input type="submit" value="Register">
</form>
</body>
</html>