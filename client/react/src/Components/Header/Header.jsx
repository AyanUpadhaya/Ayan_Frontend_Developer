import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'
import rocket from '../../assets/rocket.png'
const Header = () => {
    return (
        <header className='header'>
            <Navigation></Navigation>

            <div className='background bg-dark'>

                <section className='mt-5 pt-5 container'>
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                        <div>
                            <div className="text-white">
                                <h1 className="header-title display-1">Explore the Future</h1>
                                <p className="header-subtitle">Discover the incredible achievements of SpaceX in space exploration.</p>
                                <div className='d-flex gap-2'>
                                <a className="btn btn-primary rounded-0" href="#">Learn More</a>
                                <a className="btn btn-outline-secondary rounded-0" href="#">Get Update</a>
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