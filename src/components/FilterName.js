import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import './Header.css';

function FilterName() {
  const { filterByName, setFilterByName } = useContext(ApiContext);
  return (
    <div>
      <div className="header">
        <header>
          <img className="logo" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG20.png" alt="Logo StarWars" />
        </header>
      </div>
      <div className="filter-name">
        <input
          data-testid="name-filter"
          type="text"
          value={ filterByName.name }
          onChange={ (e) => setFilterByName(e.target.value) }
        />
      </div>
    </div>

  );
}

export default FilterName;
