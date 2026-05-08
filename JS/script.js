const luigiButton = document.getElementById('luigi');

function playLuigiSound() {
  const audio = new Audio('../MEDIA/bye-bye-luigi.mp3');
  audio.volume = 0.9;
  audio.play().catch(() => {
    console.warn('Unable to play Luigi sound automatically.');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!luigiButton) return;
  luigiButton.addEventListener('click', () => {
    playLuigiSound();
    luigiButton.textContent = 'Luigi!';
  });
});
