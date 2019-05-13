import React, {Component} from 'react';
import './contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { TimelineLite} from "gsap";
import CV from './Cv.- AnaPaulaMonsalveTapia(1).pdf'

library.add(fab, faEnvelopeOpenText , faFileDownload)

class Contacto extends Component{
    constructor(props) {
		super(props);
		
		this.logoTl = new TimelineLite({delay:0.1});    
		this.firstBg = null;
		this.feature = null;
		this.content = null;
	}
	componentDidMount(){
		this.logoTl
				.to(this.firstBg, 0.6, {scaleX:1})   
				.to(this.firstBg, 0.6, {scaleX:0})
				.from(this.content, 0.5, { autoAlpha: 0 })
				.from(this.feature, 0.5, { scale: 0.5, autoAlpha: 0}, "feature")
				
				
		}
    render (){
    return(  
      <div className="panelContact" ref={ div => this.content = div }>  
      <span className="panelFirstBg" ref={ span => this.firstBg = span}></span> 
       <div className="contactarse"  ref={ div => this.feature = div }>         
           <h2 className="titulo">Contacto</h2>     
           <p className="textoContact" >Para seguir conociendo mi trabajo ó contactarse conmigo</p>            
           <a href="https://github.com/AnaPaulaMontap"  className="icon"><FontAwesomeIcon icon={['fab', 'github-square']}/></a>
           <a href="https://www.linkedin.com/in/anapaulamonsalve"  className="icon"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
           <a href="mailto:anapaula.monsalvet@gmail.com" className="iconFile"><FontAwesomeIcon  icon='envelope-open-text'/></a>
           <a href={CV} download = "CV_AnaPaulaMontap "className="iconFile"><FontAwesomeIcon  icon='file-download'/></a>
       </div>
       <div className="footer">
        <span>AnaPaulaMontap © - 2019 - Laboratoria Chile</span>
        </div>
    </div> 
    )
}
}

export default Contacto
