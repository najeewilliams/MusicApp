import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";

import login from './Pages_/Login';
import LanderPage from './Pages_/LanderPage';

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/" component={login}/>
        <Route path="/MusicHome" component ={LanderPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
