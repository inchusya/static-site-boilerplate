import React, { useState } from 'react';

const pages = [
    { title: 'О нас', content: 'Мы создаем библиотеку научных плакатов', link: '/index.html' },
    { title: 'Руководство', content: 'Полное руководство по созданию постеров', link: '/manual.html' },
    { title: 'Библиотека', content: 'Собрание лучших научных плакатов', link: '/library.html' },
    { title: 'Шаблоны', content: 'Готовые шаблоны для ваших постеров', link: '/templates.html' }
];

const search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim()) {
            const filtered = pages.filter(page => 
                page.title.toLowerCase().includes(value.toLowerCase()) ||
                page.content.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Поиск по сайту..."
                value={query}
                onChange={handleSearch}
                className="search-input"
            />
            {results.length > 0 && (
                <ul className="search-results">
                    {results.map((page) => (
                        <li key={page.link}>
                            <a href={page.link}>{page.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default search;
