import React from 'react'

const InformacionContacto = ({svg, informacion, direccion}) => {
    return (
        <div className='informacion'>
            {svg}
            <a href={direccion} target='_blank'>{informacion}</a>
        </div>
    )
}

export default InformacionContacto
