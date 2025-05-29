var searchBar = document.querySelector("#searchBar"); // Поиск по ID или классу

var resultsContainer = document.querySelector("#results"); // Контейнер для вывода результатов
// Загружаем индекс данных для поиска

var searchIndex = [];
fetch('./assets/search-index.json').then(function (response) {
  return response.json();
}).then(function (data) {
  searchIndex = data; // Сохраняем данные индекса в переменную
})["catch"](function (error) {
  return console.error('Ошибка загрузки индекса:', error);
}); // Обработчик события для поиска

searchBar.addEventListener('input', function (event) {
  var query = event.target.value.toLowerCase().trim(); // Получаем строку поиска и приводим к нижнему регистру

  if (query === "") {
    resultsContainer.innerHTML = ""; // Если строка поиска пустая, очищаем результаты

    return;
  }

  var results = searchIndex.filter(function (item) {
    return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query); // Фильтруем по заголовку и контенту
  }); // Выводим результаты поиска

  if (results.length > 0) {
    resultsContainer.innerHTML = results.map(function (result) {
      return "<a href=\"".concat(result.url, "\">").concat(result.title, "</a><p>").concat(result.content, "</p>");
    }).join('');
  } else {
    resultsContainer.innerHTML = "<p>Ничего не найдено</p>"; // Если нет результатов, выводим сообщение
  }
});