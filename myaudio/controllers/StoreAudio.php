<?php 
    include("./../models/db.php");

    $photo = $_POST['photo'];
    $audio = $_POST['audio'];

    if(!empty($photo) && !empty($audio))
    {
        $addAudio = $pdo->query("INSERT INTO audios (photo_url, audio_src) VALUES ('$photo', '$audio')");
        $pdo->exec($addAudio);
    }
?>