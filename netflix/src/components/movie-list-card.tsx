import React from 'react';
import '../styles/movie-list-card.css';
import { Navigate, useNavigate } from "react-router-dom";

function MovieListCard(props:{id:number, title:string,  poster_path:string, vote_average:number}) {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movies/${props.id}`); 
  };

  return (
    <div className="movie-list-card" onClick={handleCardClick}>

      <div className="movie-list-card-photo">
        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt='Movie poster' />
      </div>

      <div className="movie-list-card-infos">
        <span className="movie-list-card-title">
          {props.title}
        </span>

        <span className="movie-list-card-note">
         {props.vote_average.toFixed(1)}
        </span>
      </div>

    </div>
  );
}

export default MovieListCard;