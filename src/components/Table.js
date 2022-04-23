import React, { useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';

function Table() {
  const { api, filterByName,
    filterApiPlanets, setFilterApiPlanets } = useContext(ApiContext);

  useEffect(() => {
    const filterApiName = api.filter(
      (planet) => planet.name.toLowerCase()
        .includes(filterByName.toString().toLowerCase()),
    );

    setFilterApiPlanets(filterApiName.length > 0 ? filterApiName : api);
  }, [api, filterByName]);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filterApiPlanets.map((e) => (
            <tr key={ e.name }>
              <td>{ e.name }</td>
              <td>{ e.rotation_period }</td>
              <td>{ e.orbital_period }</td>
              <td>{ e.diameter }</td>
              <td>{ e.climate }</td>
              <td>{ e.gravity }</td>
              <td>{ e.terrain }</td>
              <td>{ e.surface_water }</td>
              <td>{ e.population }</td>
              {e.films.map((film) => (
                <td key={ film }>
                  { film }
                </td>)) }
              <td>{ e.created }</td>
              <td>{ e.edited }</td>
              <td>{ e.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
