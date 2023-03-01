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
      <footer>
        <span className="text-muted">
          &copy;
          <a className="link-success" href="https://www.linkedin.com/in/andreyrv/">
            2021  Andrey R. Visniewski
          </a>
        </span>
      </footer>
    </Provider>
  );
}

export default App;
