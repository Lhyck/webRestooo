import React from 'react';

import { FindUs, Footer, Gallery, Header, Productos, Laurels, SpecialMenu, Usuarios } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header/>
    <Usuarios/>
    <Productos/>
    <SpecialMenu />
    <Footer />
  </div>
);

export default App;
