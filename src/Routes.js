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
import Pesquisas from './Pages/Pesquisar';
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar';
import Formula from './Pages/formulario/Formulario'
import CriarPesquisaMenu from './Pages/formulario/CriarPesquisaMenu'
import CriarPesquisa from './Pages/formulario/CriarPesquisa'
import HomeUser from './Pages/User Comum/Home User/index'
import ResUser from "./Pages/User Comum/Resposta User/index";

const PrivateRoute = ({ Item }) => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("tipo");

  if(Item === ResUser) return token ? <Item /> : <Login />;
  
  return token ? userType !== '3' ?  <Item /> : <HomeUser/> : <Login />;
};

export default function Rotas(){
    return(
    <BrowserRouter>
        {localStorage.getItem('token') ? localStorage.getItem("tipo") !== '3' ? <SideBar /> : null : null}
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path="/home" element={<PrivateRoute Item={Home} />} />
            <Route exact path="/cadastros" element={<PrivateRoute Item={Cadastros} />} />
            <Route exact path="/pesquisas" element={<PrivateRoute Item={Formula} />} />
            <Route exact path="/criarpesquisa" element={<PrivateRoute Item={CriarPesquisaMenu} />} />
            <Route exact path="/criarpesquisa/:tipo" element={<PrivateRoute Item={CriarPesquisa} />}/>
            <Route exact path="/homeU" element={<PrivateRoute Item={HomeUser} />} />
            <Route exact path="/pesquisa/res" element={<PrivateRoute Item={ResUser} />} />
        </Routes>
    </BrowserRouter>
    )
}