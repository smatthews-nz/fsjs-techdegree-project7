import React, { Component } from 'react';
import{
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'aaxios';

//App components
import apiKey from './config';
import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

class App extends Component {

  constructor(){
    super();
    this.state ={
      photos: [],
      keyword: '',
      loading: true
    }
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)    
    .then(response => {
      this.setState ({
        photos: response.data.photos.photo,
        keyword: query,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });

  } 


  render() {
    
    return(
      <BrowserRouter>
      <div className="container">
        <SearchForm onSearch={ this.performSearch } />
        <Nav search={this.performSearch}/>
     
        <Route path="/" render={ () => <Redirect to="/cats" />} />
        <Route path="/cats" render={ () => <PhotoContainer keyword={this.state.keyword} data={this.state.photos} />} />
        <Route path="/dogs" render={ () => <PhotoContainer keyword={this.state.keyword} data={this.state.photos} />} />
        <Route path="/fish" render={ () => <PhotoContainer keyword={this.state.keyword} data={this.state.photos} />} />
        

      </div>
      </BrowserRouter>
    )
    console.log(this.state.photos)
  }
}



export default App;
