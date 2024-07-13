import React from 'react';
import Header from '../layout/header/Header';
import About from '../components/about/About';
import Projects from '../components/projet/Projet';
import Contact from '../components/form/Contact';
import '../index.css';
import Footer from '../layout/footer/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main className="w-full flex flex-col items-center">
                <About />
                <Projects />
                <Contact />
                <Footer />
              
            </main>
        </div>
    );
}

export default App;
