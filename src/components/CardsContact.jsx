import React, { useState } from 'react';
import location from '../assets/images/map.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import email from '../assets/images/email-card.svg';
import '../styles/CardsContact.css';

const CardsContact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/mjkrrnpp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setShowSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setShowSuccess(false), 4000);
        } else {
            alert('Ocurrió un error. Intenta de nuevo.');
        }
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-globalCards">
                    {[
                        { icon: location, title: 'NUESTRA OFICINA PRINCIPAL', text: '4797 North West 72 Avenue Miami, Florida 33166' },
                        { icon: whatsapp, title: 'WHATSAPP', text: '+1 (786) 397-7418', link: 'https://wa.me/17863977418' },
                        { icon: email, title: 'CORREO ELECTRÓNICO', text: 'tradeexchangeservice@gmail.com' }
                    ].map(({ icon, title, text, link }, i) => {
                        const card = (
                            <div key={i} className="contact-card glass">
                                <img className="contact-img" src={icon} alt={title} />
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                        );
                        return link ? (
                            <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="contact-link">{card}</a>
                        ) : card;
                    })}
                </div>

                <div className="contact-content">
                    <div className="form-container">
                        <h2>Déjanos tu mensaje</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Correo electrónico"
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-full">
                                <label>Mensaje</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                ></textarea>
                            </div>
                            <button className='button-contact' type="submit">Enviar mensaje</button>
                        </form>
                        {showSuccess && (
                            <div className="success-modal">
                                <p>✅ ¡Tu mensaje fue enviado con éxito!</p>
                            </div>
                        )}
                    </div>

                    <div className="map-container">
                        <iframe
                            title="mapa"
                            src="https://maps.google.com/maps?q=4797%20North%20West%2072%20Avenue%20%20MIAMI%2C%20FLORIDA%2033166%20&t=m&z=12&output=embed&iwloc=near"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardsContact;
