import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const RecipeIngredientEdit = () => {
    return (
        <Row>
            <Col sm={5}>
                <Form.Control type="text" placeholder="Name"/>
            </Col>
            <Col sm={5}>
                <Form.Control type="text" placeholder="Quantity"/>
            </Col>
            <Col sm={2}>
                <Button variant="outline-danger" size="sm">&times;</Button>
            </Col>
        </Row>
    );
};

export default RecipeIngredientEdit;