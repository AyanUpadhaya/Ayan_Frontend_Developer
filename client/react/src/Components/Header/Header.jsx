import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'
import rocket from '../../assets/rocket.png'
const Header = () => {
    return (
        <header className='header' id='#top'>
            <Navigation></Navigation>

            <div className='background bg-dark'>

                <section className='mt-5 pt-5 container'>
                    <div className="mt-5 mt-md-0 d-flex flex-md-row justify-content-between align-items-centert">
                        <div>
                            <div className="text-white header_content">
                                <h1 className="header-title">Explore the Future</h1>
                                <p className="header-subtitle">Discover the incredible achievements of SpaceX in space exploration.</p>
                                <div className='d-flex gap-2'>
                                <a className="btn btn-lg btn-primary rounded-0" href="#">Learn More</a>
                                <a className="btn btn-lg btn-outline-secondary rounded-0" href="#">Get Update</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>

        </header>
    );
};

export default Header;