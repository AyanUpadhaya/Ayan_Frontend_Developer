import React, { Fragment, useEffect, useState } from 'react';
import RocketCard from '../RocketCard/RocketCard';
import Modal from '../Modal/Modal';

const Main = () => {
    const [rockets, setRockets] = useState([])

    useEffect(() => {
        fetch('http://localhost/spacefox/server/rockets.php')
            .then(res => res.json())
            .then(data => setRockets(data))
    }, [])
    return (
        <main className='bg-secondary'>
            <div className="container py-3">
                <div className="text-center text-white">
                    <h2 className='display-3 fw-bold'>SpaceX Launches</h2>
                    <p>Believe in Future</p>
                </div>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    {rockets.map((rocket,index) =>
                        <Fragment>
                            <RocketCard key={rocket.id} img={rocket.flickr_images[1]} name={rocket.name} modalId={`modal${rocket.id}`}></RocketCard>

                            <Modal key={index} rocket={rocket}></Modal>
                        </Fragment>
                        )}
                </div>

            </div>
        </main>
    );
};

export default Main;