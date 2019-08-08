import React, {Component} from 'react';
import axios from 'aaxios';

//App components
import apiKey from './config';
import Photo from './Photo';
import loading from './loading.svg';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    state = {
        photos: [],
        isLoading: false
    }
    
      performSearch = (query) => {
        this.setState({
            isLoading: true
            })
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)    
        .then(response => {
          this.setState ({
            photos: response.data.photos.photo,
            keyword: query,
            isLoading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
      } 

      componentDidMount() {
        this.performSearch(this.props.match.params.name);
      }

      componentDidUpdate(prevProps){

        if(this.props.location.key !== prevProps.location.key) {
            this.performSearch(this.props.match.params.name);
            
            }
      }
      render() {
        return(

            <div className="photo-container">
    
                <h2> {
                        ( this.state.isLoading ) ? '' : `Photos of ${this.props.match.params.name}`
                    }
                </h2>
                    <ul>
                        {
                            ( this.state.photos.length > 0 ) ? this.state.photos.map( 
                                photo => 
                                <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
                            )
                            :
                            ( this.state.isLoading ) ? <img className="loading-svg" src={loading} alt="loading" /> : <NotFound />
                        }
                    </ul>
    
            </div>
        );
      }
}
    
    
    

export default PhotoContainer;