import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

function FilterNumber() {
  const {
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFiltercomparison,
    filterValue,
    setFilterValue,
    aplicationFilter,
    multiplesFilters,
    removeAllFilters,
    removeFilter,
  } = useContext(ApiContext);

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ filterColumn }
        onChange={ (e) => setFilterColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ filterComparison }
        onChange={ (e) => setFiltercomparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={ filterValue }
        onChange={ (e) => setFilterValue(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ aplicationFilter }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover todas filtragens
      </button>

      {multiplesFilters.map((e) => (
        <div key={ e.column } data-testid="filter">
          <p>{ `${e.column} ${e.comparison} ${e.value}` }</p>
          <button
            type="button"
            onClick={ () => removeFilter(e) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterNumber;
