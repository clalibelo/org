//Importar hoja de estilos CSS
import "./Header.css"
//creando componente en react
function Header(){
//tenemos que regresar un html o el concepto de un html
//Se utiliza ClassName en lugar de solo class para identificar los estilos 
    return <header className="header">
        <img src="/img/Header.png" alt = 'Org'/> 
    </header>
    
}

//se tiene que exportar los componente para poder usarlo, esta es la manera de exportarlo 
export default Header