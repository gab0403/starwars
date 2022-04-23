import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFiltercomparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState(0);
  const [filterApiPlanets, setFilterApiPlanets] = useState([]);
  const [multiplesFilters, setMultiplesFilters] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      setApi(results);
    };
    getPlanets();
  }, []);

  const aplicationFilter = () => {
    setMultiplesFilters(
      (prevState) => [...prevState,
        { column: filterColumn, comparison: filterComparison, value: filterValue }],
    );
    console.log('click');
  };

  useEffect(() => {
    let newArray = [...api];
    multiplesFilters.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        const filter = (newArray.filter((planet) => Number(planet[column]) > value));
        newArray = filter;
      } else if (comparison === 'menor que') {
        const filter = (newArray.filter((planet) => Number(planet[column]) < value));
        newArray = filter;
      } else if (comparison === 'igual a') {
        const filter = (newArray.filter(
          (planet) => Number(planet[column]) === Number(value),
        ));
        newArray = filter;
      }
    });

    setFilterApiPlanets(newArray);
  }, [api, multiplesFilters]);

  function removeAllFilters() {
    setMultiplesFilters([]);
  }

  function removeFilter(e) {
    const arrayFilter = [...multiplesFilters];
    arrayFilter.splice(multiplesFilters.indexOf(e), 1);
    setMultiplesFilters(arrayFilter);
  }

  const contextApi = {
    api,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFiltercomparison,
    filterValue,
    setFilterValue,
    filterApiPlanets,
    setFilterApiPlanets,
    aplicationFilter,
    multiplesFilters,
    removeAllFilters,
    removeFilter,
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
