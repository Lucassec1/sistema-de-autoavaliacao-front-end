import NavBarHome from "../../Components/NavBar/navbar"
import { Grafico, NomeUsuario, CardUsuarios, HeaderRenderUsusarios } from "./styles"
import Graficouse from './components/graficouse';
import { BsFillPersonFill } from "react-icons/bs";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";



export default function Home() {

    return (
        <>
            <NavBarHome />
            <CardUsuarios class="row justify-content-around">
                <div class="col-6">
                    <HeaderRenderUsusarios>Analise de usuarios</HeaderRenderUsusarios>
                    <ul>
                        <li style={{ listStyle: 'none', display: 'flex', marginLeft: '-6%', width: '49rem', padding: '3%', borderBottom: ' 1px solid rgba(37, 38, 40, 0.2)' }}>
                            <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }} />
                            <NomeUsuario>Fulano de tal</NomeUsuario>
                            <FiArrowUpRight style={{ background: 'rgba(26, 213, 152, 0.2)', color: '#1AD598', width: '3.2%', height: '24px', borderRadius: '10rem', marginLeft: '30rem' }} />
                            <p style={{ color: '#1AD598' }}>+ 7,44%</p>
                        </li>

                        <li style={{ listStyle: 'none', display: 'flex', marginLeft: '-6%', width: '49rem', padding: '3%', borderBottom: ' 1px solid rgba(37, 38, 40, 0.2)' }}>

                            <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }} />
                            <NomeUsuario>Fulano de tal</NomeUsuario>
                            <FiArrowDownLeft style={{ background: 'rgba(253, 221, 225, 0.8)', color: '#FF324B', width: '3.2%', height: '24px', borderRadius: '10rem', marginLeft: '30rem' }} />
                            <p style={{ color: '#FF324B' }}>+ 7,44%</p>
                        </li>

                        <li style={{ listStyle: 'none', display: 'flex', marginLeft: '-6%', width: '49rem', padding: '3%', borderBottom: ' 1px solid rgba(37, 38, 40, 0.2)' }}>
                            <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }} />
                            <NomeUsuario>Fulano de tal</NomeUsuario>
                            <FiArrowUpRight style={{ background: 'rgba(26, 213, 152, 0.2)', color: '#1AD598', width: '3.2%', height: '24px', borderRadius: '10rem', marginLeft: '30rem' }} />
                            <p style={{ color: '#1AD598' }}>+ 7,44%</p>
                        </li>

                        <li style={{ listStyle: 'none', display: 'flex', marginLeft: '-6%', width: '49rem', padding: '3%', borderBottom: ' 1px solid rgba(37, 38, 40, 0.2)' }}>
                            <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }} />
                            <NomeUsuario>Fulano de tal</NomeUsuario>
                            <FiArrowUpRight style={{ background: 'rgba(26, 213, 152, 0.2)', color: '#1AD598', width: '3.2%', height: '24px', borderRadius: '10rem', marginLeft: '30rem' }} />
                            <p style={{ color: '#1AD598' }}>+ 7,44%</p>
                        </li>
                        <li style={{ listStyle: 'none', display: 'flex', marginLeft: '-6%', width: '49rem', padding: '3%', borderBottom: ' 1px solid rgba(37, 38, 40, 0.2)' }}>

                            <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }} />
                            <NomeUsuario>Fulano de tal</NomeUsuario>
                            <FiArrowDownLeft style={{ background: 'rgba(253, 221, 225, 0.8)', color: '#FF324B', width: '3.2%', height: '24px', borderRadius: '10rem', marginLeft: '30rem' }} />
                            <p style={{ color: '#FF324B' }}>+ 7,44%</p>
                        </li>

                    </ul>
                </div>
            </CardUsuarios>
            <Grafico><Graficouse /></Grafico>
        </>
    )
}