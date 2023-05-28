import React, { useEffect } from "react";
import { moviesdata } from "../Moviesdata";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

const MovieDetails = () => {
  const { chronology } = useParams();
  const movielink = moviesdata.find(
    (item) => item.chronology === parseInt(chronology)
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component loads
  }, []);

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
    trailer_url,
  } = movielink;

  return (
    <div className="mb-10">
      <Navbar />
      <div className="mx-auto max-w-[1024px] p-10 pt-[100px]">
        <div>
          <h1 className="p-4 text-center text-2xl font-bold text-white md:text-3xl">
            {title}
          </h1>
        </div>
        <div className="container mx-auto mt-5 flex max-w-[] flex-col justify-start text-white md:flex-row md:gap-20">
          <div className="mx-auto h-[300px] w-[200px] sm:h-[500px] sm:w-[300px] md:mx-0">
            <img
              className="h-auto max-w-full border-4 border-gray-500 object-cover"
              src={cover_url}
              alt={title}
            />
          </div>
          <div className="mx-auto flex flex-col md:mx-0">
            <p className="p-3">Release Date{release_date}</p>
            <p className="p-3">Duration: {duration}&nbsp;minutes</p>
            <p className="p-3">Director: {directed_by}</p>
            <p className="p-3">
              Box Office:&nbsp;&nbsp; $ {box_office} billion{" "}
            </p>
            <p className="p-3">chronology:&nbsp;{chronology}</p>
            <p className="p-3">Release order: &nbsp;{release_order}</p>
            <p className="p-3">Phase:&nbsp;{phase}</p>
            <p className="p-3">Saga:&nbsp;{saga}</p>
            <p className="p-3">Post credit scenes:&nbsp;{post_credit_scenes}</p>
          </div>
        </div>
        <div className="container mx-auto mt-5 md:mx-0 md:max-w-[800px]">
          <p className=" text-white md:p-5 md:pl-0">{overview}</p>
        </div>
      </div>
      <div className="md:p-10 lg:mx-auto lg:max-w-[1024px]">
        <p className="px-10 py-2 text-2xl text-white">Trailer</p>
        {trailer_url && (
          <div className="container mx-auto mt-5 p-1">
            <iframe
              className="mx-auto border-4 border-brand sm:h-[auto] sm:w-[350px] md:mx-0 md:h-[315px] md:w-[560px]"
              width="200"
              height="150"
              src={movielink.trailer_url}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
