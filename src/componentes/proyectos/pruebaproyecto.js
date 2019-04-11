import React from 'react';
import Panel from './panel'
import Selectors from './selectors'
import  './pruebaproyectos.css';




class Proyectos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			wrapperStyle: {
			backgroundImage: `url('${this.props.data[0].img}')`,
			backgroundsize: 'cover'
			},
			images: this.props.data[0].img

		};
	}
	
	_changeActive(id) {
		this.setState({
			activeID: id,
			wrapperStyle: {
				background: `url('${this.props.data[id].img}')`,
				backgroundsize: 'cover'
			},
			images: this.props.data[id].img
		});
	}
	_buttonColour(id) {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				activeID: id,
				buttonHover: false,
			});
		}
	}
	render() {
		return (					
			<section className="wrapper">			
				<Selectors 
					data={this.props.data}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}					
				/>
				<Panel 
					data={this.props.data[this.state.activeID]}
					_buttonColour={this._buttonColour.bind(this)}
					images={this.state.images}
				/>
			
			</section>			
		);
	}
}


export default Proyectos