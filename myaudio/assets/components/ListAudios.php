<?php
$getAudio = $pdo->query("SELECT * FROM audios")->fetchAll();
?>

<?php foreach ($getAudio as $data) { ?>
    <div class="box">
        <div class="flex center">
            <div class="audio-container">
                <img src="<?php echo $data['photo_url']; ?>" alt="Imagem">
                <div class="microphone-icon">
                    <i class="fas fa-microphone"></i>
                </div>
                <audio class="plyr" id="audio-player" src="<?php echo $data['audio_src']; ?>"></audio>
            </div>
            <div>
                <a href="./controllers/DeleteAudio.php?id=<?php echo $data['id']; ?>">
                    <i class="fas fa-trash link-red"></i>
                </a>
            </div>
        </div>
        <script src="https://cdn.plyr.io/3.6.7/plyr.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const players = Array.from(document.querySelectorAll('#audio-player')).map((p) => new Plyr(p, {
                    controls: ['play', 'progress', 'current-time', 'duration']
                }));
            });
        </script>
    </div>
<?php } ?>