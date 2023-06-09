import { useState } from 'react';
import { v4 as uuid } from "uuid";
//import logo from './logo.svg'; //importar imagen
import './App.css'; //importar CSS
import Header from './componentes/Header/Header'; //importando componente 
import Formulario from './componentes/Formulario/Formulario';
//<!--Todo lo que pongamos entre llaves se interpreta como JS->
//Las funciones que exportamos deben tener la primera letra en mayuscula para diferenciar de un a etiqueta HTML y un componente de react
/*{Header()} 
     <Header></Header>
     <Header/> en este caso puedes llamar al componente de estas tres maneras y se va a tener el mismo resultado
*/ 
import MiOrg from './componentes/MiOrg';
//importacion de hook / estados
//cuando trabajamos con estados tienen que estar adentro de un componente o de una funci[on que represente un componente ]
//al definirlo debe ser antes del return 
//para enviar informacion a un componente se utilizan props
import Equipo from './componentes/Equipo';

import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])


  //haciendo esto hacemos que react se de cuenta si hay algun cambio entonces el puede cambiar la interfaz
  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
  ])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id )
    //cambiar los colores del equipo directo de la interfaz
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)

  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  //agregar a favoritos
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = ! colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} //.filter filtra, en este caso los colaboradores
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
        />
          //nombre prop ------- referencia de la constante de arribaaaa
        )
      }

      <Footer />


    </div>
  );
}

export default App;