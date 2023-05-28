import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { seriesdata } from "../Seriesdata";
import { Link } from "react-router-dom";

const Seriesgrid = () => {
  const [search, setSearch] = useState("");
  const [selectednetwork, setSelectedPhase] = useState(null);

  const handleFilter = (network) => {
    setSelectedPhase(network);
  };

  const filteredMovies = selectednetwork
    ? seriesdata.filter((seriesdata) => seriesdata.network === selectednetwork)
    : seriesdata;

  return (
    <section
      id="series"
      className="container mx-auto h-[100vh] pt-20 md:pt-60 xl:pt-20"
    >
      {/* search field */}
      <div className="mx-auto flex w-1/2 justify-center rounded-full border border-white p-2 text-[14px] md:mb-5 md:w-1/2 lg:p-3 xl:mt-20">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-white focus:outline-none"
          placeholder="Search for Movies"
          type="text"
        />
        <AiOutlineSearch size={20} className="cursor-pointer text-white" />
      </div>
      {/* ==========flter buttons */}
      <p className="mt-2 text-center text-[14px] text-white">
        Movies are arranged in chronological order
      </p>
      <div className="mx-auto flex max-w-[400px]  flex-wrap justify-around gap-y-3 p-7 md:mb-5 md:max-w-[800px] md:gap-x-3">
        <button
          onClick={() => handleFilter(null)}
          className={`${
            selectednetwork === null ? "border-brand" : "border-gray-500"
          } filter-btn rounded border p-1 text-[14px] text-white transition-[400ms] md:w-[100px] md:px-2 md:py-2 xl:hover:scale-110`}
          type="button"
        >
          All
        </button>
        <button
          onClick={() => handleFilter("ABC")}
          className={`${
            selectednetwork === 1 ? "border-brand" : "border-gray-500"
          } filter-btn rounded border p-1 text-[14px] text-white transition-[400ms] md:w-[100px] md:px-2 md:py-2 xl:hover:scale-110`}
          type="button"
        >
          ABC
        </button>
        <button
          onClick={() => handleFilter("Netflix")}
          className={`${
            selectednetwork === 2 ? "border-brand" : "border-gray-500"
          } filter-btn rounded border p-1 text-[14px] text-white transition-[400ms] md:w-[100px] md:px-2 md:py-2 xl:hover:scale-110`}
          type="button"
        >
          Netflix
        </button>
        <button
          onClick={() => handleFilter("Disney+")}
          className={`${
            selectednetwork === 3 ? "border-brand" : "border-gray-500"
          } filter-btn rounded border p-1 text-[14px] text-white transition-[400ms] md:w-[100px] md:px-2 md:py-2 xl:hover:scale-110`}
          type="button"
        >
          Disney +
        </button>
        <button
          onClick={() => handleFilter("Hulu")}
          className={`${
            selectednetwork === 4 ? "border-brand" : "border-gray-500"
          } filter-btn rounded border p-1 text-[14px] text-white transition-[400ms] md:w-[100px] md:px-2 md:py-2 xl:hover:scale-110`}
          type="button"
        >
          Hulu
        </button>
        <button
          onClick={() => handleFilter("Freeform")}
          className={`${
            selectednetwork === 5 ? "border-brand" : "border-gray-500"
          } filter-btn rounded border p-1 text-[14px] text-white transition-[400ms] md:w-[100px] md:px-2 md:py-2 xl:hover:scale-110`}
          type="button"
        >
          Freeform
        </button>
      </div>
      {/* ============movies grid container */}
      <div className="items-center justify-center px-10">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-10 md:gap-y-20 lg:grid-cols-5">
          {filteredMovies
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map(({ chronology, cover_url, title, release_date }) => (
              <div
                key={chronology}
                className="mx-auto mb-5 max-h-[250px] max-w-[145px]  md:h-[300px] md:w-[200px]"
              >
                <Link to={`/movies/${chronology}`}>
                  <div className="group cursor-pointer items-center justify-center overflow-hidden border-4 border-gray-600 transition-transform duration-500 hover:shadow-xl hover:shadow-black/30 xl:hover:scale-110">
                    <div className="">
                      <img
                        className="h-auto max-w-full object-cover"
                        src={cover_url}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
                <p className="cursor-pointer text-[14px] text-white hover:text-brand md:pl-1 md:pt-2 md:font-bold">
                  {title}
                </p>
                <p className="pl-1 text-[14px] text-gray-500">{release_date}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Seriesgrid;
