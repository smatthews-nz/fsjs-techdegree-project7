import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
    const results = props.data;

    console.log(results);

   let photos;

    if(results.length > 0){
       photos = results.map( photo => 
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
        );
    }

    return(
        <div className="photo-container">
        <h2> Photos of {props.keyword}</h2>
            <ul>
                {photos}
            </ul>
        </div>

   );
}

export default PhotoContainer;