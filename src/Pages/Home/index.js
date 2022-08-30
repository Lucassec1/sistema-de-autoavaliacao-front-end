
import NavBarHome from "../../Components/NavBar/navbar"
import { CardUsuarios } from "./styles"
import { Grafico } from "./styles"
import  Graficouse  from './components/graficouse';

export default function Home() {

    return (
        <>
            <NavBarHome />
            <CardUsuarios class="row justify-content-around">
                <div class="col-6">
                    One of two columns
                </div>
            </CardUsuarios>
            <Grafico><Graficouse/></Grafico>
        </>
    )
}