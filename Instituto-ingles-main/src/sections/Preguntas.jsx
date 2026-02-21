import { useState } from 'react';
import Pregunta from '../components/Pregunta';
import "../styles/Preguntas.css";

const Preguntas = () => {
    const [preguntaActiva, setPreguntaActiva] = useState(0); // La primera empieza abierta

    const preguntasRespuestas = [
        { pregunta: "¿Necesito conocimientos previos para inscribirme?", respuesta: "No, no es necesario. Contamos con cursos para todos los niveles, desde principiantes hasta avanzados. Antes de empezar, podemos realizar una prueba de nivelación para ubicarte en el curso adecuado." },
        { pregunta: "¿Cuáles son los métodos de pago?", respuesta: "Métodos de pago: transferencia o pago de contado. Descuentos por grupo familiar" },
        { pregunta: "¿Puedo obtener un certificado al finalizar?", respuesta: "Se obtienen certificados de validez internacionales en los exámentes KET, PET, FIRST y IELTS." },
        { pregunta: "¿Cuánto duran los cursos?", respuesta: "La duración estará determinada por el logro y necesidades del alumno, pudiendo acceder a cursos de perfeccionamiento fonético o conversación." },
        { pregunta: "¿Las clases son en vivo o grabadas?", respuesta: "Se puede optar por clases presenciales o virtuales." }
    ];

    const togglePregunta = (index) => {
        setPreguntaActiva(preguntaActiva === index ? null : index); // Si es la misma, se cierra
    };

    return (
        <section className='preguntas-container' id='preguntas'>
            <h2>Preguntas <span>Frecuentes</span></h2>
            {preguntasRespuestas.map((item, index) => (
                <Pregunta
                    key={index}
                    pregunta={item.pregunta}
                    respuesta={item.respuesta}
                    activa={preguntaActiva === index}
                    onClick={() => togglePregunta(index)}
                />
            ))}
        </section>
    );
};

export default Preguntas;
