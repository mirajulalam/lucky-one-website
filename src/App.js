import './App.css';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart'
import { useState, useEffect } from 'react';

function App() {
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([])
    const [cartOrder, setCartOrder] = useState([])


    const handleAddtoCart = (product) => {
        const newCart = [...cartOrder, product]
        setCartOrder(newCart)
    }

    const handleRandom = () => {
        const random = cartOrder[Math.floor(Math.random() * cartOrder.length)]
        setRandom(random)
    }
    const handleClearCart = () => setCartOrder([]) || setRandom([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

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
                    <div className='order-info'>
                        <h1>Selected food</h1>
                        <div>
                            {
                                cartOrder.map(items => <Cart key={items.id} items={items} />)
                            }
                        </div>
                        <h2>{random.name}</h2>
                        <button onClick={handleRandom} className='btn-select'>Choce 1 for me</button>
                        <br />
                        <div>
                            <button onClick={handleClearCart} className='btn-select1'>Reset Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='Queation-title'>React Question</h1>
                <h2>Question No 1: How react work?</h2>
                <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates.At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes. Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser).React Scenes is a simple way to create/test your react components inside your app. This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.</p>
                <h2>Question No 2: Props vs state?</h2>
                <h5>Props</h5>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                <h5>State</h5>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                <h2>Question No 3: How useState work?</h2>
                <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.The useState hook allows us declare one or more state variables in function components. Under the hood, React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component (trust me when I say this — that is some JavaScript closures magic happening there).If you want to set an initial value for the variable, pass the initial value as an argument to the useState function. When React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array, as shown in figure 5.The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components.</p>
            </div>
        </div>

    );
}

export default App;
