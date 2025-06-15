document.querySelectorAll(".coffee-options a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = link.href;
    }, 500); // wait for animation
  });
});
