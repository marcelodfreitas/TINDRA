const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
      images.forEach((img, i) => {
        img.classList.toggle('opacity-100', i === index);
        img.classList.toggle('opacity-0', i !== index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showSlide(currentIndex);
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });

    function startAutoplay() {
      interval = setInterval(nextSlide, 3000); // 5 segundos
    }

    function resetAutoplay() {
      clearInterval(interval);
      startAutoplay();
    }

    // Inicialização
    images[0].classList.add('opacity-100');
    startAutoplay();