import React from 'react';
import { motion } from 'framer-motion';
import htmlLogo from '../../assets/logo/html5.webp';
import cssLogo from '../../assets/logo/css.webp';
import sassLogo from '../../assets/logo/sass.webp';
import jsLogo from '../../assets/logo/javascript.webp';
import reactLogo from '../../assets/logo/react.webp';
import nodeLogo from '../../assets/logo/nodejs.webp';
import reduxLogo from '../../assets/logo/redux.webp';
// import mongoLogo from '../../assets/logo/mongodb.png';
// import sqlLogo from '../../assets/logo/sql.png';

const skills = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'Sass', logo: sassLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'NodeJS', logo: nodeLogo },
    { name: 'Redux', logo: reduxLogo },

];

const Skills = () => {
    return (
        <section id="skills" className="p-8 w-full bg-white flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl"
            >
                <h2 className="text-2xl mb-8">Compétences</h2>
                <div className="grid grid-cols-4 md:grid-cols-7  center gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center ">
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
