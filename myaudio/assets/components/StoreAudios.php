<?php
$action = "./controllers/StoreAudio.php";
$method = "POST";
?>

<div class="box">
    <form action="<?php echo $action; ?>" method="<?php echo $method; ?>">
        <div class="form-input form-data">
            <label><i class="fa-solid fa-image"></i> URL da Foto:</label>
            <input type="text" name="photo" placeholder="Ex.: https://imgur.com/5pKrlL0.png" />
        </div>

        <div class="form-input  form-data">
            <label><i class="fa-solid fa-music"></i> URL do Audio:</label>
            <input type="text" name="audio" placeholder="Ex.: https://soundcloud.com/myaudio.mp3" />
        </div>
        <div class="form-input">
            <button type="submit">Adicionar</button>
        </div>
    </form>
</div>