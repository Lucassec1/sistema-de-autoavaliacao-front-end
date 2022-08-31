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

const PrivateRoute = ({ Item }) => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("tipo");
  
  return token ? userType !== '3' ?  <Item /> : <HomeUser/> : <Login />;
};

const Rotas = () => (
    <BrowserRouter>
        {localStorage.getItem('token') ? <SideBar /> : null}
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path="/home" element={<PrivateRoute Item={Home} />} />
            <Route exact path="/cadastros" element={<PrivateRoute Item={Cadastros} />} />
            <Route exact path="/pesquisas" element={<PrivateRoute Item={Formula} />} />
            <Route exact path="/criarpesquisa" element={<PrivateRoute Item={CriarPesquisaMenu} />} />
            <Route exact path="/criarpesquisa/:tipo" element={<PrivateRoute Item={CriarPesquisa} />}/>
            <Route exact path="/homeU" element={<PrivateRoute Item={HomeUser} />} />
            {/* <Route exact path="/pesk" element={<PrivateRoute Item={Pesk} />} /> */}
        </Routes>
    </BrowserRouter>
);

export default Rotas;

/*export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exect path="/" element={<Login />} />
                <Route exect path='/home' element={<Home />} />
                <Route exect path="/cadastros" element={<Cadastros />} />
                <Route exect path="/pesquisas" element={<Pesquisas />} />
            </Routes>
        </BrowserRouter>
    )
}*/
