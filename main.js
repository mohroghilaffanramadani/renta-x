document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  if (!menu || !navbar) return;

  menu.addEventListener("click", (e) => {
    e.stopPropagation(); // cegah event bubble
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  window.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });

  window.addEventListener("scroll", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// Inisialisasi MixItUp
const containerEl = document.querySelector('.services-container');
if (containerEl) {
  const mixer = mixitup(containerEl, {
    selectors: {
      target: '.mix'
    },
    animation: {
      duration: 300 // lama animasi filter
    }
  });
}

// Aktifkan class aktif di filter
const filterItems = document.querySelectorAll('.work__item');
filterItems.forEach(item => {
  item.addEventListener('click', function() {
    // hapus class aktif dari semua
    filterItems.forEach(i => i.classList.remove('active-work'));
    // kasih class aktif ke yang diklik
    this.classList.add('active-work');
  });
});
