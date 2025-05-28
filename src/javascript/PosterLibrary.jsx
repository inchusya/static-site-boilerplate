import React, { Component } from 'react'
import posterData from './posterData.js'
import PosterCard from './PosterCard.jsx'



export default class PosterLibrary extends Component {
  render() {
    return (
      <div className="PosterLibrary">
        <h2>Библиотека научных постеров</h2>
        <div className="PosterLibrarygrid">
          {posterData.map(poster => (
            <PosterCard key={poster.id} poster={poster} />
          ))}
        </div>
      </div>
    )
  }
}
