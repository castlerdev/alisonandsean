const photoPool = [
  { src: "resources/philippines/boracay-ss.jpg", caption: "Sunset at Boracay Beach" },
  { src: "resources/philippines/scuba-diving.jpg", caption: "Scuba Diving in Philippine Waters" },
  { src: "resources/barcelona/2018/barca-tibidabo.jpg", caption: "Mt Tibidabo, Barcelona" },
  { src: "resources/philippines/boracay-bar.jpg", caption: "Boracay Night Life" },
  { src: "resources/faro/24/faro-2024.jpg", caption: "Farol Island, Faro" },
  { src: "resources/lake-district/helvellyn1.jpg", caption: "Helvellyn 5 Peaks" },
  { src: "resources/cyprus/troodos-bike3.jpg", caption: "Troodos Mountain Biking" },
  { src: "resources/cyprus/olympus-sunset.jpg", caption: "Mount Olympus Sunset" },
  { src: "resources/barcelona/2022/night-out.png", caption: "Barcelona Night Life" },
  { src: "resources/yorkshire-dales/kirkby-walk.jpg", caption: "Kirkby Stephens Walk" },
  { src: "resources/boulmer/hedley-family.jpg", caption: "Boulmer Beach" },
  { src: "resources/barcelona/2018/barca-hostel-night1.jpeg", caption: "Barcelona Amistat Night" },
  { src: "resources/krakow/krakow1.jpg", caption: "Krakow Jewish Quarter" },
  { src: "resources/corfu/cruise.jpg", caption: "Corfu Cruise" },
  { src: "resources/cyprus/ayia-napa2.jpg", caption: "Ayia Napa" },
  { src: "resources/budapest/buda3.jpg", caption: "Budapest" },
];

function getRandomPhotos(pool, count) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderHighlights() {
  const gallery = document.getElementById("highlights-gallery");
  if (!gallery) {
    console.error("Gallery element not found!");
    return;
  }

  const selectedPhotos = getRandomPhotos(photoPool, 7);
  const doubledPhotos = [...selectedPhotos, ...selectedPhotos]; // smooth looping

  gallery.innerHTML = doubledPhotos.map(photo => `
    <img src="${photo.src}" alt="${photo.caption}" class="gallery-image">
  `).join("");

  // Auto-scroll
  let scrollPosition = 0;
  const scrollSpeed = 0.3;
  const galleryWidth = gallery.scrollWidth / 2; // Because of doubled content

  function autoScroll() {
    scrollPosition += scrollSpeed;
    if (scrollPosition >= galleryWidth) {
      scrollPosition = 0;
      gallery.scrollLeft = 0;
    }
    gallery.scrollLeft = scrollPosition;
    requestAnimationFrame(autoScroll);
  }

  gallery.scrollLeft = 0;
  requestAnimationFrame(autoScroll);
}

// Dropdown toggle logic for nav
function setupDropdowns() {
  const toggles = document.querySelectorAll('.locations-toggle');

  toggles.forEach(toggle => {
    const dropdown = toggle.nextElementSibling;

    // To attach event if next is dropdown
    if (dropdown && dropdown.classList.contains('location-dropdown')) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('show');
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
          dropdown.classList.remove('show');
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHighlights();
  setupDropdowns();

      const toggle = document.querySelector(".locations-toggle");
    const dropdown = document.querySelector(".location-dropdown");

    if (toggle && dropdown) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            dropdown.classList.toggle("show");
        });
    }
});
