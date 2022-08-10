import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../styles/FilterNumber.css';

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
    columns,
  } = useContext(ApiContext);

  return (
    <div className="pricipal-div">
      <div className="filters-numbers">
        <select
          className="select-filter"
          data-testid="column-filter"
          value={ filterColumn }
          onChange={ (e) => setFilterColumn(e.target.value) }
        >
          { columns.map((e) => (
            <option key={ e } value={ e }>{ e }</option>
          ))}
        </select>

        <select
          className="select-filter"
          data-testid="comparison-filter"
          value={ filterComparison }
          onChange={ (e) => setFiltercomparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          className="input-filter"
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
          <div className="div-result" key={ e.column } data-testid="filter">
            <p className="result-filter">{ `${e.column} ${e.comparison} ${e.value}` }</p>
            <button
              type="button"
              onClick={ () => removeFilter(e) }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterNumber;
