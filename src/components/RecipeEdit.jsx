import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {Row} from "react-bootstrap";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

const RecipeEdit = () => {
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
                            <Form.Control type="text" placeholder="Name"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="cookTime">
                        <Form.Label column sm={3}>
                            Cook Time
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Cook Time"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="servings">
                        <Form.Label column sm={3}>
                            Servings
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" min="1" placeholder="Servings Count"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="instructions">
                        <Form.Label column sm={3}>
                            Instructions
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control as="textarea" type="text" placeholder="Instructions"/>
                        </Col>
                    </Form.Group>
                </div>
                <br/>
                <div>
                    <h6>Ingredients</h6>
                    <Row>
                        <Col sm={5}>Name</Col>
                        <Col sm={5}>Amount</Col>
                        <Col sm={2}>-</Col>
                    </Row>

                    <RecipeIngredientEdit/>

                    <div className="text-center mt-2">
                        <Button variant="primary" size="sm">Add Ingredient</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default RecipeEdit;