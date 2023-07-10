<?php 
    include("./../models/db.php");

    $id = $_GET['id'];

    if(!empty($id))
    {
        $removeAudio = $pdo->query("DELETE FROM audios WHERE id = '$id'");
        $pdo->exec($removeAudio);

    }
?>