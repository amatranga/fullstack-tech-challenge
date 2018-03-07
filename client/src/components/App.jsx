import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Ledger from './Ledger';
import Main from './Main'
import NotFound from './NotFound';

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/ledger/*" component={Ledger} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
