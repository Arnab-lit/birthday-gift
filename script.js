
const photos = [
  "photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg",
  "photos/5.jpg", "photos/6.jpg", "photos/7.jpg", "photos/8.jpg",
  "photos/9.jpg", "photos/10.jpg"
];

let index = 0;

window.onload = () => {
  const audio = document.getElementById('bg-music');
  audio.play().catch(() => {
    console.log("Autoplay might be blocked.");
  });
};

function nextPhoto() {
  const photoGrid = document.getElementById("photo-grid");
  if (index < photos.length - 1) {
    let img = document.createElement("img");
    img.src = photos[index];
    img.style.top = Math.random() * 80 + "%";
    img.style.left = Math.random() * 80 + "%";
    photoGrid.appendChild(img);
    index++;
    document.getElementById("main-photo").src = photos[index];
  } else {
    document.getElementById("main-photo").style.display = "none";
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("replay-btn").classList.remove("hidden");
    confettiExplosion();
  }
}

function replay() {
  location.reload();
}

function confettiExplosion() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
}

let img = document.createElement("img");
img.src = photos[index];
img.style.top = Math.random() * 90 + "%";
img.style.left = Math.random() * 90 + "%";

photoGrid.appendChild(img);
