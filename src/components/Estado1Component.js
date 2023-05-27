import React, {useState} from 'react'

export const Estado1Component = () => {

    /*  Esto no funciona como en angular donde con el cambio en la variable se refleja en el html
        ahi es donde entran los hooks y especificamente el hook useState 

    let nombre = 'Fernando';

    const cambiarNombre = e => {
        nombre = 'Malaquias'
    }
    */

   const [nombre, setNombre] = useState('Fernando');

    const cambiarNombre = (nom) => {
        setNombre(nom)
    }

  return (
    <div>
        <h3>Primer estado</h3>
        <strong className={nombre.length <= 5 ? 'verde' : 'rojo'}>{ nombre }</strong>
        <br/>
        <button onClick={ e => cambiarNombre('Firulais') }>Cambiar nombre</button>
        <br/>
        <input type="text" placeholder="cambiar nombre" onKeyUp={e => cambiarNombre(e.target.value)} />
    </div>
  )
}
