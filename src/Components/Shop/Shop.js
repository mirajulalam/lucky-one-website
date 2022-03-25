import React, { useEffect, useState } from 'react';
import './Shop.css'
const Card = () => {
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>This is card</h1>
            <div>
                {
                    card.map(item => console.log(item))
                }
            </div>
        </div>
    );
};

export default Card;