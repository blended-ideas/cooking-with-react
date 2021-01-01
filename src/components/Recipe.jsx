import React from 'react';
import {Button, ButtonGroup, Card} from "react-bootstrap";
import IngredientList from "./IngredientList";

const Recipe = ({name, cookTime, servings, instructions, ingredients}) => {
    return (
        <Card>
            <Card.Header className="d-flex justify-content-between">
                <h4>{name}</h4>

                <ButtonGroup size="sm">
                    <Button variant="primary" size="sm">Edit</Button>
                    <Button variant="outline-danger" size="sm">Delete</Button>
                </ButtonGroup>
            </Card.Header>

            <Card.Body>
                <div>
                    <strong>Cook Time:</strong> {cookTime}
                </div>
                <div>
                    <strong>Servings:</strong> {servings}
                </div>
                <div>
                    <strong>Instructions:</strong>
                    <div style={{whiteSpace: 'pre-wrap'}}>{instructions}</div>
                </div>

                <div className="mt-2">
                    <strong>Ingredients:</strong>
                    <IngredientList ingredients={ingredients}/>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Recipe;
