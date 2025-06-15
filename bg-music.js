document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const muteToggle = document.getElementById("un-mute");

  if (!music || !muteToggle) return;

  music.volume = 0.5;
  music.loop = true;
  music.play().catch(() => {
    document.body.addEventListener("click", () => music.play(), { once: true });
  });

  music.muted = muteToggle.checked;

  muteToggle.addEventListener("change", () => {
    music.muted = muteToggle.checked;
  });
});
