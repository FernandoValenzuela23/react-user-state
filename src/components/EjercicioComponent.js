import React, { useState } from 'react'
import PropTypes from "prop-types";

export const EjercicioComponent = ({yearParam}) => {
    
    const [year, setAnio] = useState(yearParam);

    const cambiarAnio = (incremento) => {
        yearParam = year + incremento;
        setAnio(yearParam);
    } 

    const cambiarValorAnio = (valor) => {
        if(!isNaN(Number(valor))) {
            setAnio(valor);
        } else {
            console.log('Se requiere un numero');
        }        
    }

  return (
    <div>
        <h1>Ejercicio 1</h1>
        <strong className='verde'>{ year }</strong>
        <p>
            <button onClick={e => cambiarAnio(-1)} >-</button> <button onClick={e => cambiarAnio(1)} >+</button>
            <br/>
            <input type="number" onChange={e => cambiarValorAnio(e.target.value)} placeholder="ingresa un valor numerico" />
        </p>

    </div>
  )
}

EjercicioComponent.propTypes = {
    yearParam: PropTypes.number.isRequired
}
