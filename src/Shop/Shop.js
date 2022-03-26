import React from 'react';
import './Shop.css';
const Shop = (props) => {
    console.log(props.product)
    const { name, picture, price } = props.product;
    return (
        <div>
            <div className="product">
                <div className="product-info">
                    <img src={picture} alt=""></img>
                    <h3>Name: {name}</h3>
                    <h4>Price: ${price}</h4>
                </div>
                <div>
                    <button className='btn-cart'>
                        AddToCart
                    </button>
                </div>
            </div>

        </div>

    );
};

export default Shop;