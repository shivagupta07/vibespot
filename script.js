const card = document.getElementById('song-card');
const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');

card.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + '%';
});
