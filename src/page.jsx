import './page.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import ComponentExample from './javascript/ComponentExample.jsx'
import SearchBox from './javascript/SearchBox.jsx'


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)
  root.render(<ComponentExample />)
})

import PosterLibrary from './javascript/PosterLibrary.jsx'

// ComponentExample монтируем
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  if (container) {
    const root = createRoot(container)
    root.render(<ComponentExample />)
  }

  const posterContainer = document.getElementById('posterLibraryRoot')
  if (posterContainer) {
    const root = createRoot(posterContainer)
    root.render(<PosterLibrary />)
  }
})
window.setLanguage = function (lang) {
  console.log('Установлен язык:', lang);
  // логика замены содержимого
};