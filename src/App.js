import './App.css';
import Shop from './Shop/Shop';

function App() {
    const products = [
        {
            "id": "623ea772cf792c4151b444a3",
            "picture": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
            "price": 501,
            "name": "Vegetable Salad"
        },
        {
            "id": "623ea772b798820a331b5ac3",
            "picture": "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
            "price": 573,
            "name": "Hamburger and Fries"
        },
        {
            "id": "623ea772e84c212145617ca9",
            "picture": "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg",
            "price": 151,
            "name": "Sliced Bread On Gray Surface"
        },
        {
            "id": "623ea7729dcbe9eef2670f97",
            "picture": "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg",
            "price": 209,
            "name": "Seafood Pizza Melting Cheese"
        },
        {
            "id": "623ea77293a9fb66d101a79c",
            "picture": "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg",
            "price": 496,
            "name": "Sliced Cheese on Brown Table Top"
        },
        {
            "id": "623ea772ade3cb49ff84b6ce",
            "picture": "https://images.pexels.com/photos/1070465/pexels-photo-1070465.jpeg",
            "price": 300,
            "name": "Sliced Bread on Chopping Board"
        },
        {
            "id": "623ea7725d16f5c7a0eee6f9",
            "picture": "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg",
            "price": 70,
            "name": "Cooed Food"
        },
        {
            "id": "623ea772b7ef429639ad7445",
            "picture": "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg",
            "price": 312,
            "name": "Gray Plate"
        },
        {
            "id": "623ea7726da82053b3f18c2c",
            "picture": "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg",
            "price": 322,
            "name": "Round Green Ceramic Plate"
        },
        {
            "id": "623ea772bced59ae2328e077",
            "picture": "https://images.pexels.com/photos/749102/pexels-photo-749102.jpeg",
            "price": 454,
            "name": "Chocolate Coated Ice Creams"
        },
        {
            "id": "623ea772909981a5d5acb3f7",
            "picture": "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg",
            "price": 59,
            "name": "Sliced Steak on Plate"
        }
    ]


    return (
        <div>
            <h1 className='header-title'>Choice your favorite food</h1>
            <div className="card-info">
                <div className="card-container">
                    {
                        products.map(product => <Shop key={product.id} product={product}></Shop>)
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
