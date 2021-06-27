import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComp from './Component/NavbarComp';
import ListNews from './Component/ListNews';
import HooksUseEffects from './Component/HooksUseEffects';

const App = () => {

  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path='/' component={ListNews} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
