import React from 'react';
import Recipe from "./Recipe";
import {Button} from "react-bootstrap";

const RecipeList = ({recipes}) => {
    return (
        <>
            <div>
                {
                    recipes.map(recipe => (
                        <div className="mb-2" key={recipe.id}>
                            <Recipe {...recipe}/>
                        </div>
                    ))
                }
            </div>
            <div className="text-center my-3">
                <Button variant="primary">Add Recipe</Button>
            </div>
        </>
    );
};

export default RecipeList;
