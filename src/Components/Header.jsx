import '../App.css';
import calculadora from '../images/calculadora.png';

const Header=()=>{
    return(
            <header>
                <section className='header--contenedor'>
                <h1>Calcu Compuesto</h1>
                <img src={calculadora} className="tamaño--calculadora--img" alt="calculadora interes compuesto" />
                </section>
                <h2 className='header--parrafo1'>Bienvenido a <span className='color--name'>Calcu Compuesto</span> la forma mas simple de calcular tus intereses </h2>
                <p className='header--parrafo2'>Comencemos por el principio, ¿Que es el interes compuesto? se denomina interés compuesto en activos 
                monetarios a aquel que se va sumando al capital inicial y sobre el que se van generando nuevos intereses. Es decir, 
                los intereses generados se van sumando periodo a periodo al capital inicial y a los intereses ya generados anteriormente. De esta forma, 
                se crea valor no sólo sobre el capital inicial sino que los intereses generados previamente ahora se encargan también de generar nuevos intereses. 
                Es decir, se van acumulando los intereses obtenidos para generar más intereses ¿Increible no?.</p>
            </header>
    )
            
            
};

export default Header;
