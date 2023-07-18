import React from 'react';


const PostsCard = ({post}) => {
    return (
        <div className='col-12 col-md-4'>
            <div className='card' style={{ background: "#423529", color: "#fff", height: "220px" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.serial}</h5>
                    <p className="card-text">
                        Last Update:<br/>
                        {post.last_update}
                    </p>
                    <button className="mt-auto btn btn-outline-light" data-bs-toggle="modal" data-bs-target={`#modal-${post.id}`}>Show Details</button>
                </div>
            </div>
            
        </div>
    );
};

export default PostsCard;