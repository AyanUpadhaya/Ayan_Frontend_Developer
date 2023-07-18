import React, { Fragment, useContext, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import RocketCard from '../RocketCard/RocketCard';
import { GlobalContext } from '../../ContextProvider/ContextProvider';
import './Rockets.css';
import Loader from '../Loader/Loader';



const RocketSection = () => {
  const { rockets } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [searchFilter, setSearchFilter] = useState({
    active: '',
    layout: '',
    country: '',
  });
  const { active, layout, country } = searchFilter;

  useEffect(() => {
    setFilteredRockets(rockets);
  }, [rockets]);

  const filtered = filteredRockets.filter((rocket) => {
    if (
      (active === '' || rocket.active === (active === 'true')) &&
      (layout === '' || (rocket?.engines?.layout || '').toLowerCase().includes(layout.toLowerCase())) &&
      (country === '' || rocket.country.toLowerCase().includes(country.toLowerCase()))
    ) {
      return true;
    }
    return false;
  });

  const handleFilterChange = (e) => {
    setSearchFilter({ ...searchFilter, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-3 mt-5 position-relative" id="rockets">
      <div className="text-center">
        <h2 className="display-3 fw-bold">SpaceX Launches</h2>
        <p>Believe in Future</p>
      </div>

      <div>
        <input type="text" name="" id="" className='form-control' placeholder='Search By Name' onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>

      <div className="d-flex gap-2">
        <div className="mb-3">
          <label htmlFor="activeFilter" className="form-label">
            Active:
          </label>
          <select
            className="form-select"
            id="activeFilter"
            name="active"
            value={active}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="true">Active</option>
            <option value="false">Deactive</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="layoutFilter" className="form-label">
            Layout:
          </label>
          <select
            className="form-select"
            id="layoutFilter"
            name="layout"
            value={layout}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="single">Single</option>
            <option value="octaweb">Octaweb</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="countryFilter" className="form-label">
            Country:
          </label>
          <select
            className="form-select"
            id="countryFilter"
            name="country"
            value={country}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="United States">United States</option>
            <option value="Republic of the Marshall Islands">Republic of the Marshall Islands</option>
          </select>
        </div>
      </div>
      {filtered.length === 0 ? (
        <Loader /> // Render the custom loader when there are no filtered rockets
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {filtered
            .filter((rocket) => {
              return searchTerm.toLowerCase() === '' ? rocket : rocket.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((rocket, index) => (
              <Fragment key={rocket.id}>
                <RocketCard key={rocket.id} img={rocket.flickr_images[1]} name={rocket.name} modalId={`modal${rocket.id}`} />
                <Modal key={`modal-${rocket.id}`} rocket={rocket} />
              </Fragment>
            ))}
        </div>
      )}
    </div>
  );
};

export default RocketSection;
