import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <Provider>
      <header>
        <Form />
      </header>
      <main>
        <Table />
      </main>
    </Provider>
  );
}

export default App;
