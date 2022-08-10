import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../styles/Header.css';

function FilterName() {
  const { filterByName, setFilterByName } = useContext(ApiContext);
  return (
    <div className="pricipal-div">
      <div className="header">
        <header className="header">
          <img className="logo" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG20.png" alt="Logo StarWars" />
        </header>
      </div>
      <div className="filter-name">
        <input
          className="input-name"
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
