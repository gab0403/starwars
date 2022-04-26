import React from 'react';
import ApiProvider from './context/ApiProvider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <ApiProvider>
      <FilterName />
      <FilterNumber />
      <Table />
    </ApiProvider>
  );
}

export default App;
