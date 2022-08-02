import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const Formulario = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Enter email" />
                    <Button variant="primary" type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            {/* Aqui invoco componente */}
            <ListaTareas></ListaTareas>
        </div>
    );
};

export default Formulario;