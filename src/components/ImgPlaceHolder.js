import React from 'react';

import '../assets/sass/components/header.scss'

const ImgPlaceHolder = props => {
    
    return(
        <figure>
            <img src={props.img} alt="Classic Tee"/>
        </figure>
    )
}

export default ImgPlaceHolder;