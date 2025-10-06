import React from 'react'
import "../styles/servicios.css"
import servicioNiños from '../assets/servicioNiños.webp'
import servicioEspeciales from '../assets/servicioEspeciales.webp'
import SeparadorMobile from '../components/SeparadorMobile.jsx'
import { motion } from "framer-motion";

const Servicios = () => {

    const fadeInLeft = {
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    };


    return (
        <section className='servicios-container' id='servicios'>
            <div className='servicios'>
                <h2>Nuestra <span>Servicios</span></h2>
                <motion.div 
                    className="servicio alrevez"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeInLeft}
                >
                    <div className='servicio-informacion'>
                        <h3>Aprendizaje Personalizado y Dinámico</h3>
                        <p>Ofrecemos espacios de educación en grupos reducidos, con actividades innovadoras que permiten aprender inglés de manera natural y divertida.</p>
                    </div>
                    <div className='servicio-svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="137" height="101" viewBox="0 0 137 101" fill="none">
                            <g clipPath="url(#clip0_1029_28)">
                                <path  d="M68.4366 11.2959C73.7355 11.2959 78.8172 13.4008 82.564 17.1476C86.3109 20.8945 88.4158 25.9762 88.4158 31.275C88.4158 36.5738 86.3109 41.6556 82.564 45.4024C78.8172 49.1493 73.7355 51.2542 68.4366 51.2542C63.1378 51.2542 58.0561 49.1493 54.3092 45.4024C50.5624 41.6556 48.4575 36.5738 48.4575 31.275C48.4575 25.9762 50.5624 20.8945 54.3092 17.1476C58.0561 13.4008 63.1378 11.2959 68.4366 11.2959ZM28.4783 25.5667C31.675 25.5667 34.6433 26.423 37.2121 27.9642C36.3558 36.1271 38.7533 44.233 43.6625 50.5692C40.8083 56.0492 35.1 59.8167 28.4783 59.8167C23.9365 59.8167 19.5807 58.0125 16.3691 54.8009C13.1575 51.5893 11.3533 47.2335 11.3533 42.6917C11.3533 38.1499 13.1575 33.7941 16.3691 30.5825C19.5807 27.3709 23.9365 25.5667 28.4783 25.5667ZM108.395 25.5667C112.937 25.5667 117.293 27.3709 120.504 30.5825C123.716 33.7941 125.52 38.1499 125.52 42.6917C125.52 47.2335 123.716 51.5893 120.504 54.8009C117.293 58.0125 112.937 59.8167 108.395 59.8167C101.773 59.8167 96.065 56.0492 93.2108 50.5692C98.1856 44.1429 100.496 36.0481 99.6612 27.9642C102.23 26.423 105.198 25.5667 108.395 25.5667ZM31.3325 84.0771C31.3325 72.2609 47.9437 62.6709 68.4366 62.6709C88.9296 62.6709 105.541 72.2609 105.541 84.0771V94.0667H31.3325V84.0771ZM-0.0633545 94.0667V85.5042C-0.0633545 77.5696 10.7254 70.8909 25.3387 68.95C21.9708 72.8317 19.9158 78.1975 19.9158 84.0771V94.0667H-0.0633545ZM136.937 94.0667H116.957V84.0771C116.957 78.1975 114.902 72.8317 111.535 68.95C126.148 70.8909 136.937 77.5696 136.937 85.5042V94.0667Z" fill="#293B97" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1029_28">
                                    <rect width="137" height="101" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </motion.div>
                <SeparadorMobile></SeparadorMobile>
                <motion.div 
                    className="servicio"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeInRight}
                >
                    <div className='servicio-informacion'>
                        <h3>Cursos para Niños (Inicial y Primario)</h3>
                        <p>Aprenden inglés a través de experiencias multisensoriales en contextos como: </p>
                        <div>
                            <ul>
                                <li>🎨 Arte</li>
                                <li>🎶 Música</li>
                                <li>🎭 Teatro </li>
                                <li>🎥 Cine y Animación</li>
                            </ul>
                            <ul>
                                <li>⚽ Actividad Física</li>
                                <li>🌿 Aire Libre</li>
                                <li>🍳 Cocina </li>
                                <li>🌎 Cultura</li>
                            </ul>
                        </div>
                    </div>
                    <div className='servicio-svg'>
                        <img src={servicioNiños} />
                    </div>
                </motion.div>
                <SeparadorMobile></SeparadorMobile>
                <motion.div 
                    className="servicio alrevez"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeInLeft}
                >
                    <div className='servicio-informacion'>
                        <h3>Cursos para Adolescentes y Adultos</h3>
                        <p>Clases adaptadas a los intereses y necesidades de cada grupo, enfocadas en mejorar la comunicación en inglés.</p>
                    </div>
                    <div className='servicio-svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
                            <path d="M101.485 24.127L59.1096 10.002C58.0244 9.63571 56.8489 9.63571 55.7637 10.002L13.3887 24.127C12.3776 24.4619 11.4909 25.0938 10.8444 25.9403C10.198 26.7868 9.8217 27.8086 9.76476 28.8722C9.75989 28.9648 9.75989 29.0576 9.76476 29.1502V64.4627C9.76476 65.8676 10.3228 67.2148 11.3162 68.2082C12.3095 69.2015 13.6568 69.7596 15.0616 69.7596C16.4665 69.7596 17.8137 69.2015 18.8071 68.2082C19.8004 67.2148 20.3585 65.8676 20.3585 64.4627V36.4997L30.8243 39.9868C27.5762 46.204 26.611 53.3632 28.0966 60.2186C29.5822 67.074 33.4245 73.1914 38.955 77.5063C31.7178 81.0751 25.5928 86.5529 21.2413 93.3484C20.8495 93.9308 20.5773 94.5853 20.4406 95.2738C20.3039 95.9623 20.3054 96.6712 20.4451 97.3591C20.5847 98.0471 20.8598 98.7004 21.2541 99.2811C21.6485 99.8618 22.1544 100.358 22.7423 100.742C23.3303 101.125 23.9886 101.388 24.679 101.515C25.3695 101.642 26.0782 101.63 26.7641 101.481C27.45 101.331 28.0993 101.047 28.6743 100.644C29.2493 100.242 29.7385 99.7286 30.1136 99.1352C36.4125 89.4419 46.4015 83.8846 57.4366 83.8846C68.4718 83.8846 78.4608 89.4419 84.7818 99.1352C85.1568 99.7286 85.646 100.242 86.2211 100.644C86.7961 101.047 87.4454 101.331 88.1313 101.481C88.8171 101.63 89.5259 101.642 90.2163 101.515C90.9067 101.388 91.565 101.125 92.153 100.742C92.741 100.358 93.2468 99.8618 93.6412 99.2811C94.0356 98.7004 94.3106 98.0471 94.4503 97.3591C94.5899 96.6712 94.5915 95.9623 94.4548 95.2738C94.3181 94.5853 94.0459 93.9308 93.654 93.3484C89.2983 86.545 83.1653 81.0622 75.9183 77.493C81.4487 73.1782 85.2911 67.0608 86.7767 60.2054C88.2623 53.35 87.2971 46.1907 84.049 39.9735L101.485 34.1602C102.538 33.8078 103.454 33.1332 104.103 32.2318C104.752 31.3303 105.101 30.2477 105.101 29.137C105.101 28.0263 104.752 26.9437 104.103 26.0422C103.454 25.1408 102.538 24.4662 101.485 24.1138V24.127ZM57.4366 20.5958L83.0603 29.1502L57.4366 37.6915L31.8351 29.1502L57.4366 20.5958ZM76.8585 53.869C76.8591 56.8857 76.1569 59.8611 74.8076 62.5592C73.4584 65.2574 71.4992 67.6042 69.0853 69.4135C66.6714 71.2228 63.8692 72.445 60.9008 72.9831C57.9325 73.5211 54.8796 73.3604 51.9842 72.5135C49.0888 71.6666 46.4305 70.1568 44.22 68.1039C42.0095 66.0511 40.3076 63.5115 39.2493 60.6865C38.1909 57.8615 37.8051 54.8289 38.1226 51.8289C38.44 48.8289 39.452 45.9441 41.0781 43.4032L55.7637 48.2984C56.8492 48.6631 58.0241 48.6631 59.1096 48.2984L73.7952 43.4032C75.7982 46.5261 76.8615 50.1589 76.8585 53.869Z" fill="#293B97" />
                        </svg>
                    </div>
                </motion.div>
                <SeparadorMobile></SeparadorMobile>
                <motion.div 
                    className="servicio"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeInRight}
                >
                    <div className='servicio-informacion'>
                        <h3>Talleres Especiales en Inglés</h3>
                        <p>Explorá el idioma a través del arte, la literatura, el teatro y la música, potenciando la creatividad y la fluidez.</p>
                    </div>
                    <div className='servicio-svg'>
                        <img src={servicioEspeciales} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Servicios
