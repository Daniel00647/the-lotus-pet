import React from 'react';
import './InfoSection.css'; // Asegúrate de que este archivo esté en la misma carpeta

const InfoSection = () => {
  return (
    <div className="info-section">
      <h2>¿Sabes qué puede hacer ThePetLotus por ti y por tu peludo?</h2>
      <ul className="info-list">
        <li>Te ayudamos a escoger la comida que tu peludo necesita en más de 25 marcas de alimento para perro.</li>
        <li>¡Te damos más tiempo para compartir con tu hijo de cuatro patas! Porque te llevamos la comida a tu casa u oficina.</li>
        <li>Te apoyamos en esa difícil búsqueda de hotel o colegio para tu perro.</li>
        <li>Te ayudamos a encontrar el servicio de baño a domicilio que más le convenga a tu peludo.</li>
      </ul>
    </div>
  );
};

export default InfoSection;