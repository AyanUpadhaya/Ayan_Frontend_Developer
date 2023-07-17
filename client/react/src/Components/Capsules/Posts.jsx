import React from 'react'

export const Posts = ({ posts }) => {
    return (
        <div>
            <div className="mb-4">
                {
                    posts.map(post => <div key={post.id} className='card'>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
