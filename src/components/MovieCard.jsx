import React from "react";

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, original_language } = movie;
  return <p className="text-white">{title}</p>;
};

export default MovieCard;
