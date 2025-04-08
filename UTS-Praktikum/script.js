// Dark Mode Toggle
const toggle = document.querySelector(".dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Lightbox for images
const popupImgs = document.querySelectorAll(".popup-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

popupImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    alert("Semua kolom wajib diisi.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Format email tidak valid.");
    return;
  }

  alert("Pesan berhasil dikirim!");
  this.reset();
});

// CV Image Upload and Preview
document.getElementById('cv-upload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById('cv-preview').innerHTML = '<img src="' + event.target.result + '" alt="CV Preview" style="max-width:100%; margin-top:1em;" />';
    }
    reader.readAsDataURL(file);
  }
});