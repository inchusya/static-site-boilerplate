const content = document.getElementById('content');
const loader = document.getElementById('loader');

let currentIndex = 1;
const step = 10;
const maxImages = 100;

function loadImages() {
  loader.classList.add('active');

  setTimeout(() => {
    for (let i = 0; i < step && currentIndex <= maxImages; i++, currentIndex++) {
      const img = document.createElement('img');
      img.src = `images/poster${currentIndex}.jpg`;
      img.alt = `Постер ${currentIndex}`;
      img.className = 'poster';

      content.appendChild(img);
    }

    loader.classList.remove('active');

    if (currentIndex > maxImages) {
      loader.textContent = 'Все постеры загружены';
    }
  }, 500);
}

function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    if (!loader.classList.contains('active') && currentIndex <= maxImages) {
      loadImages();
    }
  }
}

window.addEventListener('scroll', handleScroll);

// начальная загрузка
loadImages();
