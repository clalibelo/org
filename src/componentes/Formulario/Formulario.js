import { useState } from "react";

//Importar css
import "./Formulario.css"

//importamos Campo aqui porque es un hijo de formulario, va dentro del formulario
import Campo from "../Campo";

//Las opciones tambien son hijo de formulario
import ListaOpciones from "../ListaOpciones";

//El boton tambien 
import Boton from "../Boton";


//crear funcion(componente) de otra manera 
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

//estas constantes son para el nuevo formulario para agregar otros equipos a la pagina 
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    //prevenir el comportamiento normal del formulario
    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>


{/*nuevo equipo */}
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar Titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
               Registrar equipo
            </Boton>
            </form>
    </section>
}

export default Formulario