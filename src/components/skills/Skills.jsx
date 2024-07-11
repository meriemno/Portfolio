import React from 'react';
import { motion } from 'framer-motion';
import htmlLogo from '../../assets/logo/html5.png';
import cssLogo from '../../assets/logo/css.svg';
import sassLogo from '../../assets/logo/sass.png';
import jsLogo from '../../assets/logo/javascript.jpg';
import reactLogo from '../../assets/logo/react.svg';
// import nodeLogo from '../../assets/logo/nodejs.png';
// import mongoLogo from '../../assets/logo/mongodb.png';
// import sqlLogo from '../../assets/logo/sql.png';

const skills = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'Sass', logo: sassLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },

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
                <div className="grid grid-cols-4 md:grid-cols-5      center gap-8">
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
