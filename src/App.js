import React, { Component } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Eventos from './Components/Eventos';

class App extends Component {

  token = '4QC5V7CYCTMVK3XQBQD6';
  ordenar = 'date';

  state = {
    categorias: [],
    eventos: [],
  }

componentDidMount() {
  this.obtenerCategoria();
}

obtenerCategoria = async () => {

let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

await fetch(url)
  .then(respuesta => {
    return respuesta.json();
  })

  .then(categorias => {
    this.setState({
      categorias: categorias.categories
    });
  })

}

obtenerEventos = async (busqueda) => {
  let url =`https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}`;
  
  await fetch(url)
  .then(respuesta => {
    return respuesta.json();
  })

  .then(eventos => {
    this.setState({
      eventos: eventos.events
    });
  })
}

  render() {
    return (
      <div className="App">
        <Header 
          titulo="Events"
        />
        <div className="uk-container">
        <Formulario 
        categorias={this.state.categorias}
        obtenerEventos={this.obtenerEventos}
        />
        <Eventos 
          eventos={this.state.eventos}
        />
        </div>
      </div>
    );
  }
}

export default App;
