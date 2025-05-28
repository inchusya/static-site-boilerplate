/*
mport React from 'react'

const PosterCard = ({ poster }) => {
  return (
    <div className="PosterCard">
      <img src={poster.image} alt={poster.title}  className="m_postergrid" />
      <div className="PosterCard__content">
        
        <p><strong>Автор:</strong> {poster.author}</p>
        
      </div>
    </div>
  )
}

export default PosterCard
*/

import React from 'react'

const PosterCard = ({ poster }) => {
  let imageSrc
  try {
    imageSrc = require(`../images/${poster.image}`)
  } catch (error) {
    console.error(`Ошибка загрузки изображения: ${poster.image}`, error)
    imageSrc = '' // запасной вариант
  }

  return (
    <div className="PosterCard">
      <a href={poster.link}>
  <img src={imageSrc} alt={poster.title} />
</a>
      <div className="PosterCard__content">
        <p><strong>Автор:</strong> {poster.author}</p>
      </div>
    </div>
  )
}

export default PosterCard

