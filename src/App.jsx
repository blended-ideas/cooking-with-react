import React from "react";
import './App.css';
import RecipeList from "./components/RecipeList";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container>
            <div className="row">
                <div className="col-12 col-md-6 border-right">
                    <RecipeList recipes={sampleRecipes}/>
                </div>
                <div className="col-12 col-md-6">

                </div>
            </div>
        </Container>
    );
}

const sampleRecipes = [
    {
        id: 1,
        name: 'Roasted Peanuts',
        cookTime: '30 Mins',
        servings: 3,
        ingredients: [
            {name: 'Peanuts', amount: '1 Pound', id: 1},
        ],
        instructions: '1. Preheat oven to 350 F.\n2. Place the raw peanuts in a single layer inside a shallow baking pan.\n3. Bake for 20 to 25 minutes. For shelled peanuts (peanuts with shell removed), bake for 15 to 20 minutes.\nLet cool 10 minutes before eating.'
    },
    {
        id: 2,
        name: 'Baked Potato',
        cookTime: '45 Mins',
        servings: 4,
        ingredients: [
            {name: 'Russet potatoes', amount: '1 Pound', id: 1},
            {name: 'Olive oil', amount: '2tsp', id: 2},
            {name: 'Kosher salt', amount: 'as required', id: 3},
            {name: 'Black pepper', amount: 'as required', id: 4}
        ],
        instructions: '1. Heat oven to 450 F.\n2. Prepare your baking sheet.\n3. Poke your potato all over with a fork.\n4.First bake.\n5.Brush the potato with olive oil.\n6.Second bake'
    }
]

export default App;
