import React, { Component } from 'react';
import{
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Nav from './Nav';
import SearchForm from './SearchForm';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
      </div>
      </BrowserRouter>
    )
  }
}



export default App;
