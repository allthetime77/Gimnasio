import Envios from "../home/Envios"
import HorariosClases from "../home/HorariosClases"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Novedades from "../home/Novedades"

function Inicio() {
    return (
        <>
            <MainBanner/>
            <Nosotros/>
            <Novedades/>
            <HorariosClases />
            <Envios/>
        </>
    )
}

export default Inicio