import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Cadastros from "./Pages/Cadastros/index.js";
import Pesquisas from './Pages/Pesquisar';
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar';
import Formula from './Pages/formulario/Formulario'
import CriarPesquisaMenu from './Pages/formulario/CriarPesquisaMenu'
import CriarPesquisa from './Pages/formulario/CriarPesquisa'
/*const PrivateRoute = ({ component: Component, iara...rest }) => (
    <Route {...rest} render={props => 
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Navigate to={{ pathname: "/", state: { from: props.location } }} />
        )
    } /> 
);*/

const PrivateRoute = ({Item}) =>{
    const token  = localStorage.getItem('token');
    console.log(token)
    return token ? <Item /> : <Login/>;
}

const Rotas = () => (
    <BrowserRouter>
        {localStorage.getItem('token') ? <SideBar /> : null}
        <Routes>
            {localStorage.getItem('token') ? <Route exact path="/" element={<PrivateRoute Item={Home} />} /> : <Route exact path='/' element={<Login />} />}
            <Route exact path="/home" element={<PrivateRoute Item={Home} />} />
            <Route exact path="/cadastros" element={<PrivateRoute Item={Cadastros} />} />
            <Route exact path="/pesquisas" element={<PrivateRoute Item={Formula} />} />
            <Route exact path="/criarpesquisa" element={<PrivateRoute Item={CriarPesquisaMenu} />} />
            <Route exact path="/criarpesquisa/:tipo" element={<PrivateRoute Item={CriarPesquisa} />}/>
        </Routes>
    </BrowserRouter>
)

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