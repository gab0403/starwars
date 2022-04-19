import React from 'react';
import './App.css';
import ApiProvider from './context/ApiProvider';
import Table from './components/Table';

function App() {
  return (
    <ApiProvider>
      <Table />
    </ApiProvider>
  );
}

export default App;
