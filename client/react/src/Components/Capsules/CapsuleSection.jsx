import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../ContextProvider/ContextProvider';
import { Posts } from './Posts';
import Pagination from '../Pagination/Pagination';

const CapsuleSection = () => {
    const {capsules,setCapsules} = useContext(GlobalContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostPerPage] = useState(10);

    const getIndexOfLastPost = currentPage * postsPerPage;
    const getIndexOfFirstPost = getIndexOfLastPost - postsPerPage;
    const currentPost = capsules.slice(getIndexOfFirstPost,getIndexOfLastPost);

    //change the page
    const paginate =(pageNumber)=>{
     
        setCurrentPage(pageNumber)
    }

    return (
        <div className="container py-3 mt-5 position-relative" id="capsules">

            <div className="text-center">
                <h2 className='display-3 fw-bold'>SpaceX Capsules</h2>
                <p>Our Capsules</p>
            </div>
            <div className='mt-3 mb-3'>
                <Posts posts={currentPost}></Posts>

                <Pagination postsPerPage={postsPerPage} totalPosts={capsules.length} paginate={paginate}></Pagination>
            </div>

        </div>
    );
};

export default CapsuleSection;