import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const RecipeIngredientEdit = ({ingredient, handleIngredientChange, handleRemoveIngredient}) => {
    function handleChange(changes) {
        const newIngredient = {...ingredient, ...changes};
        handleIngredientChange(ingredient.id, newIngredient);
    }

    return (
        <Row>
            <Col sm={5}>
                <Form.Control type="text" placeholder="Name" value={ingredient.name}
                              onChange={e => handleChange({name: e.target.value})}/>
            </Col>
            <Col sm={5}>
                <Form.Control type="text" placeholder="Quantity" value={ingredient.amount}
                              onChange={e => handleChange({amount: e.target.value})}/>
            </Col>
            <Col sm={2}>
                <Button variant="outline-danger" size="sm" onClick={() => handleRemoveIngredient(ingredient.id)}>&times;</Button>
            </Col>
        </Row>
    );
};

export default RecipeIngredientEdit;