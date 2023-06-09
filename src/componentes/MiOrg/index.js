//importantdo Hook 
import { useState } from "react"

//importando css
import "./MiOrg.css"


//se le tiene que agregar una funcion a la imagen para qu esta pueda usarse para mostrar o quitar el formulario
/*Se vincula la función mediante el evento OnClick, se ,amda a llamar a la constante manejarClick 
Hooks - funcionaidades que nos ayudan a trabajar con el comportamiento de react 
primer Hook, useState(usa el estado)
Los hooks se pueden importar directo de visual studio
Para declarar que un componente va a tener un estdo: se tiene que usar la funcion useState() 
valor inicia;,  
se guarda en una constante, el nombre de la constante va entre corchetes
la manera en que se usa el estado es 
const [nombreVariable,FuncionQueActualiza] = useState(valorInicial)
*/

//Const miOrg es 
const MiOrg = (props) => {
console.log(props)
    /*const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/
    return  <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg