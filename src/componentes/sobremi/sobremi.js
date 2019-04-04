import React, {Component} from 'react';
import  './sobremi.css';
import yo from './yo.png'


  
class SobreMi extends Component{    
  render (){
    return (
      <div className="SplitPane">
        <div className="SplitPane-left" >
           <img alt="mifoto" src={yo} className="foto"/> 
        </div>
        <div className="SplitPane-right">
            <div className="biografy">
          <h1 className="titulo">Hola!</h1>
          <p className='parrafo'>Mi nombre es Ana Paula Monsalve, soy egresada de la septima generación de Laboratoria como FrontEnd Developer.</p>
          <button className="boton">Conocer más</button>
          </div>
        </div>
      </div>
    )
    }
  };

  export default SobreMi