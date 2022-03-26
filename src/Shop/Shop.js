import React from 'react';
import './Shop.css';
import { BsFillCartFill } from 'react-icons/bs'
const Shop = (props) => {
    const { product, handleAddtoCart } = props;
    const { name, picture, price } = props.product;

    return (

        <div id="product">
            <div className='product-container'>
                <div className="product-info">
                    <img src={picture} alt=""></img>
                    <h3>Name: {name}</h3>
                    <h4>Price: ${price}</h4>
                </div>

                <button onClick={() => handleAddtoCart(product)} className='btn-cart'>
                    AddToCart <BsFillCartFill />
                </button>
            </div>
        </div>

    );
};

export default Shop;