import React from 'react'
import "../styles/Equipo.css"
import GrowersDesktopAlrevez from '../components/GrowersDesktopAlrevez'
import profe1 from '../assets/Marisa.jpeg'
import profe2 from '../assets/Simon.jpeg'
import profe3 from '../assets/Uriel.png'
import profe4 from '../assets/Tomas.jpeg'
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
                    <InfoProfes nombre="Simon" img={profe2} info="Hola soy Simon, vivo en Tandil, soy profesor de ingles, estamos dando clases en back up"> </InfoProfes>
                </div>
                <div className='equipo-tablet'>
                    <InfoProfes nombre="Uriel" img={profe3} info="Hola soy Uriel, vivo en Tandil, soy profesor de ingles, estamos dando clases en back up"> </InfoProfes>
                    <InfoProfes nombre="Tomas" img={profe4} info="Hola soy Tomas, vivo en Tandil, soy profesor de ingles, estamos dando clases en back up"> </InfoProfes>
                </div>
            </div>
        </section>
    )
}

export default Equipo
