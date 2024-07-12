import React from 'react';
import { motion } from 'framer-motion';
import linkedinIcon from '../../assets/logo/linkedin.webp';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 w-full">
            <motion.div
                className="flex justify-between items-center max-w-6xl mx-auto"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold">NORI Meriem</h1>
                <nav className='mt-1'>
                    <ul className="flex items-center space-x-4">
                        <li><a href="#about" className="hover:underline">À propos</a></li>
                        <li><a href="#projects" className="hover:underline">Projets</a></li>
                        <li><a href="#skills" className="hover:underline">compétences</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                        <li><a href="https://www.linkedin.com/in/meriem-jebbour-5609007a/"className="flex justify-center  space-x-2 hover:underline">
                            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 rounded-full bg-white" />
                            <span>Mon profil LinkedIn</span>
                        </a></li>
                       
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
}

export default Header;
