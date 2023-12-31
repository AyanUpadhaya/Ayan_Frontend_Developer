import React from 'react';
import { SwiperSlide } from 'swiper/react';

const CrewCard = ({ crew }) => {
    return (

        <div className="card bg-transparent border-0 text-white">
            <img src={crew?.image} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{crew?.name}</h5>
                <p className="card-text">Agency: {crew?.agency}</p>
            </div>
        </div>
    );
};

export default CrewCard;