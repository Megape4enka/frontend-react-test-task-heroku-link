import React from 'react';

const PostItem = (props) => {
    return (
        <div className="dogs">
            <div className="img-container">
                <img src={props.post.image} alt={props.post.breedId.title}/>
            </div>
            <div className="info">
                <h3 className="name">Breed: <span>{props.post.breedId.breed}</span></h3>
                <small className="type">{props.post.breedId.title}</small>
            </div>
        </div>
    );
};

export default PostItem;