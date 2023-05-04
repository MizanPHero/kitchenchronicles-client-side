import React from 'react';
import Hero from './Hero';
import Testimonial from './Testimonial';
import OurClients from './OurClients';
import Slider from './Slider';



const Home = () => {
    return (
        <>
           <Hero></Hero>
           <Testimonial></Testimonial>
           <Slider></Slider>
           <OurClients></OurClients>
        </>
    );
};

export default Home;