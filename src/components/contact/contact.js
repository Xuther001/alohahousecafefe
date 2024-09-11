import React from 'react';
import './contact.css';
import locationIcon from '../../assets/icon-location.png';
import mailIcon from '../../assets/icon-mail.png';
import phoneIcon from '../../assets/icon-phone.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <p>
          <img src={locationIcon} alt="Location" className="contact-icon" />
          <span>283/42 Cách Mạng Tháng 8, Phường 12, Quận 10, Tp Hồ Chí Minh</span>
        </p>
        <p>
          <img src={phoneIcon} alt="Phone" className="contact-icon" />
          <a href="tel:0936886149">093 688 6149</a>
        </p>
        <p>
          <img src={mailIcon} alt="Email" className="contact-icon" />
          <a href="mailto:camtien8866@gmail.com">camtien8866@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
