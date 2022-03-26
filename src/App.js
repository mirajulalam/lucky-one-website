import './App.css';
import Shop from './Shop/Shop';
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
            <div>
                {
                    cartOrder.map(items => (<h1 key={items.id}>
                        {items.name}
                    </h1>))
                }
            </div>
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
                    <h1>order summary</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
