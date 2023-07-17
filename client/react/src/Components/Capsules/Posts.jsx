import React, { Fragment } from 'react'
import PostsCard from './PostsCard'
import PostModal from './PostModal'

export const Posts = ({ posts }) => {
    return (
        <div className='w-100 m-auto'>
            <div className="mb-4 row">
                {
                    posts.map((post,index) => <Fragment key={index}>
                        <PostsCard key={post.id} post={post}></PostsCard>
                        <PostModal key={`modal-${post.id}`} post={post}></PostModal>
                    </Fragment>)
                }
            </div>
        </div>
    )
}
