import React from "react";
import Movies from "./Movies";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Movies", "Series"],
    loop: {},
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <section className="container mx-auto justify-center">
      <div className="pt-20">
        <div className="mx-auto flex h-[100vh] max-w-[800px] flex-col justify-center text-center text-white">
          <p className="font-bold uppercase text-brand md:text-2xl">
            marvel cinematic universe
          </p>
          <h1 className="text-4xl font-bold uppercase text-brand sm:text-6xl md:text-7xl">
            database
          </h1>
          <div className="flex justify-center p-2 align-middle">
            <p className="pr-2 font-bold md:text-2xl">Search for</p>
            <span className="font-bold text-brand md:text-2xl">{text}</span>
            <Cursor cursorColor="red" />
          </div>

          <div className=" mt-20 w-full p-4">
            <a href="#movies">
              <FiArrowDown
                size={40}
                className="mx-auto rounded-full border border-white"
              />
            </a>
          </div>
        </div>
      </div>
      <Movies />
    </section>
  );
};

export default Hero;
