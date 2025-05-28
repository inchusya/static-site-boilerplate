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

  document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.a_filterbtn')
  const posterContainer = document.querySelector('.manual-cards')
  let posterCards = Array.from(document.querySelectorAll('.m_postergridfilter'))

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter // "aesthetic", "function" или "all"

      let filteredCards = []

      if (category === 'all') {
        filteredCards = [...posterCards]
      } else {
        // Отбираем те карточки, у которых в data-categories есть нужная категорию
        filteredCards = posterCards.filter(card => {
          const categories = card.dataset.categories?.split(',') || []
          return categories.includes(category)
        })

        // Сортируем по data-[category], например data-aesthetic или data-function
        filteredCards.sort((a, b) => {
          const aScore = parseInt(a.dataset[category] || 0)
          const bScore = parseInt(b.dataset[category] || 0)
          return bScore - aScore // по убыванию
        })
      }

      // Вставляем карточки заново в контейнер
      posterContainer.innerHTML = ''
      filteredCards.forEach(card => {
        posterContainer.appendChild(card)
        card.style.display = 'block'
      })

      // Скрываем не вошедшие карточки
      posterCards.forEach(card => {
        if (!filteredCards.includes(card)) {
          card.style.display = 'none'
        }
      })

      console.log(`Фильтр: ${category}`)
    })
  })
})
