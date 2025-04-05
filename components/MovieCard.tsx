import React from "react";

type CardProps = {
    title:string;
    image:string;
    desc:string;
};

const MovieCard:React.FC<CardProps> =({title,image,desc}) => {
    return(
        <div className="movie-card">
            <h3>{title}</h3>
            <img src={image} alt={title}/>
            <p>{desc.substring(0,100)}...</p>
            <button className = "fav-button">Like</button>

        </div>
    );
};

export default MovieCard;