import React from "react";
import { moviesdata } from "../Moviesdata";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { chronology } = useParams();
  const movielink = moviesdata.find(
    (item) => item.chronology === parseInt(chronology)
  );

  if (!movielink) {
    return <div className="text-white">Movie not found</div>;
  }

  const {
    title,
    release_date,
    overview,
    cover_url,
    duration,
    box_office,
    directed_by,
    phase,
    release_order,
    post_credit_scenes,
    saga,
  } = movielink;

  return (
    <div>
      <div className="container mt-10 text-white">
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
        <div>
          <p>Duration: {duration}&nbsp;minutes</p>
          <p>Director: {directed_by}</p>
          <p>Box Office:&nbsp;&nbsp; $ {box_office} billion </p>
          <p>chronology:&nbsp;{chronology}</p>
          <p>Release order: &nbsp;{release_order}</p>
          <p>Phase:&nbsp;{phase}</p>
          <p>Saga:&nbsp;{saga}</p>
          <p>Post credit scenes:&nbsp;{post_credit_scenes}</p>
        </div>
        <div className="mt-5">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
