import React from 'react'
import { motion } from 'framer-motion'; // Importa motion

const HistoriaItem = ({ item, año }) => {
    const appear = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    };

    return (
        <div className={`item-conteiner${item}`}>
            <motion.div
                className='item'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.9 }}
                variants={appear}
                >
                <div className='linea-año'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="9" viewBox="0 0 75 9" fill="none">
                        <rect x="54" width="21" height="9" fill="#764AF1" />
                        <rect x="27" width="21" height="9" fill="#764AF1" />
                        <rect width="21" height="9" fill="#764AF1" />
                    </svg>
                    <p>{año}</p>
                </div>
                <div className='informacion-item'>
                    <h5>Fundación del instituto</h5>
                    <p>Ofrecemos espacios de educación en grupos reducidos, con actividades innovadoras </p>
                </div>
            </motion.div>
        </div>
    )
}

export default HistoriaItem