import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const agregarGasto = e => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }

        //Pasar al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //Resetear el form
        guardarNombre('');
        guardarCantidad(0);
        
        
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            {error ? 
            <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> 
            :
            null}
            <h2>Agrega tus gastos aquí</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}

                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}

                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Formulario;