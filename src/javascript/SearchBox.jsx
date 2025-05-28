
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











/* import React, { useState, useEffect } from "react";
import "../styles/components.scss";


const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data) => setIndex(data));
  }, []);

  useEffect(() => {
    const filtered = index.filter((entry) =>
      entry.title.toLowerCase().includes(query.toLowerCase()) ||
      entry.content.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query, index]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {query && (
        <div className="search-dropdown">
          {results.length === 0 ? (
            <p>Ничего не найдено</p>
          ) : (
            results.map((result) => (
              <a key={result.url} href={result.url} className="search-item">
                <strong>{result.title}</strong><br />
                <small>{result.content.slice(0, 80)}...</small>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
*/