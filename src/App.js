import React from 'react';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Redirect to='/home'></Redirect>
            </Route>
            <Route path='/home' exact component={Main}></Route>
            <Route path='/solution' exact component={Solution}></Route>
            <Route path='/settledin' exact component={SettledIn}></Route>
            <Route path='/contact' exact component={Contact}></Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>

    </div>
  );
}

export default App;
