const photos = [
  "photos/1.jpg",
  "photos/2.jpg",
  "photos/3.jpg",
  "photos/4.jpg",
  "photos/5.jpg",
  "photos/6.jpg",
  "photos/7.jpg",
  "photos/8.jpg",
  "photos/9.jpg",
  "photos/10.jpg"
];
let index = 1;

function nextPhoto() {
  if (index < photos.length) {
    document.getElementById("main-photo").src = photos[index];
    index++;

    // Show previous photos in background
    const img = document.createElement("img");
    img.src = photos[index - 2];
    img.style.top = Math.random() * 90 + "%";
    img.style.left = Math.random() * 90 + "%";
    document.getElementById("photo-grid").appendChild(img);
  } else {
    document.getElementById("main-photo").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("replay-btn").classList.remove("hidden");
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 }
    });
  }
}

function replay() {
  index = 1;
  document.getElementById("main-photo").src = photos[0];
  document.getElementById("main-photo").classList.remove("hidden");
  document.getElementById("message").classList.add("hidden");
  document.getElementById("next-btn").classList.remove("hidden");
  document.getElementById("replay-btn").classList.add("hidden");

  // Clear previous floating photos
  const grid = document.getElementById("photo-grid");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

// 🎵 MUSIC AUTOPLAY FIX
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  const startAudio = () => {
    if (audio.paused) {
      audio.play().catch((err) => console.log("Playback error:", err));
    }
    document.removeEventListener("click", startAudio);
    document.removeEventListener("touchstart", startAudio);
  };

  document.addEventListener("click", startAudio);
  document.addEventListener("touchstart", startAudio);
});
