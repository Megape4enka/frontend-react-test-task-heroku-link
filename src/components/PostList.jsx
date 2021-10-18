import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {

    if(!posts.length) {
        return (
            <h1>Пёселей нет<i>😕</i></h1>
        )
    }

    return (
        <div className='dogs-list'>
            {
                posts.map(post =>
                    <PostItem post={post} key={post._id}/>
                )
            }
        </div>
    );
};

export default PostList;