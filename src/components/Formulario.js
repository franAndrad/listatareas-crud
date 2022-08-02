import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import './formulario.css';

const Formulario = () => {
    // Aqui va la logica
    // crear un state
    const [arregloTareas, setArregloTareas] = useState([]);
    const [tarea, setTarea] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloTareas([...arregloTareas,tarea]);
        setTarea('');
    }

    // Aqui va el maquetado y un poco de logica
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email" 
                        onChange={(e)=>setTarea(e.target.value.trim())} 
                        value={tarea}
                    />
                    <Button variant="primary" type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            {/* Aqui invoco componente */}
            <ListaTareas arregloTareas={arregloTareas}></ListaTareas>
        </div>
    );
};

export default Formulario;