document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.carousel-track');
  const items = Array.from(document.querySelectorAll('.carousel-item'));
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  let index = 0;

  const updateCarousel = () => {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  };

  const getItemsPerView = () => {
    if (window.innerWidth >= 900) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  };

  const goNext = () => {
    index++;
    const maxIndex = items.length - getItemsPerView();
    if (index > maxIndex) {
      index = 0; // loop to start
    }
    updateCarousel();
  };

  const goPrev = () => {
    index--;
    const maxIndex = items.length - getItemsPerView();
    if (index < 0) {
      index = maxIndex; // loop to end
    }
    updateCarousel();
  };

  nextButton.addEventListener('click', goNext);
  prevButton.addEventListener('click', goPrev);

  window.addEventListener('resize', () => {
    index = Math.min(index, items.length - getItemsPerView()); // prevent blank space
    updateCarousel();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
