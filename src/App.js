import React from 'react';
import { GlobalStyle } from './style.js';


import Header from './header/index';
import Main from './main/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
