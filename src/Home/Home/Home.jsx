import React from 'react';
import Hero from '../Hero/Hero';
import NaturalSenary from '../NaturalSenary/NaturalSenary';
import WhyChoose from '../WhyChoose/WhyChoose';
import TourPatner from '../TourPatner/TourPatner';
import Testomonial from '../Testomonial/Testomonial';
import ConnectedUs from '../ConectedUs/ConnectedUs';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <NaturalSenary></NaturalSenary>
           <WhyChoose></WhyChoose>
           <TourPatner></TourPatner>
           <Testomonial></Testomonial>
           <ConnectedUs></ConnectedUs>
            
        </div>
    );
};
export default Home;