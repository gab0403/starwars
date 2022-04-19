import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

function Filters() {
  const { filterByName, setFilterByName } = useContext(ApiContext);
  return (

    <input
      data-testid="name-filter"
      type="text"
      value={ filterByName.name }
      onChange={ (e) => setFilterByName(e.target.value) }
    />
  );
}

export default Filters;
