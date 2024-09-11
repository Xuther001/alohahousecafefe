import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Aloha House Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.8082165506286!2d106.6786269712377!3d10.777812374197236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f79d29e5271%3A0xbd91a4fc96575c0!2sAloha%20House!5e0!3m2!1sen!2s!4v1726071379775!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
