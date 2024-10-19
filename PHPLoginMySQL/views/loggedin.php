<?php
session_start();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Logged in</title>
    <style>
        body {
            margin: auto;
            max-width: 200px;
        }
    </style>
</head>
<body>
<h1>Welcome <?php echo htmlspecialchars($_SESSION["username"])?></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi debitis doloribus excepturi
    facere hic in maiores mollitia optio pariatur, perferendis possimus quidem, quos recusandae sed tempora unde veritatis vitae?</p>
<br><a href="../controller/logout.php">Logout</a>
</body>
</html>
