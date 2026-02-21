import React from 'react'
import "../styles/Equipo.css"
import GrowersDesktopAlrevez from '../components/GrowersDesktopAlrevez'
import profe1 from '../assets/Marisa.jpeg'
import profe2 from '../assets/profesora1.webp'
import InfoProfes from '../components/InfoProfes';
import GrowersDesktop from '../components/GrowersDesktop'


const Equipo = () => {

    return (
        <section className='equipo-container' id='profesores'>
            <div className='container-general'>
                <GrowersDesktopAlrevez></GrowersDesktopAlrevez>
                <GrowersDesktop></GrowersDesktop>
                <h2>Nuestros <span className='span-titulo'>Teachers</span></h2>
                <div className='equipo-tablet'>
                    <InfoProfes nombre="Marisa" img={profe1} info="Marisa hace que aprender inglés sea divertido, fácil y llevadero. Método no convencional, 100% garantizado."> </InfoProfes>
                    <InfoProfes nombre="Magdalena Arcumano" img={profe2} info="Profesora de nuestro instituto."> </InfoProfes>
                </div>
            </div>
        </section>
    )
}

export default Equipo
