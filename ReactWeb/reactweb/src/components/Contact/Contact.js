import React from 'react';
import './Contact.css';
import {MdEmail} from 'react-icons/md';
import {FaMapMarkerAlt} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>İLETİŞİM</h2>

      <div className='container-contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hakanntok6@gmail.com</h5>
            <a href='mailto:hakanntok6@gmail.com'>Mesaj gönder</a>
          </article>
          <article className='contact__option'>
            <FaMapMarkerAlt className='contact__option-icon'/>
            <h4>Adres</h4>
            <h5>Ankara/Türkiye</h5>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact

