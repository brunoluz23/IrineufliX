import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/Home';
import { CadastroVideo } from './pages/cadastro/Video';
import { CadastroCategoria } from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Pagina404 = ()=>{
  return(
    <h1>Página 404!</h1>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

//Adicionar jogo na 404