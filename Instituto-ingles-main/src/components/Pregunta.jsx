import { motion } from 'framer-motion'; // Importa motion
import flechaArriba from '../assets/flechaArriba.webp';
import flechaAbajo from '../assets/flechaAbajo.webp';

const Pregunta = ({ pregunta, respuesta, activa, onClick }) => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
    };

    return (
        <motion.div
            className='pregunta-caja'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            variants={fadeUp}
        >
            <div className='pregunta' onClick={onClick}>
                <p>{pregunta}</p>
                <img src={activa ? flechaArriba : flechaAbajo} alt="Flecha" />
            </div>
            {activa && (
                <div className='respuesta'>
                    <p>{respuesta}</p>
                </div>
            )}
        </motion.div>
    );
};

export default Pregunta;
