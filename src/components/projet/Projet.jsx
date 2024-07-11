import React from 'react';
import { motion } from 'framer-motion';
import project1Img from '../../assets/images/homyfood.jpg';
import project2Img from '../../assets/images/Portfolio-photographe.jpg';
import project3Img from '../../assets/images/KASA-logement.jpg';
import project4Img from '../../assets/images/ninaCarducci.png';
import project5Img from '../../assets/images/ArgentBank.png';
import htmlLogo from '../../assets/logo/html5.png';
import sassLogo from '../../assets/logo/sass.png';
import cssLogo from '../../assets/logo/css.svg';
import javascriptLogo from '../../assets/logo/javascript.jpg';
import reactLogo from '../../assets/logo/React.png';
import reduxLogo from '../../assets/logo/redux.svg';
import lighthouseLogo from '../../assets/logo/lighthouse.png';



const projects = [
    {
        title: "OhMyFood",
        description: "Ohmyfood est une entreprise de commande de repas en ligne.Un site Responsive et Mobile First fait avec des animations en sass",
        image: project1Img,
        github: "https://github.com/meriemno/ohmyfood",
        technologies: [sassLogo, htmlLogo, cssLogo],


    },
    {
        title: "Portfolio-architecte-sophie-bluel",
        description: "Développer et mettre en œuvre des fonctionnalités clés pour le site portfolion de la page de présentation des travaux et la conception de la page de connexion de l'administrateur et l'implémentation d'une modale pour l’ajout de nouveaux projets ",
        image: project2Img,
        github: "https://github.com/meriemno/Portfolio-architecte-sophie-bluel",
        technologies: [javascriptLogo],
    },
    {
        title: "Kasa",
        description: "Moderniser l'Architecture Technique ,L'Implémentation du Nouveau Design et Développer des Composants Réutilisables et Modulaires.",
        image: project3Img,
        github: "https://github.com/meriemno/Kasa",
        technologies: [sassLogo, htmlLogo, cssLogo, javascriptLogo, reactLogo],
    }
    ,
    {
        title :"Nina Carducci",
        description: "Auditer et Optimisez le référencement d'un site de photographe Nina Carducci en ameliorant l'accessibilité,la performance et le réferrencement SEO.",
        image: project4Img,
        github: "https://github.com/meriemno/ninacarducci.github.io",
        technologies: [lighthouseLogo],
    },
    {
        title: "ArgentBank",
        description: "le développement front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.",
        image: project5Img,
        github: "https://github.com/meriemno/ArgentBank-website",
        technologies: [htmlLogo, cssLogo, javascriptLogo, reactLogo, reduxLogo],
    },


];

const Projects = () => {
    return (
        <section id="projects" className="p-8 bg-gray-100 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl mb-4 text-center">Mes Projets</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                    
                        <motion.div
                            key={project.title}
                            className="project p-4 bg-white shadow-md rounded-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-500 hover:underline mb-2"
                                >
                                   <img src="https://img.icons8.com/ios-filled/50/000000/github.png" className='w-8 h-8 transaction hover:scale-110 duration-300 object-cover'/>
                                </a>
                            </div>
                                
                                <p>{project.description}</p><br></br>
                                <div className="flex space-x-2 mt-2">
                                    <h3>Compétences :</h3>
                                    {project.technologies.map((tech, techIndex) => (
                                        <img key={techIndex} src={tech} alt="Technology logo" className="w-8 h-8 rounded" />
                                    ))}
                                    
                                </div>
                                
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;