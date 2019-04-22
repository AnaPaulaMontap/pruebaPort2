import React from 'react';
import  './pruebaproyectos.css';
import { TimelineLite} from "gsap";

class Panel extends React.Component {	
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
	render() {
		console.log(this.props)
		return (						
			<aside className="panel">	
			<span className="panelfirst-bg" ref={ span => this.firstBg = span}></span> 		
		   		<div className="panel-left" ref={ div => this.content = div }>		   
				<h2 className="panel-header">{this.props.data.header}</h2>
				<p className="panel-info">{this.props.data.body}</p>
				<button className="panel-button">Conocer Más</button>
				<button className="panel-button">Ver Demo</button>						 
		   </div>
		   <div className="panel-right">
		   <img src={this.props.images} alt="proyecto" className="imagenPanel" ref={ img => this.feature = img}/>
		   </div>    
		 </aside>
		);
	}
}

export default Panel