import React, {Component} from 'react';
import  './sobremi.css';
import { TimelineLite} from "gsap";
import yo from './yo.png'


  
class SobreMi extends Component{ 
  constructor(props){
		super(props);

		this.logoTl = new TimelineLite({ delay :1 });

		this.content = null;
		this.feature = null;
		this.description = null;
	}

	componentDidMount(){
		this.logoTl
            .set(this.content, { autoAlpha: 1 })
            .from(this.feature, 0.5, { scale: .5, autoAlpha: 0 }, "feature")
            .from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
			
	}
    
  render (){
    return (
      <div className="SplitPane" ref={ div => this.content = div }>
        <div className="SplitPane-left" >
           <img alt="mifoto" src={yo} className="foto"ref={ img => this.feature = img }/> 
        </div>
        <div className="SplitPane-right" >
        <p className="biografy"  ref={ p => this.description = p }>
          <h1 className="titulo">Hola!</h1>
          <p className='parrafo' >Mi nombre es Ana Paula Monsalve, soy egresada de la septima generación de Laboratoria como FrontEnd Developer</p>
          <p className='parrafo'>Apasionada y curiosa por naturaleza, la tecnología me presentó una oportunidad de desarrollar proyectos enfocada en las personas, con aprendendizaje constante y trabajo en equipo dado lo enriquesedor de nuevas perspectivas y desafíos. </p>
          <h3 className="titulo">Skills</h3>
          <p className='parrafo'>
          <span className='icono'><i class="devicon-react-original-wordmark"></i></span>
          <span className='icono'><i class="devicon-javascript-plain"></i></span>
          <span className='icono'><i class="devicon-html5-plain-wordmark"></i></span>
          <span className='icono'><i class="devicon-css3-plain-wordmark"></i></span>
          <span className='icono'><i class="devicon-bootstrap-plain-wordmark"></i></span>
          <span className='icono'><i class="devicon-github-plain-wordmark"></i></span>
          <span className='iconoNodeGit'><i class="devicon-git-plain-wordmark"></i></span>
          <span className='iconoNodeGit'><i class="devicon-nodejs-plain-wordmark"></i></span>
          </p>
          <a className="boton" href="https://www.linkedin.com/in/anapaulamonsalve/" rel="noopener noreferrer" target="_blank" >Conocer más</a> 
          </p>
        </div>
      </div>
    )
    }
  };

  export default SobreMi