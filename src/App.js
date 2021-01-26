import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './components/Display';
import Filter from './components/Filter';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [theme, setTheme] = useState(getStorageTheme());

  const countriesUrl = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    axios
      .get(countriesUrl)
      .then(response => {
        setCountries(response.data);
        setFilteredCountries(response.data);
        // console.log(response.data);
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value);
    setFilteredCountries(
      countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
    );
  };

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      console.log('dark')
    } else {
      setTheme('light-theme');
      console.log('light')
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <div>
    
      <button className="btn" onClick={toggleTheme}>
        ligth/dark
      </button>
      <Filter filter={filter} handleFilter={handleFilter} />
      <Display
        countries={filteredCountries}
        setFilter={setFilter}
        setFilteredCountries={setFilteredCountries}
      />
    </div>
  );
};

export default App;