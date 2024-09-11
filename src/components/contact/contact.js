import React from 'react';
import './contact.css';

const Contact = () => {
    return (
      <div className="contact-container">
        <div className="contact-info">
          <p>Address: <span>283/42 Cách Mạng Tháng 8, Phường 12, Quận 10, Tp Hồ Chí Minh</span></p>
          <p>Hotline: <a href="tel:0936886149">093 688 6149</a></p>
          <p>Email: <a href="mailto:camtien8866@gmail.com">camtien8866@gmail.com</a></p>
        </div>
      </div>
    );
  };

export default Contact;