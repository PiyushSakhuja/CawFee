

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const muteToggle = document.getElementById("un-mute");
  const startButton = document.querySelector(".overlay-content button");
  const overlay = document.querySelector(".video-bg-container");

  music.volume = 0.5;
  music.loop = true;
  music.play().catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
  music.muted = muteToggle.checked;
  muteToggle.addEventListener("change", () => {
    music.muted = muteToggle.checked;
  });

  startButton.addEventListener("click", () => {
    overlay.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "coffee.html"; 
    }, 1000); 
  });
});

