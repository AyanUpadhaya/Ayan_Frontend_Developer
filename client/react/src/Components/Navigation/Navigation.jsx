import React from 'react';
import './Navigation.css'
const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-transparent position-absolute w-100 z-50">
                <div className="container">
                    <a className="navbar-brand text-white fs-1" href="#">SpaceX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mt-2">
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href="#top">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#rockets">ROCKETS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#capsules">CAPSULES</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-light rounded-0">GET STARTED</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;