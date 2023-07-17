import React, { Fragment} from 'react';
import Modal from '../Modal/Modal';
import RocketCard from '../RocketCard/RocketCard';
import useFetch from '../../CustomHook/useFetch';

const RocketSection = () => {
    const [rockets, setRockets] = useFetch('http://localhost/spacefox/server/rockets.php')
    return (

            <div className="container py-3" id="rockets">
                <div className="text-center">
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

    );
};

export default RocketSection;