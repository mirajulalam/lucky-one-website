import './App.css';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart'
import { useState, useEffect } from 'react';

function App() {
    const [cart, setCart] = useState([])
    const [cartOrder, setCartOrder] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    const handleAddtoCart = (product) => {
        const newCart = [...cartOrder, product]
        setCartOrder(newCart)
    }
    return (
        <div>
            <h1 className='header-title'>Choice your favorite food</h1>

            <div className="card-info">
                <div className="card-container">
                    {
                        cart.map(product => <Shop
                            key={product.id}
                            product={product}
                            handleAddtoCart={handleAddtoCart}
                        ></Shop>)
                    }
                </div>
                <div className="order-container">
                    <h1>Selected food</h1>
                    <div>
                        {
                            cartOrder.map(items => <Cart key={items.id} items={items} />)
                        }
                    </div>
                    <button className='btn-select'>Choce 1 for me</button>
                    <br />
                    <button className='btn-select1'>Reset Again</button>
                </div>
            </div>
        </div>
    );
}

export default App;
