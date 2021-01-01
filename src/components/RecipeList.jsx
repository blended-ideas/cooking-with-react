import React, {useContext} from 'react';
import Recipe from "./Recipe";
import {Button} from "react-bootstrap";
import {RecipeContext} from "../App";

const RecipeList = ({recipes}) => {
    const {handleRecipeAdd} = useContext(RecipeContext);
    return (
        <>
            {
                recipes.map(recipe => (
                    <div className="mb-2" key={recipe.id}>
                        <Recipe {...recipe}/>
                    </div>
                ))
            }
            <div className="text-center my-3">
                <Button variant="primary" onClick={() => handleRecipeAdd()}>
                    Add Recipe
                </Button>
            </div>
        </>
    );
};

export default RecipeList;
