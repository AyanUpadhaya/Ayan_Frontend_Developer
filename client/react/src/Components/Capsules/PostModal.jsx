import React from 'react';

const PostModal = ({ post }) => {
    return (
        <div className="modal fade" tabIndex="-1" id={`modal-${post.id}`}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header bg-secondary">
                        <h5 className="modal-title text-light">{post?.serial}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-secondary">
                        <div className="text-light m-auto py-3">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <h4>Reuse Count</h4>
                                    <p>{post?.reuse_count} Feet</p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <h4>Water Landings</h4>
                                    <p>{post?.water_landings}</p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <h4>Land Landings</h4>
                                    <p>{post?.land_landings}</p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <h4>Status</h4>
                                    <p>{post?.status}</p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <h4>Type</h4>
                                    <p>{post?.type}</p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <h4>ID</h4>
                                    <p>{post?.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostModal;