import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/images/profile.webp';

import Skills from '../skills/Skills';

const About = () => {
    return (
        <section id="about" className="p-8  w-full flex flex-col  items-center">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center md:items-start text-left max-w-4xl"
            >
                <div className="flex flex-col items-center">

                    <img src={profileImg} alt="Profile" className="w-48 h-48 rounded-full mb-4 md:mb-0" />
                    <h2 className="text-2xl mb-4 p-4">À propos de moi</h2>
                    <p className="text-center  p-4">
                        Je suis <span className="font-semibold">developpeuse web</span> spécialisée en FrontEnd.<br>
                        </br> Mon parcours m'a permis d'acquérir des compétences solides
                        en <span className="font-semibold">JavaScript, React,</span> et diverses technologies front-end et back-end.
                        <br></br>
                        Que ce soit pour un projet personnel ou professionnel, je suis toujours prête à donner le meilleur
                        de moi-même pour assurer le succès de chaque projet. N'hésitez pas à parcourir mon portfolio
                        pour découvrir mes réalisations et à me contacter pour toute collaboration ou projet.

                    </p>
                    <div className="transform hover:scale-105 duration-300 p-8 bg-gray-100 k rounded-lg">
                        <Skills />
                    </div>
                </div>

            </motion.div>
        </section>
    );
}

export default About;
