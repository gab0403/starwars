import React from 'react';
import './App.css';
import ApiProvider from './context/ApiProvider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <ApiProvider>
      <Filters />
      <Table />
    </ApiProvider>
  );
}

export default App;
