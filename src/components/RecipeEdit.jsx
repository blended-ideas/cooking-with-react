import React, {useContext} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {Row} from "react-bootstrap";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import {RecipeContext} from "../App";

const RecipeEdit = ({recipe}) => {
    const {handleRecipeChange} = useContext(RecipeContext);

    function handleChange(changes) {
        handleRecipeChange(recipe.id, {...recipe, ...changes});
    }


    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients];
        const index = recipe.ingredients.findIndex(r => r.id === id);
        if (index > -1) {
            newIngredients[index] = ingredient;
            handleChange({ingredients: newIngredients});
        }
    }


    return (
        <div>
            <div className="d-flex justify-content-end font-size-lg">
                <Button className="font-size-lg cursor-pointer" size="sm" variant="outline-primary">&times;</Button>
            </div>

            <Form className="mt-4">
                <div>
                    <Form.Group as={Row} controlId="name">
                        <Form.Label column sm={3}>
                            Name
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Name" value={recipe.name}
                                          onChange={e => handleChange({name: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="cookTime">
                        <Form.Label column sm={3}>
                            Cook Time
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Cook Time" value={recipe.cookTime}
                                          onChange={e => handleChange({cookTime: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="servings">
                        <Form.Label column sm={3}>
                            Servings
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" min="1" placeholder="Servings Count" value={recipe.servings}
                                          onChange={e => handleChange({servings: parseInt(e.target.value) || ''})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="instructions">
                        <Form.Label column sm={3}>
                            Instructions
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control as="textarea" type="text" placeholder="Instructions"
                                          value={recipe.instructions}
                                          onChange={e => handleChange({instructions: e.target.value})}/>
                        </Col>
                    </Form.Group>
                </div>
                <br/>
                <div>
                    <h6>Ingredients</h6>
                    <div className="ml-4">
                        <Row>
                            <Col sm={5}>Name</Col>
                            <Col sm={5}>Amount</Col>
                            <Col sm={2}>-</Col>
                        </Row>
                        {
                            recipe.ingredients.map(ingredient =>
                                <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} handleIngredientChange={handleIngredientChange}/>
                            )
                        }
                    </div>

                    <div className="text-center mt-2">
                        <Button variant="primary" size="sm">Add Ingredient</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default RecipeEdit;