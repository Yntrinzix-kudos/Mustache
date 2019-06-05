import React, { Component } from 'react';
import update from 'immutability-helper';

import Header from '../components/Header';
import ImgPlaceHolder from '../components/ImgPlaceHolder';
import ProductDescription from '../components/ProductDescription';

import classicTee from '../assets/images/classic-tee.jpg';

class ProductDetail extends Component {

	state = {
		selection:[],
		product:{
			title: 'Classic Tee',
			price: 75,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		}
	}

	addToCart = (item) => {

		const newItem = update(this.state.selection, {
			$push: [item]
		});

		this.setState({selection: newItem});
	}

	render() {

		

		const state = this.state;
		return (
			<>
				<Header data={this.state} img={classicTee}/>

				<section className='container container--padded'>

					<div className='row'>

						<div className='col-lg-6 col-md-12'>

							<ImgPlaceHolder img={classicTee}/>

						</div>

						<div className='col-lg-6 col-md-12'>

							<ProductDescription
								title={state.product.title}
								price={state.product.price}
								desc={state.product.desc}
								getVal={this.addToCart}
							/>

						</div>
					</div>
					
				</section>

			</>
		);
	}
}
export default ProductDetail;