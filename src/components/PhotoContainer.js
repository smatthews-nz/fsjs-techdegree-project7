import React, {Component} from 'react';
import axios from 'aaxios';

//App components
import apiKey from './config';
import Photo from './Photo';
import loading from './loading.svg';
import NotFound from './NoResults';

class PhotoContainer extends Component {

    state = {
        photos: [],
        isLoading: false
    }
    
    //use the axios get method to retrieve the queried images from the flickr api
    performSearch = (query) => {
          //for every search query, reset the isLoading state to true.
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

      //when component loads, use the performSearch method on any matched urls
      componentDidMount() {
        this.performSearch(this.props.match.params.name);
      }

      //when component updates, check keys, if different, performSearch method is called on the new key
      componentDidUpdate(prevProps){
        if(this.props.location.key !== prevProps.location.key) {
            this.performSearch(this.props.match.params.name);
            }
      }


      render() {
        return(

            <div className="photo-container">
                {/* if loading leave h2 blank. */}
                <h2> {
                        ( this.state.isLoading ) ? '' : `Photos of ${this.props.match.params.name}`
                    }
                </h2>
                    <ul>
                        {
                            //check if loading
                            ( this.state.isLoading ) ? <img className="loading-svg" src={loading} alt="loading" /> :
                            //if photos > 0, map over the photos and create the lis
                            ( this.state.photos.length > 0 ) ? this.state.photos.map( 
                                photo => 
                                //using the returned information, builds the URL string
                                <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
                            )
                            :
                            // if No photos, load the not found component
                             <NotFound />
                        }
                    </ul>
    
            </div>
        );
      }
}
    
    
    

export default PhotoContainer;