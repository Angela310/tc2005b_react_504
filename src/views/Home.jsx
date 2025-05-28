import React, { useState } from 'react';
import Boton from '../components/Boton.jsx';

const Home = () => {
    const [count, setCount] = useState(0);

    const suma = () => {
        setCount(count + 1);
        console.log(count);
    };
    const resta = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1> Mi app en React {count}</h1>
            <Boton onclick={suma} texto = "suma"/>
            <Boton onclick={resta} texto ="resta"/>
        </div>
    );
};

export default Home;