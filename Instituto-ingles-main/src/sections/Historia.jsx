import React from 'react'
import "../styles/Historia.css"
import HistoriaItem from '../components/HistoriaItem'

const Historia = () => {
    return (
        <section className='historia'>
            <h2>Nuestra <span>Historia</span> </h2>
            <div className='container-1080'>
                <svg className="flecha" xmlns="http://www.w3.org/2000/svg" width="104" height="1320" viewBox="0 0 104 1320" fill="none">
                    <path d="M47.0503 1317.95C49.7839 1320.68 54.2161 1320.68 56.9497 1317.95L101.497 1273.4C104.231 1270.67 104.231 1266.24 101.497 1263.5C98.7638 1260.77 94.3316 1260.77 91.598 1263.5L52 1303.1L12.402 1263.5C9.66835 1260.77 5.23619 1260.77 2.50253 1263.5C-0.231144 1266.24 -0.231144 1270.67 2.50253 1273.4L47.0503 1317.95ZM45 0L45 1313H59L59 0L45 0Z" fill="#764AF1" />
                </svg>
                <HistoriaItem item={1} año={2018} />
                <svg className='linea-recta' xmlns="http://www.w3.org/2000/svg" width="75" height="9" viewBox="0 0 75 9" fill="none">
                    <rect x="54" width="21" height="9" fill="#764AF1" />
                    <rect x="27" width="21" height="9" fill="#764AF1" />
                    <rect width="21" height="9" fill="#764AF1" />
                </svg>
                <HistoriaItem item={2} año={2019}/>
                <svg className='linea-recta' xmlns="http://www.w3.org/2000/svg" width="75" height="9" viewBox="0 0 75 9" fill="none">
                    <rect x="54" width="21" height="9" fill="#764AF1" />
                    <rect x="27" width="21" height="9" fill="#764AF1" />
                    <rect width="21" height="9" fill="#764AF1" />
                </svg>
                <HistoriaItem item={3} año={2020}/>
                <svg className='linea-recta' xmlns="http://www.w3.org/2000/svg" width="75" height="9" viewBox="0 0 75 9" fill="none">
                    <rect x="54" width="21" height="9" fill="#764AF1" />
                    <rect x="27" width="21" height="9" fill="#764AF1" />
                    <rect width="21" height="9" fill="#764AF1" />
                </svg>
                <HistoriaItem item={4} año={2021} />
                <svg className='mini-flecha' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" fill="none">
                    <path d="M7.62639 15.7071C8.01691 16.0976 8.65008 16.0976 9.0406 15.7071L15.4046 9.34315C15.7951 8.95262 15.7951 8.31946 15.4046 7.92893C15.014 7.53841 14.3809 7.53841 13.9904 7.92893L8.3335 13.5858L2.67664 7.92893C2.28612 7.53841 1.65295 7.53841 1.26243 7.92893C0.871904 8.31946 0.871904 8.95262 1.26243 9.34315L7.62639 15.7071ZM7.3335 0L7.3335 15H9.3335L9.3335 0L7.3335 0Z" fill="#764AF1" />
                </svg>
            </div>
        </section>
    )
}

export default Historia