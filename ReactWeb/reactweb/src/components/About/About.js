import React from 'react';
import './About.css';
import ME from '../../images/hakanweb.jpg';
import {FaAward} from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
        <h2>Hakkımda</h2>

        <div className='container-about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt='Hakkımda Resim' />
                </div>
            </div>

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Deneyim</h5>
                        <small>Yeni Mezun (2022)</small>
                    </article>
                </div>

                <p>
                3 Haziran 1997`de Ankara`nın Yenimahalle 
                ilçesinde doğdum. İlköğretim ve Ortaöğretim 
                dönemimi Keçiören`in Şenlik İlköğretim Okulunda 
                tamamladım. Ardından lise dönemimi Kalaba Lisesinde 
                tamamladım. Lise döneminin sonunda Süleymen Demirel 
                Üniversitesi Bilgisayar Mühendisliğini kazandım. 2022 
                Haziran ayı itibariyle Bilgisayar Mühendisliği 
                bölümünden mezun oldum.
                </p>

            </div>
        </div>
    </section>
  )
}

export default About
