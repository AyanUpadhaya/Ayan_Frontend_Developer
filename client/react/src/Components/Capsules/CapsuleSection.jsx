import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../ContextProvider/ContextProvider';
import { Posts } from '../Posts/Posts';
import Pagination from '../Pagination/Pagination';
import './Capsulses.css'



const CapsuleSection = () => {
    const { capsules, setCapsules } = useContext(GlobalContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [searchFilter, setSearchFilter] = useState({
        status: '',
        type: ''
    })

    const { status, original_launch, type } = searchFilter

    const getIndexOfLastPost = currentPage * postsPerPage;
    const getIndexOfFirstPost = getIndexOfLastPost - postsPerPage;
    const currentPost = capsules.slice(getIndexOfFirstPost, getIndexOfLastPost);

    //change the page
    const paginate = (pageNumber) => {

        setCurrentPage(pageNumber)
    }

    //capsules filtering

    const filteredCapsules = currentPost.filter(capsule => {
        if (
            (status === '' || capsule.status.toLowerCase().includes(status.toLowerCase())) &&
            (type === '' || capsule.type.toLowerCase().includes(type.toLowerCase()))
        ) {
            return true;
        }
        return false;
    })

    const handleFilterChange = (e) => {
        setSearchFilter({...searchFilter,[e.target.name]:e.target.value})
        setCurrentPage(1)
    }

    return (
        <div className="container py-3 mt-5 position-relative" id="capsules">

            <div className="text-center">
                <h2 className='display-3 fw-bold'>SpaceX Capsules</h2>
                <p>Our Capsules</p>
            </div>
            <div className='mt-3 mb-3'>
                <div className="d-flex gap-2">
                <div className="mb-3">
                    <label htmlFor="statusFilter" className="form-label">
                        Status:
                    </label>
                    <select
                        className="form-select"
                        id="statusFilter"
                        name="status"
                        value={status}
                        onChange={handleFilterChange}
                    >
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="retired">Retired</option>
                        <option value="destroyed">Destroyed</option>
                    </select>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="typeFilter" className="form-label">
                        Type:
                    </label>
                    <select
                        className="form-select"
                        id="typeFilter"
                        name="type"
                        value={type}
                        onChange={handleFilterChange}
                    >
                        <option value="">All</option>
                        <option value="Dragon 1.0">Dragon 1.0</option>
                        <option value="Dragon 1.1">Dragon 1.1</option>
                    </select>
                </div>
                </div>
                <Posts posts={filteredCapsules}></Posts>
                <Pagination postsPerPage={postsPerPage} totalPosts={capsules.length} paginate={paginate}></Pagination>
            </div>

        </div>
    );
};

export default CapsuleSection;