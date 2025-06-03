/*  import './index.css'
import jpg from './images/image.jpg'


document.addEventListener('DOMContentLoaded', () => {
  const image = new Image()
  image.src = jpg
  document.querySelector('.images').appendChild(image)
})

window.setLanguage = function (lang) {
  console.log('Установлен язык:', lang);
  // логика замены содержимого
};
new HtmlWebpackPlugin({
  template: './src/library.html',
  filename: 'library.html',
  chunks: ['index']  // ИЛИ 'page', если setLanguage определена там
})


import { initLanguage, setLanguage } from './lang.js';

window.setLanguage = setLanguage;
initLanguage();

new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  chunks: ['index']
})
/*/




import './index.css';
import jpg from './images/image.jpg';
import { initLanguage, setLanguage } from './lang.js';

document.addEventListener('DOMContentLoaded', () => {
  // Добавляем картинку jpg в контейнер с классом .images
  const image = new Image();
  image.src = jpg;
  const imagesContainer = document.querySelector('.images');
  if (imagesContainer) {
    imagesContainer.appendChild(image);
  }

  // Инициализируем язык при загрузке страницы
  initLanguage();
});

// Назначаем глобальную функцию для переключения языка
window.setLanguage = setLanguage;
