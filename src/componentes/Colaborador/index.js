import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai" 
//se declara destructurado para que sea mas facil importarlos

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like  } = props
   
   //condicion ? verdadero : falso 
   
   
   
   return <div className="colaborador">
{/*con el arrow function evita que se mande a llamar desde el inicio, asi respeta que solamente se va a eliminar el colaborador
si el usuario le da click*/}
       <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador (id)} /> 

        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>

            {fav ?  <AiFillHeart color="red" onClick={() => like(id)}/> :   <AiOutlineHeart onClick={() => like(id)}/>}
 
        </div>
    </div>
}

export default Colaborador