import React from 'react';
import './RocketCard.css'
const RocketCard = ({img,name,modalId}) => {
    return (
        <div>
        <div className="col">
                <div className="card">
                    <img src={img}className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Some Information about Rocket</p>
                            <div className="btn btn-primary rounded-0" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>View More</div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default RocketCard;