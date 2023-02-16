import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mainmenu.css';
import Footerlogin from "../../components/Footerlogin/Footerlogin";
import { Link } from 'react-router-dom'

function MainMenu() {
    const [imageURL, setImageURL] = useState('');
    const [cocktailId, setCocktailId] = useState('');

    const handleClick = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
            .then(response => {
                const cocktail = response.data.drinks[0];
                const cocktailDetails = {
                    name: cocktail.strDrink,
                    instructions: cocktail.strInstructions,
                    ingredients: []
                };

                for (let i = 1; i <= 15; i++) {
                    const ingredient = cocktail[`strIngredient${i}`];
                    const measure = cocktail[`strMeasure${i}`];

                    if (ingredient && measure) {
                        cocktailDetails.ingredients.push({ ingredient, measure });
                    }
                }

                const queryParams = new URLSearchParams();
                queryParams.append('name', cocktailDetails.name);
                queryParams.append('instructions', cocktailDetails.instructions);
                queryParams.append('strDrinkThumb', cocktail.strDrinkThumb);
                cocktailDetails.ingredients.forEach((ingredient, index) => {
                    queryParams.append(`ingredient${index + 1}`, `${ingredient.ingredient} - ${ingredient.measure}`);
                });

                window.location.href = `/recept?${queryParams.toString()}`;
            })
            .catch(error => {
                console.log(error);
            });
    }

    const getRandomCocktailImage = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => {
                const cocktail = response.data.drinks[0];
                const image = cocktail.strDrinkThumb;
                const id = cocktail.idDrink;
                setImageURL(image);
                setCocktailId(id);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getRandomCocktailImage();
    }, []);

    return (
        <div className="mainmenu">
            <div className="cocktail-tile">
                <h1>Cocktails to discover</h1>
            </div>
            <div className="images-cocktails">
                <Link to={`/recept?id=${cocktailId}`}>
                    <img src={imageURL} alt="Cocktail" onClick={handleClick} />
                </Link>
            </div>
            <Footerlogin />
        </div>
    );
}

export default MainMenu;
