<?php 
include("./models/db.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/styles/global.css">
    <link rel="stylesheet" href="./assets/styles/plyr.css">
    <link rel="stylesheet" href="./assets/styles/index.css">
    <link rel="stylesheet" href="https://cdn.plyr.io/3.6.7/plyr.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Audios</title>
</head>
<body>
    <div class="container">
        <?php include("./assets/components/AppName.php"); ?>
        <?php include("./assets/components/StoreAudios.php"); ?>
        <?php include("./assets/components/ListAudios.php"); ?>
    </div>
</body>
</html>