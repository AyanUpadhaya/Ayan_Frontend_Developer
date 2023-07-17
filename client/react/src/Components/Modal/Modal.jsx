import React from 'react';

const Modal = ({ rocket }) => {

    return (
        <div className="modal fade" id={`modal${rocket.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">{rocket.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div id={`caroulsel${rocket.id}`} className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={rocket?.flickr_images[0]} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={rocket?.flickr_images[1]} className="d-block w-100" alt="..." />
                                </div>
                                
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#caroulsel${rocket.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#caroulsel${rocket.id}`}data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="text-dark m-auto py-3">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <h4>Height</h4>
                                <p>{rocket.height.feet} Feet</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4>Mass</h4>
                                <p>{rocket.mass.kg/1000} KG</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4>First Flight</h4>
                                <p>{rocket.first_flight}</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4>Active</h4>
                                <p>{rocket.active?"Yes":"No"}</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4>Cost</h4>
                                <p>${rocket.cost_per_launch/100000} Million</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4>Country</h4>
                                <p>{rocket.country}</p>
                            </div>
                            <div className='col-12'>
                                <a href={rocket.wikipedia} className="btn w-100 btn-primary">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;