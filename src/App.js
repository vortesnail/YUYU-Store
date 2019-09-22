import React from 'react';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header/index';
import Main from './main/index';
import Solution from './solution/index';
import SettledIn from './settledin/index';
import Contact from './contact/index';
import Footer from './footer/index';

import store from './store/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/solution' exact component={Solution}></Route>
            <Route path='/settledin' exact component={SettledIn}></Route>
            <Route path='/contact' exact component={Contact}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
