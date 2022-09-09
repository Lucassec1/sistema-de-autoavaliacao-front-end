import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home";
import Cadastros from "./Pages/Cadastros/index.js";
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar';
import Formula from './Pages/formulario/Formulario'
import HomeUser from './Pages/User Comum/Home User/index'
import ResUser from "./Pages/User Comum/Resposta User/index";
import Minhapesquisa from './Pages/formulario/pesquisa/pesquisa'
import Criarpesquisamenu from './Pages/formulario/CriarPesquisaMenu'
import Criarpesquisa from './Pages/formulario/CriarPesquisa/index'
const PrivateRoute = ({ Item }) => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("tipo");

  if(Item === ResUser) return token ? <Item /> : <Login />;
  
  return token ? userType !== '3' ?  <Item /> : <HomeUser/> : <Login />;
};

export default function Rotas() {
  return(
    <BrowserRouter>
      {window.location.pathname !== '/' ? localStorage.getItem("tipo") !== '3' ? <SideBar /> : null : null}
      <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path="/home" element={<PrivateRoute Item={Home} />} />
          <Route exact path="/cadastros" element={<PrivateRoute Item={Cadastros} />} />
          <Route exact path="/pesquisas" element={<PrivateRoute Item={Formula} />} /> 
          <Route exact path="/minhapesquisa" element={<PrivateRoute Item={Minhapesquisa} />} />
          <Route exact path="/homeU" element={<PrivateRoute Item={HomeUser} />} />
          <Route exact path="/criarpesquisa" element={<PrivateRoute Item={Criarpesquisamenu} />} />
          <Route exact path="/criarpesquisa/:tipo" element={<PrivateRoute Item={Criarpesquisa} />} />
          <Route exact path="/pesquisa/:id" element={<PrivateRoute Item={ResUser} />} />
      </Routes>
    </BrowserRouter>
  )
}