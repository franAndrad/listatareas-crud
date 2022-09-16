import React, { useState , useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import './formulario.css';

const Formulario = () => {
    // Aqui va la logica
    // crear un state
    const URL = process.env.REACT_APP_API_TAREAS;
    const [arregloTareas, setArregloTareas] = useState([]);
    const [tarea, setTarea] = useState('');
    
    // ciclo de vida del componente
    useEffect(() => {
        consultarAPI();
    },[])
    
    // cargar tareas
    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            const listaTareas = await respuesta.json();
            setArregloTareas(listaTareas);
            console.log(listaTareas)
        } catch (error) {
            console.log(error);
        }
    }
    
    // crear tarea
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("enviar");
        // validamos
        const nuevaTarea = {
            tarea
        }

        try {
            const peticion = await fetch(URL,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevaTarea)
            })
            if(peticion.status === 201){
                console.log("se agrego la tarea")
            }
        } catch (error) {
            console.log(error);
        }
        recargarPagina();
    }
    
    // eliminar tarea
    const borrarTarea = async (id) => {
        try {
            const peticion = await fetch(URL+"/"+id,
            {
                method: "DELETE"
            }
            );
            if (peticion.status === 200) {
                console.log("producto eliminado")
            }
        } catch (error) {
            console.log(error);
        }
        recargarPagina();
    }

    // funcion para recargar la pagina
    const recargarPagina = () => {
        window.location.reload(true);
    }

    // Aqui va el maquetado y un poco de logica
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese una tarea" 
                        onChange={(e)=>setTarea(e.target.value.trimStart())} 
                        value={tarea}
                    />
                    <Button variant="primary" type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            {/* //Aqui invoco componente */}
            <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas> 
            {/* //parentecis no van por que es ejecutar la funcion antes */}
        </div>
    );
};

export default Formulario;