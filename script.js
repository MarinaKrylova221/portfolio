//Menu
const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navWrapper');

    function openMenu() {
      toggle.classList.add('active');
      nav.classList.add('open');
    }

    function closeMenu() {
      toggle.classList.remove('active');
      nav.classList.remove('open');
    }

    function toggleMenu() {
      nav.classList.contains('open') ? closeMenu() : openMenu();
    }

    toggle.addEventListener('click', toggleMenu);

    // Menü schließt sich bei Klick auf Link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Menü schließt sich bei ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });

    // Menü schließt sich bei Scroll
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      if (nav.classList.contains('open')) {
        if (Math.abs(window.scrollY - lastScroll) > 10) {
          closeMenu();
        }
      }
      lastScroll = window.scrollY;
    });

// Certificates
const prevBtn = document.querySelector('.certificates-container .prev');
const nextBtn = document.querySelector('.certificates-container .next');
const wrapper = document.querySelector('.certificates-wrapper');

prevBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: 300, behavior: 'smooth' });
});

// Модалка
function openModal(img, modalId, modalImgId) {
  const modal = document.getElementById(modalId);
  const modalImg = document.getElementById(modalImgId);
  modal.classList.add('active');
  modalImg.src = img.src;
  modalImg.alt = img.alt;
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
}

 // Portfolio
window.addEventListener("load", () => {
    const track = document.querySelector(".slide-track");
    const slides = document.querySelectorAll(".slide-track img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function updateSlide() {
      const slideWidth = track.parentElement.clientWidth;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlide();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
      }
    });

    window.addEventListener("resize", updateSlide);

    updateSlide();
  });

  // Footer

  document.getElementById("year").textContent = new Date().getFullYear();

  /* Creative-Photo */
  let items = document.querySelectorAll('.mag-item');
let totalItems = items.length;
let currentIndex = 0;

// Классы для позиций
const positions = ['left-2', 'left-1', 'center', 'right-1', 'right-2', 'hidden'];

function updateCarousel() {
  // Сбрасываем все классы кроме базового mag-item
  items.forEach(item => {
    positions.forEach(pos => item.classList.remove(pos));
  });

  // Выставляем классы для видимых элементов вокруг currentIndex
  for (let i = 0; i < positions.length; i++) {
    let index = (currentIndex + i) % totalItems;
    items[index].classList.add(positions[i]);
  }
}

function magPrevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function magNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Модальное окно
function openModal(img, modalId, modalImgId) {
  const modal = document.getElementById(modalId);
  const modalImg = document.getElementById(modalImgId);
  modal.style.display = 'flex';
  modalImg.src = img.src;
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Инициализация
updateCarousel();

// Flyers
function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = img.src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Accordion 

  document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      item.classList.toggle("active");
    });
  });



