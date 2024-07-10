import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-gray-800 text-white p-4 text-center">
            <motion.h1
                className="text-3xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                NORI Meriem 
            </motion.h1>
            <nav className='flex flex-start '>
                <ul className="flex justify-center space-x-4 mt-4">
                    {['À propos', 'Projets', 'Contact'].map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <a href={`#${item.toLowerCase()}`} className="hover:underline">
                                {item}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
