import { useRef } from 'react';
import Nav from './components/Nav';
import './styles/app.css';
import Growers from './sections/Growers';
import Historia from './sections/Historia';
import Servicios from './sections/Servicios';
import Equipo from './sections/Equipo';
import Preguntas from './sections/Preguntas';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';
import Estudiantes from './sections/Estudiantes';

function App() {
  // Crear referencias para cada sección
  const growerRef = useRef(null);
  const historiaRef = useRef(null);
  const serviciosRef = useRef(null);
  const equipoRef = useRef(null);
  const galeriaRef = useRef(null);
  const testimonioRef = useRef(null)
  const preguntasRef = useRef(null);
  const contactoRef = useRef(null);

  // Función para hacer scroll hacia la sección correspondiente
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='contenedor-principal'>
      <Nav
        scrollToSection={scrollToSection}
        growerRef={growerRef}
        historiaRef = {historiaRef}
        serviciosRef={serviciosRef}
        equipoRef={equipoRef}
        galeriaRef={galeriaRef}
        preguntasRef={preguntasRef}
        contactoRef={contactoRef}
      />
      <div ref={growerRef}>
        <Growers />
      </div>
      <div ref={historiaRef}>
        <Historia/>
      </div>
      <div ref={equipoRef}>
        <Equipo />
      </div>
      <div ref={serviciosRef}>
        <Servicios />
      </div>
      <div ref={testimonioRef}>
        <Estudiantes />
      </div>
      <div ref={preguntasRef}>
        <Preguntas />
      </div>
      <div ref={contactoRef}>
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}

export default App;
