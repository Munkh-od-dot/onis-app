import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Манай хаяг</h1>
        <p>Улаанбаатар хот, Баянзүрх дүүрэг, Сансар Имартын 3 давхарт "Оньс дэлгүүр"</p>
        <p><strong>Утас:</strong> +976 9009-0889, +976 7606-0006</p>
        <p><strong>Имэйл:</strong> info@datacare.mn</p>
        <p><strong>Цахим хуудас:</strong> www.datacare.mn</p>
      </div>

      <div className="contact-map">
        <iframe
          title="Onis Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5329.783519402272!2d106.92744407565053!3d47.91865087117726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693737ac4d6d5%3A0xe5852c7121077c31!2sSAN%20Business%20Center!5e0!3m2!1sen!2smn!4v1718500000000!5m2!1sen!2smn"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
