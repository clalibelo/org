import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //destructuracion
    //crear una constante y sacar las llaves que nos interesan de un cierto objetoconsole.log(props.type)
    //la ventaja de esto es que si type no esta definido le puedes dar un valor que quieras 
    const {type = "text" }= props
    


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;