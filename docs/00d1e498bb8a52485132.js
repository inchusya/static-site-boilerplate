/*

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn')
    const posterCards = document.querySelectorAll('.m_postergridfilter') // исправили селектор
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter // исправили на data-filter
  
        posterCards.forEach(card => {
          const cardCategory = card.dataset.category
          const isMatch = cardCategory === category || category === 'all'
          card.style.display = isMatch ? 'block' : 'none'
        })
  
        console.log("Фильтр работает");
      })
    })
  })
  

  /*/
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.a_filterbtn');
  var posterContainer = document.querySelector('.manual-cards');
  var posterCards = Array.from(document.querySelectorAll('.m_postergridfilter'));
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var category = button.dataset.filter; // "aesthetic", "function" или "all"

      var filteredCards = [];

      if (category === 'all') {
        filteredCards = [].concat(posterCards);
      } else {
        // Отбираем те карточки, у которых в data-categories есть нужная категорию
        filteredCards = posterCards.filter(function (card) {
          var _card$dataset$categor;

          var categories = ((_card$dataset$categor = card.dataset.categories) === null || _card$dataset$categor === void 0 ? void 0 : _card$dataset$categor.split(',')) || [];
          return categories.includes(category);
        }); // Сортируем по data-[category], например data-aesthetic или data-function

        filteredCards.sort(function (a, b) {
          var aScore = parseInt(a.dataset[category] || 0);
          var bScore = parseInt(b.dataset[category] || 0);
          return bScore - aScore; // по убыванию
        });
      } // Вставляем карточки заново в контейнер


      posterContainer.innerHTML = '';
      filteredCards.forEach(function (card) {
        posterContainer.appendChild(card);
        card.style.display = 'block';
      }); // Скрываем не вошедшие карточки

      posterCards.forEach(function (card) {
        if (!filteredCards.includes(card)) {
          card.style.display = 'none';
        }
      });
      console.log("\u0424\u0438\u043B\u044C\u0442\u0440: ".concat(category));
    });
  });
});