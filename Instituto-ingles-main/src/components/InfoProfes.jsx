import "../styles/Equipo.css"
import { motion } from "framer-motion";


const InfoProfes = ({ nombre, img, info }) => {

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
    };

    return (
        <motion.div
            className='profes'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeUp}>
            <div className='container'>
                <div>
                    <img src={img} alt="marisa" className='foto-profe' />
                </div>
                <div className='info-profe'>
                    <div className="titulo-profe">
                        <h3>{nombre}</h3>
                    </div>
                    <p className='texto-profe'>{info}</p>
                </div>
            </div>
        </motion.div>
    );
}



//si declaro aca otra const la puedo importar, preciso hacerlo de otro formato para computadora, entonces me va cambiar los div

export default InfoProfes;

