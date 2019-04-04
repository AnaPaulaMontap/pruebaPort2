import React, { Component } from "react";
import './App.css'
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import PagPrincipal from './componentes/pagPrincipal/pagPrincipal'
import Navbar from './componentes/navbar/navbar'
import SobreMi from './componentes/sobremi/sobremi'
import Proyectos from './componentes/proyectos/pruebaproyecto'
import Contacto from './componentes/contact/contacto'
import data from './componentes/proyectos/data'


class App extends Component {
  render() {
    return (      
     <BrowserRouter>
      <Navbar/>      
      <div className="containerPrincipal">       
        <Switch>           
          <Route exact path='/' component={PagPrincipal} />
          <Route path='/proyectos' render={() => <Proyectos data={data}/>} />          
          <Route path='/sobremi' component={SobreMi} />   
          <Route path='/contacto' component={Contacto} />                       
          <Redirect path="/" to="/"></Redirect>      
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
