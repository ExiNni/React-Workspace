import React from "react";
import './MovieCard.css';

const MovieCard = ({movie}) => (
    <div className="movie-card">
        {movie.poster && <img src={movie.poster} />}
        <h2>{movie.title}</h2>
        <p>평점: {movie.rating}</p>
    </div>
);

export default MovieCard;