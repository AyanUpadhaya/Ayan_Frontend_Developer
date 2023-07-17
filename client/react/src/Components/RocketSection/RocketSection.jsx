import React, { Fragment, useContext, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import RocketCard from '../RocketCard/RocketCard';
import { GlobalContext } from '../../ContextProvider/ContextProvider';

const RocketSection = () => {
    const {rockets, Loader,} = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRockets,setFilteredRockets] =useState([])

    //create copy of rockets when rockets are loaded
    useEffect(()=>{
        setFilteredRockets(rockets)
    },[rockets])


    //handle search
    const handleSearch = (e) => {
        const rocketName = e.target.value.toLowerCase();
        setSearchTerm(rocketName);

        const filtered = filteredRockets.filter(rocket =>
            rocket.name.toLowerCase().includes(rocketName)
        );
        setFilteredRockets(filtered);

        if(e.target.value ==''){
            setFilteredRockets(rockets)
        }
    };
    //handle filter
    const handleFilter = (e) => {
        const filterValue = e.target.value.toLowerCase();
        console.log(filterValue)
    
        if (filterValue === 'active') {
            const filtered = filteredRockets.filter(rocket => rocket?.active==true);
            setFilteredRockets(filtered);
        }else if (filterValue === 'filter') {
            setFilteredRockets(rockets);
        }else if(filterValue === "octaweb"){
            const filter = filteredRockets.filter(rocket => rocket.engines?.layout==filterValue);
            setFilteredRockets(filter);
        }else if(filterValue === "united states"){
            const filter = filteredRockets.filter(rocket => rocket.country.toLowerCase() == filterValue);
            setFilteredRockets(filter);
        }else{
            setFilteredRockets(rockets);
        }
    };

    

    return (

        <div className="container py-3 mt-5 position-relative" id="rockets">

            <div className="text-center">
                <h2 className='display-3 fw-bold'>SpaceX Launches</h2>
                <p>Believe in Future</p>

            </div>
            <div className='mb-5 d-flex'>
                <input type="text" className='form-control rounded-0' placeholder='Search Rocket' value={searchTerm} onChange={handleSearch} />
                <select className="form-select bg-danger w-25 text-light rounded-0" aria-label="Default select example" onChange={handleFilter}>
                    <option defaultValue="filter">Filter</option>
                    <option defaultValue="active">Active</option>
                    <option defaultValue="octaweb">Octaweb</option>
                    <option defaultValue="United States">United States</option>
                </select>
            </div>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {filteredRockets?.map((rocket, index) =>
                    <Fragment key={rocket.id}>
                        <RocketCard key={rocket.id} img={rocket.flickr_images[1]} name={rocket.name} modalId={`modal${rocket.id}`}></RocketCard>

                        <Modal key={`modal-${rocket.id}`} rocket={rocket}></Modal>
                    </Fragment>
                )}
            </div>

        </div>

    );

    
};

export default RocketSection;