import React from 'react';

import { Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Usuarios } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header/>
    <Usuarios />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
