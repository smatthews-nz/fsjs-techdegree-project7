import React, { Component } from 'react';
import{
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import '../css/index.css';

//App components

import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';
import Home from './Home';
import PageNotFound from './PageNotFound';

class App extends Component {


  render() {
    
    return(
      
      <div className="container">

        <BrowserRouter>
        <SearchForm />
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:name" component={PhotoContainer} />
        <Route component={PageNotFound} />
        </Switch>
        </BrowserRouter>
      </div>
     
    )
  }
}



export default App;
