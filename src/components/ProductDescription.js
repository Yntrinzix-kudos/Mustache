import React, {Component} from 'react';

import '../assets/sass/components/products.scss'

class ProductDescription extends Component {

    state={
        size: null,
        activeButton: null,
        hasError: false
    }

    buttonSizeHandler = (newSize, id) => {
        this.setState({
            size: newSize,
            activeButton: id
        });
    }

    addButtonHandler = () => {
        if (this.state.size){

            this.props.getVal(this.state.size);
            this.setState({hasError: false})

        } else{

            this.setState({hasError: true})

        }
    }

    activeButtonHandler = id => {
        if(this.state.activeButton === id) return 'btn--active';
    }

    render(){

        let props = this.props;
        let state = this.state;

        return(
            <div className='product-description'>
    
                <h3 className='product-description__title'>
                    {props.title}
                </h3>
    
                <div className='product-description__price'>
                    <strong> ${props.price} </strong>
                </div>
    
                <p className='product-description__desc'>
                    {props.desc}
                </p>
    
                <div className='product-description__footer'>

                    <div className='product-description__size'>
    
                        <span className='palette-2'>SIZE</span> 
                        <span className='red'>*</span> 
                        <span className='palette-1'> {state.size} </span>
    
                    </div>

                    <div className='product-description__buttons'>

                        <div className={`btn ${this.activeButtonHandler(1)}`} onClick={()=> this.buttonSizeHandler('S', 1)}>S</div>

                        <div className={`btn ${this.activeButtonHandler(2)}`} onClick={()=> this.buttonSizeHandler('M', 2)}>M</div>

                        <div className={`btn ${this.activeButtonHandler(3)}`} onClick={()=> this.buttonSizeHandler('L', 3)}>L</div>
                        
                    </div>

                    <button onClick={this.addButtonHandler}>ADD TO CART</button>
                    { state.hasError ? <div className='error-message'>Nothing is selected</div> : <> </>}
                </div>
    
            </div>
        )
    }
    
}

export default ProductDescription;