import Testimonio from "../components/Testimonio";
import "../styles/Estudiante.css"
import p1 from '../assets/tomas.webp'
import p2 from '../assets/delfi.webp'
import p3 from '../assets/mateo.webp'
import p4 from '../assets/kevin.webp'
import p5 from '../assets/sin-foto.webp'
import GrowersDesktop from "../components/GrowersDesktop";
import GrowersDesktopAlrevez from "../components/GrowersDesktopAlrevez";

const Estudiantes = () => {
   return (
    <div className="container-testimonio" id="testimonio">
        {/* <GrowersDesktopAlrevez></GrowersDesktopAlrevez>
        <GrowersDesktop></GrowersDesktop> */}
        <div className="titulo">
            <h2>Nuestros <span className="span-testimonio">Estudiantes</span></h2>
        </div>
        <div className="carta-recomendacion">
            <Testimonio titulo="Tomas Donati" subtitulo="Excelente profesora, explica de manera clara y dinámica. ¡Aprender con ella es un gusto!" img={p1}></Testimonio>
            <Testimonio titulo="Mateo Mauro" subtitulo="Muy buena profe, siempre atenta y con mucha paciencia. 100% recomendada." img={p3}></Testimonio>
            <Testimonio titulo="Delfina Ferreyra" subtitulo="Sus clases son súper entretenidas y fáciles de entender, 100% recomendada." img={p2}></Testimonio>
            <Testimonio titulo="Kevin Freijomil" subtitulo="Explica de forma clara y hace que el inglés sea más fácil. ¡Gran docente!." img={p4}></Testimonio>
            <Testimonio titulo="Anonimo" subtitulo="Increíble profesora, siempre motivando y aclarando dudas con paciencia." img={p5}></Testimonio>
            <Testimonio titulo="Tomas Donati" subtitulo="Excelente profesora, explica de manera clara y dinámica. ¡Aprender con ella es un gusto!" img={p1}></Testimonio>
            <Testimonio titulo="Mateo Mauro" subtitulo="Muy buena profe, siempre atenta y con mucha paciencia. 100% recomendada." img={p3}></Testimonio>
            <Testimonio titulo="Delfina Ferreyra" subtitulo="Sus clases son súper entretenidas y fáciles de entender, 100% recomendada." img={p2}></Testimonio>
            <Testimonio titulo="Kevin Freijomil" subtitulo="Explica de forma clara y hace que el inglés sea más fácil. ¡Gran docente!." img={p4}></Testimonio>
            <Testimonio titulo="Anonimo" subtitulo="Increíble profesora, siempre motivando y aclarando dudas con paciencia." img={p5}></Testimonio>
        </div>

    </div>
   );
}

export default Estudiantes