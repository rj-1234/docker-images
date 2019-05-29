import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
