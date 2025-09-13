import React from 'react';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;