import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Home from "./Pages/Home";
import Cadastros from "./Pages/Cadastros/index.js";
import Pesquisas from './Pages/Pesquisar';
import Login from './Pages/Login/Login'

export default function Rotas() {
    return (
        <BrowserRouter>
            <SideBar />
        
            <Routes>
                <Route exect path="/" element={<Login />} />
                <Route exect path='/home' element={<Home />} />
                <Route exect path="/cadastros" element={<Cadastros />} />
                <Route exect path="/pesquisas" element={<Pesquisas />} />
            </Routes>
        </BrowserRouter>
    )
}