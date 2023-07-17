import React from 'react'

export const Posts = ({ posts }) => {
    return (
        <div className='w-100 m-auto'>
            <div className="mb-4 row">
                {
                    posts.map(post => <div key={post.id} className='col-12 col-md-4'>
                        <div  className='card' style={{background:"#423529",color:"#fff",height:"200px"}}>
                        <div class="card-body">
                            <h5 class="card-title">{post.serial}</h5>
                            <p class="card-text">
                                Last Update:<br></br>
                                {post.last_update}
                            </p>
                            <button class="mt-auto btn btn-outline-light">Show Details</button>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    )
}
