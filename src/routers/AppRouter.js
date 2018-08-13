import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Articles from '../Components/Articles';
import Article from '../Components/Article';
import User from '../Components/User';
import Header from '../Components/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div id="container">
      <Header />
      <Switch>
        <Route path="/posts" component={Articles} exact={true} />
        <Route path="/post/:id" component={Article} />
        <Route path="/user/:id" component={User} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
