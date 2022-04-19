import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      setApi(results);
    };
    getPlanets();
  }, []);

  const contextApi = {
    api,
    filterByName,
    setFilterByName,
  };

  return (
    <ApiContext.Provider value={ contextApi }>
      { children }
    </ApiContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default Provider;
