import React from 'react';
import { motion } from 'framer-motion';

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
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:underline">À propos</a></li>
                        <li><a href="#projects" className="hover:underline">Projets</a></li>
                        <li><a href="#skills" className="hover:underline">compétences</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                       
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
}

export default Header;
