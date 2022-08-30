
import NavBarHome from "../../Components/NavBar/navbar"
import { CardUsuarios } from "./styles"
import { Grafico } from "./styles"
import { NomeUsuario } from "./styles"
import  Graficouse  from './components/graficouse';
import { BsFillPersonFill } from "react-icons/bs";
export default function Home() {

    return (
        <>
            <NavBarHome />
            <CardUsuarios class="row justify-content-around">
                <div class="col-6">
                    
                    <ul>
                        <li style={{ listStyle: 'none', display: 'flex', marginLeft:'-6%' }}>
                            <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }}/>
                            <NomeUsuario>Fulano de tal</NomeUsuario>
                        </li>
                        <li style={{ listStyle: 'none' }}>grjtguyer</li>
                    </ul>
                </div>
            </CardUsuarios>
            <Grafico><Graficouse/></Grafico>
        </>
    )
}