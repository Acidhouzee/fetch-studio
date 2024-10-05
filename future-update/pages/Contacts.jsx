import React from 'react';
import ContactForm from '../../src/components/contactForm/ContactForm.jsx';

const Contacts = () => {
    return (
        <>
           <section className='contact-us'>
                <div className='container'>
                    <ContactForm />
                </div>
            </section> 
        </>
    );
};

export default Contacts;