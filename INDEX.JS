const audioPlayer = document.getElementById('audioPlayer');
const tracks = ['1 - dont stop.mp3', '2 - biftah.mp3', '3 - malone5.mp3'];
let currentTrackIndex = 0;

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  audioPlayer.src = tracks[currentTrackIndex];
  audioPlayer.play();
}

audioPlayer.addEventListener('ended', playNextTrack);