import React from 'react';
import Ingredient from "./Ingredient";

const IngredientList = ({ingredients}) => {
    const ingredientList = ingredients.map(ingredient => <Ingredient key={ingredient.id} {...ingredient}/>)
    return (
        <div>
            {ingredientList}
        </div>
    );
};

export default IngredientList;
