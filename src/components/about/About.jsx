import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/images/FrontEnd.webp';

const About = () => {
    return (
        <section id="about" className="p-8  w-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center md:items-start text-left max-w-4xl"
            >
                 <img src={profileImg} alt="Profile" className="w-48 h-48 rounded-full md:mr-8 mb-4 md:mb-0" />
                <h2 className="text-2xl mb-4">À propos de moi</h2>
                <p className="text-center">
                    En tant que developpeuse web spécilisée en FrontEnd, Mon parcours m'a permis d'acquérir des compétences solides
                    en JavaScript, React, et diverses technologies front-end et back-end. J'adore relever des défis et
                    apprendre de nouvelles choses chaque jour, ce qui me permet de rester à la pointe des dernières
                    tendances technologiques.
                    Que ce soit pour un projet personnel ou professionnel, je suis toujours prêt à donner le meilleur
                    de moi-même pour assurer le succès de chaque entreprise à laquelle je participe.</p>
            </motion.div>
        </section>
    );
}

export default About;
