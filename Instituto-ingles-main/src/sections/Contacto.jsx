import React from "react";
import GrowersDesktopAlrevez from "../components/GrowersDesktopAlrevez.jsx";
import "../styles/contacto.css";
import contacoFondo from "../assets/contactoFondo.webp";
import InformacionContacto from "../components/InformacionContacto.jsx";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Contacto = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Hip%C3%B3lito+Yrigoyen+1332,+B7000+Tandil,+Provincia+de+Buenos+Aires/@-37.3184823,-59.1446029,17z/data=!4m5!3m4!1s0x95911f86c4509e47:0x95abcce174a36218!8m2!3d-37.3182648!4d-59.1434335";

  // 🔴 Ícono rojo tipo Google Maps
  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconSize: [30, 45],
    iconAnchor: [15, 45],
  });

  // 🏷️ Cartel blanco animado con clic a Google Maps
  const customLabel = L.divIcon({
    html: `
      <div 
        onclick="window.open('${googleMapsUrl}', '_blank')" 
        style="
          cursor: pointer;
          background: white;
          border: 2px solid #7A1C2E;
          color: #222;
          padding: 10px 14px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          font-family: 'Segoe UI', sans-serif;
          font-size: 13px;
          line-height: 1.4;
          min-width: 180px;
          animation: fadeInUp 1s ease-out forwards;
          transition: transform 0.2s ease;
        "
        onmouseover="this.style.transform='scale(1.03)'"
        onmouseout="this.style.transform='scale(1)'"
      >
        <strong style="color:#7A1C2E;">Instituto de Inglés BACK UP</strong><br>
        Hipólito Yrigoyen 1332<br>
        <span style="font-size:12px; color:#555;">Entre Garibaldi y Alem</span>
      </div>
    `,
    className: "",
    iconAnchor: [-100, 60],
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <motion.section
      className="contacto-container"
      id="contacto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeIn}
    >
      <div className="fondo">
        <img src={contacoFondo} alt="Fondo de contacto" />
      </div>

      {/* Información lateral */}
      <div className="contacto-informacion">
        <h3>Información</h3>
        <InformacionContacto
          svg="📍"
          informacion="Yrigoyen 1332, Tandil, Buenos Aires"
        />
        <InformacionContacto
          svg="✉️"
          informacion="egrowersschool@gmail.com"
          direccion="mailto:egrowersschool@gmail.com"
        />
        <InformacionContacto svg="📞" informacion="2494 675012" />
        <InformacionContacto
          svg="💬"
          informacion="Whatsapp: 2494 675012"
          direccion="https://wa.me/542494675012"
        />
        <InformacionContacto
          svg="📸"
          informacion="Back-Up"
          direccion="https://www.instagram.com/01.back_up/"
        />
      </div>

      {/* Mapa */}
      <div className="contacto-mapa">
        <MapContainer
          center={[-37.3182648, -59.1434335]}
          zoom={17}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%", borderRadius: "12px" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />

          {/* 📍 Marcador rojo: clic abre Google Maps */}
          <Marker
            position={[-37.3182648, -59.1434335]}
            icon={redIcon}
            eventHandlers={{
              click: () => window.open(googleMapsUrl, "_blank"),
            }}
          />

          {/* 🏷️ Cartel fijo animado (también clickeable) */}
          <Marker
            position={[-37.3182648, -59.1434335]}
            icon={customLabel}
          ></Marker>
        </MapContainer>
      </div>

      <GrowersDesktopAlrevez />
    </motion.section>
  );
};

export default Contacto;
