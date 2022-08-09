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
    
    const borrarTarea = (nombre) => {
        let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombre});
        // actualizar el state
        setArregloTareas(arregloModificado);
    }

    // Aqui va el maquetado y un poco de logica
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email" 
                        onChange={(e)=>setTarea(e.target.value.trimStart())} 
                        value={tarea}
                    />
                    <Button variant="primary" type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            {/* Aqui invoco componente */}
            <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas> 
            {/* //parentecis no van por que es ejecutar la funcion antes */}
        </div>
    );
};

export default Formulario;