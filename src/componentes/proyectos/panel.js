import React from 'react';
import  './pruebaproyectos.css';

class Panel extends React.Component {
	render() {
		return (
			<aside className="panel">
				<h2 className="panel-header">{this.props.data.header}</h2>
				<p className="panel-info">{this.props.data.body}</p>
				<button className="panel-button">
					{/* // onMouseEnter={this.props._buttonColour}
					// onMouseLeave={this.props._buttonColour}> */}
					Conocer Más
				</button>
			</aside>
		);
	}
}

export default Panel