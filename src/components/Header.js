import React from 'react';

import ImgPlaceholder from './ImgPlaceHolder';

import '../assets/sass/components/header.scss'
import { __values } from 'tslib';

const mergeItemsBySize = data => {

    if(!data) return [];

    let result = data.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {})

    return result
}

const Header = props => {

    const data = props.data.selection
    const productDetails = props.data.product
    return(
        <header>
            <div className='container header'>

                <div className='header__cart'>
                
                    <button className='header__cart-indicator'>My Cart ({data.length})</button>
                    <div className='header__cart-details'>

                    {Object.keys(mergeItemsBySize(data)).map((key, index) => {
                        
                        const itemQuantity = Object.values(mergeItemsBySize(data))[index];
                        const itemSize = key;

                        let render =  <div className='header__cart-item' key={`${key}-${index}`}>

                            <ImgPlaceholder img={props.img} />

                            <div>
                                <div className='header__cart-item-title'>{productDetails.title}</div>
                                <div className='header__cart-item-price'>{itemQuantity} x <strong>${productDetails.price}</strong></div>
                                <div className='header__cart-item-size'>Size: {itemSize}</div>

                            </div>

                        </div>

                        return render
                    })}
                        
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header;