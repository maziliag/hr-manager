import React from 'react';
import '../App.css'

import { Header } from '../components/header/header'
import { Menu } from '../components/menu/menu'
//import { Table } from '../components/table/table';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appBody">
        <Menu />

      </div>
    </div>
  );
}

export default App;
