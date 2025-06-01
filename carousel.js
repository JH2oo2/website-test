document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let currentIndex = 0;

  function updateCarousel() {
    const width = items[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel(); // initial positioning
});
