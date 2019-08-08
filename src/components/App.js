import React, { Component } from 'react';
import{
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

//App components

import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';
import Home from './Home';

class App extends Component {


  render() {
    
    return(
      
      <div className="container">

        <BrowserRouter>
        <SearchForm />
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:name" component={PhotoContainer} />
        </Switch>
        </BrowserRouter>
      </div>
     
    )
  }
}



export default App;
