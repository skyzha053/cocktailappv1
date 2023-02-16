import React from 'react';
import './recept.css';
import { useLocation } from 'react-router-dom';
import Footerlogin from '../../components/Footerlogin/Footerlogin';

function Recept() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const instructions = queryParams.get('instructions');
    const strDrinkThumb = queryParams.get('strDrinkThumb');
    const ingredients = [];

    let i = 1;
    while (queryParams.get(`ingredient${i}`)) {
        ingredients.push(queryParams.get(`ingredient${i}`));
        i++;
    }

    return (
        <div className="recepten-container">
            <div className="recepten-content">
                <h2>{name}</h2>
                <p>{instructions}</p>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="recepten-image">
                <img src={strDrinkThumb} alt={name} />
            </div>
            <div className="footer-container">
                <Footerlogin />
            </div>
        </div>
    );
}

export default Recept;
