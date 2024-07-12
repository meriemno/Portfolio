import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2kidvzf', 'template_njfympy', e.target, 'EjIgDHNcEzSHh6blM')
            .then((result) => {
                console.log(result.text);
                setStatus('Message envoyé avec succès!');
            }, (error) => {
                console.log(error.text);
                setStatus('Erreur lors de l\'envoi du message.');
            });

        e.target.reset();
    };
    return (
        <section id="contact" className="p-8 w-full flex justify-center items-center">
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl mb-4 text-center">Contactez-moi</h2>
                <form className="space-y-4" onSubmit={sendEmail}>
                    <label className="block">
                        Nom:
                        <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block">
                        Email:
                        <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block">
                        Message:
                        <textarea name="message" className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
                    </label>
                    <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded">Envoyer</button>
                </form>
                {status && <p className="mt-4 text-center">{status}</p>}
            </motion.div>
        </section>
    );
}

export default Contact;
