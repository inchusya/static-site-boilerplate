
import React, { Component } from 'react'
import ReactDOM from 'react-dom'




export default class ComponentExample extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="ComponentExample">This is a React component</div>
  }
}



/* import React, { useEffect, useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Загружаем данные при старте
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => setIndex(data));
  }, []);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const filtered = index.filter(entry =>
      entry.title.toLowerCase().includes(query.toLowerCase()) ||
      entry.content.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query, index]);

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="search-results">
        {results.length === 0 && query && <p>Nothing found</p>}
        {results.map(result => (
          <div key={result.url} className="search-result-item">
            <a href={result.url}><h3>{result.title}</h3></a>
            <p>{result.content.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;

/*/