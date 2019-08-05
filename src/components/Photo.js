import React from 'react';

const Photo = (props) => (
    <li>
        <img src={props.url} alt={props.keyword}></img>
    </li>
);

export default Photo;

