import React from 'react'
import "../styles/growers.css"
import GrowersDesktop from '../components/GrowersDesktop'
import imagenBackUp from '../assets/imagenBackUp.webp'
import { motion } from "framer-motion";


const Growers = () => {


    const zoomInFadeInRight = {
        hidden: { opacity: 0, x: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1.2 }
        },
    };

    const zoomInFadeInLeft = {
        hidden: { opacity: 0, x: -50, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1.2 }
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
    };

    return (
        <section id='back-up' className='growers-section'>
            <div className='growers-section-home-container'>
                <div className='growers-section-home'>
                    <motion.div
                        className="growers-informacion"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={zoomInFadeInLeft}
                    >
                        <h1 className='titulo-growers'>Aprendé Inglés con un Método <span> BACK-UP </span></h1>
                        <div className='informacion-growers-clases'>
                            <p>Mejora tu inglés con un enfoque dinámico y personalizado.</p>
                            <p>Clases para todas las edades y niveles.</p>
                        </div>
                        <button> <a href="https://api.whatsapp.com/send/?phone=2494630209&text&type=phone_number&app_absent=0" target='_blank'>Cupos limitados ¡Anotate hoy! </a> </button>
                    </motion.div>
                    <motion.div
                        className="growers-imagen"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={zoomInFadeInRight}
                    >
                        <img src={imagenBackUp} alt="" />
                    </motion.div>
                </div>
            </div>
            <GrowersDesktop></GrowersDesktop>
        </section>
    )
}

export default Growers
