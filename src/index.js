import './index.css'
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
