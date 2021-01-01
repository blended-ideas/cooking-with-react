import React, {useEffect, useState} from "react";
import './App.css';
import RecipeList from "./components/RecipeList";
import {Container} from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';

export const RecipeContext = React.createContext();
const RECIPE_KEY = 'cookingWithReact.recipes';

function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const recipesListJSON = localStorage.getItem(RECIPE_KEY);
        setRecipes(recipesListJSON ? JSON.parse(recipesListJSON) : sampleRecipes);
    }, []);

    useEffect(() => {
        localStorage.setItem(RECIPE_KEY, JSON.stringify(recipes));
    }, [recipes]);

    const recipeContextValue = {
        handleRecipeAdd,
        handleRecipeDelete
    }

    function handleRecipeAdd() {
        const newRecipe = {
            id: uuidv4(),
            name: 'New',
            servings: 1,
            cookTime: '1 Min',
            ingredients: [
                {id: uuidv4(), name: 'Name', amount: '1 Tbsp'}
            ],
            instructions: '1.'
        }
        setRecipes((rec) => [...rec, newRecipe]);
    }

    function handleRecipeDelete(id) {
        setRecipes(recipesList => recipesList.filter(rec => rec.id !== id));
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <Container>
                <div className="row">
                    <div className="col-12 col-md-6 border-right">
                        <RecipeList recipes={recipes}/>
                    </div>
                    <div className="col-12 col-md-6">

                    </div>
                </div>
            </Container>
        </RecipeContext.Provider>
    );
}

const sampleRecipes = [
    {
        id: uuidv4(),
        name: 'Roasted Peanuts',
        cookTime: '30 Mins',
        servings: 3,
        ingredients: [
            {name: 'Peanuts', amount: '1 Pound', id: uuidv4()},
        ],
        instructions: '1. Preheat oven to 350 F.\n2. Place the raw peanuts in a single layer inside a shallow baking pan.\n3. Bake for 20 to 25 minutes. For shelled peanuts (peanuts with shell removed), bake for 15 to 20 minutes.\nLet cool 10 minutes before eating.'
    },
    {
        id: uuidv4(),
        name: 'Baked Potato',
        cookTime: '45 Mins',
        servings: 4,
        ingredients: [
            {name: 'Russet potatoes', amount: '1 Pound', id: uuidv4()},
            {name: 'Olive oil', amount: '2tsp', id: uuidv4()},
            {name: 'Kosher salt', amount: 'as required', id: uuidv4()},
            {name: 'Black pepper', amount: 'as required', id: uuidv4()}
        ],
        instructions: '1. Heat oven to 450 F.\n2. Prepare your baking sheet.\n3. Poke your potato all over with a fork.\n4.First bake.\n5.Brush the potato with olive oil.\n6.Second bake'
    }
]

export default App;
