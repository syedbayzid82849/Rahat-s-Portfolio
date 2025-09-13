import React from 'react';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/heroSection/About';
import Skills from './components/heroSection/Skills';
import Services from './components/heroSection/Services';
import Contact from './components/heroSection/Contact';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;