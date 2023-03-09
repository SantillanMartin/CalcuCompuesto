import { useState } from 'react';
import { useEffect } from 'react'



import '../App.css';

function Main(){
    
    const TasaInteres=75;
    const[montoIngresado,setMontoIngresado]=useState("");
    const[mesesIngresados,setMesesIngresados]=useState("");
    const[tasaIngresada,setTasaIngresada]=useState(75);
    const[counter,setCounter]=useState(0);
    
    function handleSubmit(e){
        e.preventDefault();
    }
    
   
    useEffect(() => {
        /*Cada vez que se actualiza el estado de monto ingresado o mes ingresado, se ejecutara CalcularInteres()
        Por lo que cada vez que borremos algun input, o agreguemos numeros distintos se vera reflejado automaticamente 
        en el output H4 dentro del componente main*/
        CalcularInteres();
      })

    
    const SumaInteres=()=>{
        setCounter(counter=>counter+(montoIngresado*tasaIngresada/100/12+montoIngresado));
        
        
        for(let i=1;i<mesesIngresados;i++){
            setCounter(counter =>counter+(counter*tasaIngresada/100/12));
        }
    }

    const Limpiar=()=>{
        setCounter(0);
        setMesesIngresados("");
        setMontoIngresado("");
        setTasaIngresada(75);
    }
    
    const CalcularInteres=()=>{
        
        if(counter===0){
            SumaInteres()    
        }else{
            setCounter(0)
            SumaInteres();
        }

        

    }
    
    return(
        <main>
            <section className='contenedor--descripcion'>
                <h3>¿Como comenzar a utilizar la calcu?</h3>
                <p className='main--parrafo'>Esto funciona asi, usted debe elegir el monto a invertir, luego seleccione la cantidad de meses
                que se reinvertiran los intereses generados, es decir, si elige 2 meses por ejemplo el primer mes
                le dara un cierto interes y al segundo mes ese interes se sumara al capital original para volver a generar intereses y
                asi sucesivamente. Muy simple ¿no?
                Ahora haga la prueba y vea cuanto podria ganar reinvirtiendo.
                <br/>
                Por defecto el tiempo ingresado es de 1, es decir, si no introduce algun valor en el tiempo la inversion sera solo de 1 mes.
                <br/>
                Por defecto la tasa ingresada es de 75% anual, usted puede cambiarla por la que desee si en su pais de origen es distinta.
                </p>
                
            </section>
            
            <form action="post" onSubmit={handleSubmit}  className='estilo--formulario'>
                <label className='label' htmlFor="">
                    <h4>INGRESE MONTO</h4>
                    <div className='contenedor--input borde--focus'>
                    <input type="number" className='seleccion--contenedor' value={montoIngresado} name={montoIngresado}   onChange={e=>setMontoIngresado(Number(e.target.value))}/>
                    <h5>$</h5>
                    </div>
                    
                </label>     
                <label className='label' htmlFor="">
                <h4>INGRESE TASA DE INTERES ANUAL</h4>
                    <input type="number" className='contenedor--input input--focus' id='meses--ingreso'  value={tasaIngresada} name={mesesIngresados} onChange={e=>setTasaIngresada(Number(e.target.value))}/>
                </label>
                <label className='label' htmlFor="">
                <h4>INGRESE TIEMPO DE REINVERSION</h4>
                    <input type="number" className='contenedor--input input--focus' id='meses--ingreso'  value={mesesIngresados} name={mesesIngresados} onChange={e=>setMesesIngresados(Number(e.target.value))}/>
                </label>
                <button className='boton--calcular' onClick={Limpiar}>Reiniciar</button>
                <section className='contenedor--resultado'>
                    <div className='contenedor--interes--generado'>
                        <h4>Interes generado</h4>
                        <h5 className='resultado'>
                        ${Number(counter).toFixed(2)}
                        </h5>
                    </div>
                </section>
                
                
                
            </form>
        </main>
    )
}


export default Main;