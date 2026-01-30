import React from "react";

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, original_language, release_date } =
    movie;
  // console.log(movie);
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "No-Poster.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star-1.png" alt="Star icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
