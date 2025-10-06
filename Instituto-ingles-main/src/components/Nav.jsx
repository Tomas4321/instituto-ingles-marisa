import { useState, useEffect } from "react";
import logo from "../assets/logo-ingles-letras-blancas-final.webp";
import logoAzul from "../assets/logoAzul.webp"
import "../styles/nav.css";
import MenuIcon from "../components/MenuIcon";
import CloseIcon from "../components/CloseIcon";
import SeparadorMobile from "./SeparadorMobile";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // Efecto para cambiar la clase en <body> cuando el menú se abre/cierra
    useEffect(() => {
        const contenedor = document.querySelector(".contenedor-principal");
        if (menuOpen) {
            contenedor.classList.add("menu-active");
            contenedor.classList.add("menu-abierto");
        } else {
            contenedor.classList.remove("menu-active");
            contenedor.classList.remove("menu-abierto");
        }
    }, [menuOpen]);


    return (
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
            {/* Logo */}
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Back-Up Logo" />
                </a>
            </div>

            {/* Botón de menú hamburguesa */}
            <svg className="menu-hamburguesa" onClick={() => setMenuOpen(!menuOpen)} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fillRule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2h-8a1 1 0 100 2h8zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2h-8a1 1 0 100 2h8z"></path> </g></svg>


            {/* Menú de navegación */}
            <ul className={`menu ${menuOpen ? "open" : ""}`}>
                <p className={`${menuOpen ? "" : "desaparecer"}`}>Menu</p>
                <SeparadorMobile className={`${menuOpen ? "" : "desaparecer"}`} />
                <li><a href="#back-up" onClick={() => setMenuOpen(false)}>BACK UP</a></li>
                <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>SOBRE NOSOTROS</a></li>
                <li><a href="#profesores" onClick={() => setMenuOpen(false)}>NUESTRO PROFESORES</a></li>
                <li><a href="#servicios" onClick={() => setMenuOpen(false)}>SERVICIOS</a></li>
                <li><a href="#preguntas" onClick={() => setMenuOpen(false)}>PREGUNTAS FRECUENTES</a></li>
                <li><a href="#contacto" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
                <button className={`${menuOpen ? "" : "desaparecer"}`}> <a href="https://api.whatsapp.com/send/?phone=2494630209&text&type=phone_number&app_absent=0" target='_blank'>Cupos limitados ¡Anotate hoy! </a></button>
                <SeparadorMobile className={`${menuOpen ? "" : "desaparecer"}`} />
                <img className={`${menuOpen ? "" : "desaparecer"}`} src={logoAzul} alt="Logo" />
                <button className="btn-close-icon" onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <CloseIcon
                        className={`${menuOpen ? "" : "desaparecer"}`}
                    />
                </button>

            </ul>
        </nav>
    );
};

export default Nav;
