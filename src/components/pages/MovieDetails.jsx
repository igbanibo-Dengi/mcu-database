import React, { useState } from "react";
import { moviesdata } from "../Moviesdata";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { title } = useParams();
  const [movielink] = useState(() => moviesdata.find((m) => m.title === title));

  if (!movielink) {
    return <div className="text-white">Movie not found</div>;
  }

  const { release_date, overview, cover_url } = movielink;

  return (
    <div className="container mt-10">
      <div className="flex justify-center">
        <img
          className="h-auto max-w-full object-cover"
          src={cover_url}
          alt={title}
        />
      </div>
      <div className="mt-5 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">{release_date}</p>
      </div>
      <div className="mt-5">
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
