import React from 'react';
import SlideShow from '../SlideShow';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Featured from '../components/Featured';

const Home = () => {
    return (
    <>
        <div className="header">
        <SlideShow />
        </div>
                <Link to="/properties" className="cta-button-hero">
                    View Properties
                </Link>

        <Services />
        <Featured />
        
    </>
    );
};

export default Home