import React from 'react';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/heroSection/About';
import Skills from './components/heroSection/Skills';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;