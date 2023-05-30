import React, { useEffect } from "react";
import { seriesdata } from "../Seriesdata";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SeriesDetails = () => {
  const { id } = useParams();
  const seriesLink = seriesdata.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component loads
  }, []);

  if (!seriesLink) {
    return <div className="text-white">Movie not found</div>;
  }

  const {
    title,
    release_date,
    last_aired_date,
    number_of_seasons,
    network,
    overview,
    cover_url,
    trailer_url,
  } = seriesLink;

  return (
    <div className="mb-10">
      <nav className="fixed z-10 w-full">
        <div className="h-19 mx-auto flex w-[100vw] max-w-[1400px] items-center justify-between bg-black px-4 py-5 text-white md:p-10">
          <h1 className="w-full text-2xl font-bold text-brand  md:text-3xl">
            MCU
          </h1>
          <ul className="flex justify-between gap-3">
            <li className="w-max">
              <Link
                to="/"
                className="w-fit cursor-pointer rounded border border-gray-600 p-1 text-[14px] transition-all hover:border-brand hover:text-brand md:p-2 md:font-bold"
              >
                Movies
              </Link>
            </li>
            <li className="w-max">
              <a
                href="#series"
                className="w-fit cursor-pointer rounded border border-brand p-1 text-[14px] transition-all hover:border-brand hover:text-brand md:p-2 md:font-bold"
              >
                Tv Shows
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
          <div className="mx-auto flex flex-col md:mx-0 md:my-auto">
            <p className="p-3">Release Date{release_date}</p>
            <p className="p-3">Number of seasons: {number_of_seasons}</p>
            <p className="p-3">Last aired date: {last_aired_date}</p>
            <p className="p-3 md:pb-40">Network:&nbsp;{network}</p>
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
              src={seriesLink.trailer_url}
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

export default SeriesDetails;
