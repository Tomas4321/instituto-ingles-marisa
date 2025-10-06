import { useState } from 'react';
import Pregunta from '../components/Pregunta';
import "../styles/Preguntas.css";

const Preguntas = () => {
    const [preguntaActiva, setPreguntaActiva] = useState(0); // La primera empieza abierta

    const preguntasRespuestas = [
        { pregunta: "¿Necesito conocimientos previos para inscribirme?", respuesta: "No, no es necesario. Contamos con cursos para todos los niveles, desde principiantes hasta avanzados. Antes de empezar, podemos realizar una prueba de nivelación para ubicarte en el curso adecuado." },
        { pregunta: "¿Cuáles son los métodos de pago?", respuesta: "Aceptamos tarjetas de crédito, débito, transferencia bancaria y PayPal." },
        { pregunta: "¿Puedo obtener un certificado al finalizar?", respuesta: "Sí, al completar el curso recibirás un certificado digital avalado por nuestra academia." },
        { pregunta: "¿Cuánto duran los cursos?", respuesta: "La duración varía según el curso, pero en promedio son entre 4 y 12 semanas." },
        { pregunta: "¿Las clases son en vivo o grabadas?", respuesta: "Ofrecemos ambas modalidades: clases en vivo con profesores y material grabado disponible 24/7." }
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
