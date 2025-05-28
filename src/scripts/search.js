const searchBar = document.querySelector("#searchBar"); // Поиск по ID или классу
const resultsContainer = document.querySelector("#results"); // Контейнер для вывода результатов

// Загружаем индекс данных для поиска
let searchIndex = [];
fetch('./assets/search-index.json')
  .then(response => response.json())
  .then(data => {
    searchIndex = data; // Сохраняем данные индекса в переменную
  })
  .catch(error => console.error('Ошибка загрузки индекса:', error));

// Обработчик события для поиска
searchBar.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim(); // Получаем строку поиска и приводим к нижнему регистру
  
  if (query === "") {
    resultsContainer.innerHTML = ""; // Если строка поиска пустая, очищаем результаты
    return;
  }

  const results = searchIndex.filter(item => {
    return item.title.toLowerCase().includes(query) || 
           item.content.toLowerCase().includes(query); // Фильтруем по заголовку и контенту
  });

  // Выводим результаты поиска
  if (results.length > 0) {
    resultsContainer.innerHTML = results.map(result => {
      return `<a href="${result.url}">${result.title}</a><p>${result.content}</p>`;
    }).join('');
  } else {
    resultsContainer.innerHTML = "<p>Ничего не найдено</p>"; // Если нет результатов, выводим сообщение
  }
});
