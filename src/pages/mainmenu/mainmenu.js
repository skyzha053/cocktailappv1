import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mainmenu.css';
import Footerlogin from "../../components/Footerlogin/Footerlogin";
import { Link } from 'react-router-dom'

function MainMenu() {
    const [imageURLs, setImageURLs] = useState([]);
    const [cocktailId, setCocktails] = useState([]);
    const [cocktailNames, setCocktailNames] = useState([])

    const handleClick = (id) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
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

                window.location.href = `/recept?id=${id}&${queryParams.toString()}`;
            })
            .catch(error => {
                console.log(error);
            });
    }
    const getRandomCocktails = () => {
        Promise.all([
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        ]).then(responses => {
            const cocktails = responses.map(response => response.data.drinks[0]);
            setImageURLs(cocktails.map(cocktail => cocktail.strDrinkThumb));
            setCocktails(cocktails.map(cocktail => cocktail.idDrink));
            setCocktailNames(cocktails.map(cocktail => cocktail.strDrink))
        }).catch(error => {
            console.log(error);
        });
    }

    const [imageURLIconic, setImageURLsIconic] = useState([]);
    const [cocktailIdIconic, setCocktailsIconic] = useState([]);
    const [cocktailNameIconic, setCocktailNamesIconic] = useState([]);
    const getIconic = () =>{
        Promise.all([
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11117'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178357'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002')
        ]).then(responses => {
            const cocktails = responses.map(response => response.data.drinks[0]);
            setImageURLsIconic(cocktails.map(cocktail => cocktail.strDrinkThumb));
            setCocktailsIconic(cocktails.map(cocktail => cocktail.idDrink));
            setCocktailNamesIconic(cocktails.map(cocktail => cocktail.strDrink))
        }).catch(error => {
            console.log(error);
        });

    }

    const [imageURLClassics, setImageURLsClassics] = useState([]);
    const [cocktailIdClassics, setCocktailsClassics] = useState([]);
    const [cocktailNameClassics, setCocktailNamesClassics] = useState([]);
    const getClassics = () =>{
        Promise.all([
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11202'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178325'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17212')
        ]).then(responses => {
            const cocktails = responses.map(response => response.data.drinks[0]);
            setImageURLsClassics(cocktails.map(cocktail => cocktail.strDrinkThumb));
            setCocktailsClassics(cocktails.map(cocktail => cocktail.idDrink));
            setCocktailNamesClassics(cocktails.map(cocktail => cocktail.strDrink))
        }).catch(error => {
            console.log(error);
        });

    }

    useEffect(() => {
        getRandomCocktails();
        getIconic()
        getClassics()
    }, []);

    return (
        <div className="mainmenu">
            <div className="cocktail-tile">
                <h1>Cocktails to discover</h1>
            </div>
            <div className="cocktail-images"></div>
            <div className="images-cocktails">
                <Link to={`/recept?id=${cocktailId[0]}`}>
                    <img src={imageURLs[0]} alt="Cocktail" onClick={() => handleClick(cocktailId[0])} />
                </Link>
                <div className="cocktail-name">
                    <p>{cocktailNames[0]}</p>
                </div>
            </div>
            <div className="images-cocktails">
                <Link to={`/recept?id=${cocktailId[1]}`}>
                    <img src={imageURLs[1]} alt="Cocktail" onClick={() => handleClick(cocktailId[1])} />
                </Link>
                <div className="cocktail-name">
                    <p>{cocktailNames[1]}</p>
                </div>
            </div>
            <div className="images-cocktails">
                <Link to={`/recept?id=${cocktailId[2]}`}>
                    <img src={imageURLs[2]} alt="Cocktail" onClick={() => handleClick(cocktailId[2])} />
                </Link>
                <div className="cocktail-name">
                    <p>{cocktailNames[2]}</p>
                </div>
            </div>
            <div className="images-cocktails">
                <Link to={`/recept?id=${cocktailId[3]}`}>
                    <img src={imageURLs[3]} alt="Cocktail" onClick={() => handleClick(cocktailId[3])} />
                </Link>
                <div className="cocktail-name">
                    <p>{cocktailNames[3]}</p>
                </div>
            </div>
            <div className="images-cocktails">
                <Link to={`/recept?id=${cocktailId[4]}`}>
                    <img src={imageURLs[4]} alt="Cocktail" onClick={() => handleClick(cocktailId[4])} />
                </Link>
                <div className="cocktail-name">
                    <p>{cocktailNames[4]}</p>
                </div>
            </div>

            <div className="container-classic">
                <div>
                    <h2 className="title-classic">Classic cocktails</h2>
                </div>
                <div className="images-row">
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdClassics[0]}`}>
                            <img src={imageURLClassics[0]} alt="Cocktail" onClick={() => handleClick(cocktailIdClassics[0])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameClassics[0]}</p>
                        </div>
                    </div>
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdClassics[1]}`}>
                            <img src={imageURLClassics[1]} alt="Cocktail" onClick={() => handleClick(cocktailIdClassics[1])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameClassics[1]}</p>
                        </div>
                    </div>
                </div>
                <div className="images-row">
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdClassics[2]}`}>
                            <img src={imageURLClassics[2]} alt="Cocktail" onClick={() => handleClick(cocktailIdClassics[2])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameClassics[2]}</p>
                        </div>
                    </div>
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdClassics[3]}`}>
                            <img src={imageURLClassics[3]} alt="Cocktail" onClick={() => handleClick(cocktailIdClassics[3])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameClassics[3]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-iconic">
                <div>
                    <h2 className="title-iconic">Iconische cocktails</h2>
                </div>
                <div className="images-row">
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdIconic[0]}`}>
                            <img src={imageURLIconic[0]} alt="Cocktail" onClick={() => handleClick(cocktailIdIconic[0])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameIconic[0]}</p>
                        </div>
                    </div>
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdIconic[1]}`}>
                            <img src={imageURLIconic[1]} alt="Cocktail" onClick={() => handleClick(cocktailIdIconic[1])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameIconic[1]}</p>
                        </div>
                    </div>
                </div>
                <div className="images-row">
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdIconic[2]}`}>
                            <img src={imageURLIconic[2]} alt="Cocktail" onClick={() => handleClick(cocktailIdIconic[2])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameIconic[2]}</p>
                        </div>
                    </div>
                    <div className="image">
                        <Link to={`/recept?id=${cocktailIdIconic[3]}`}>
                            <img src={imageURLIconic[3]} alt="Cocktail" onClick={() => handleClick(cocktailIdIconic[3])} />
                        </Link>
                        <div className="cocktail-name-classic-iconic">
                            <p>{cocktailNameIconic[3]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footerlogin />
        </div>
    );
}

export default MainMenu;