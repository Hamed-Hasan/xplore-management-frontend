"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faGlobe,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../UI/Title";
import CountUp from "react-countup";

const Survey = () => {
  return (
    <div className="my-28">
      <Title title="Survey and Overview" top="Take a Look" />
      <section className="bg-elegant p-8 cursor-pointer shadow-lg">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-around">
            <div className="p-4 space-y-2">
              <p className="text-5xl font-bold text-secondary">
                <FontAwesomeIcon icon={faSmile} />
              </p>
              <p className="text-xl text-gray-500 font-bold">Happy Travelers</p>
              <p className="text-lg shadow-lg rounded-full">
                + <CountUp start={1} end={50000} duration={20} />
              </p>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-5xl font-bold text-secondary">
                <FontAwesomeIcon icon={faGlobe} />
              </p>
              <p className="text-xl text-gray-500 font-bold">Countries Visited</p>
              <p className="text-lg shadow-lg rounded-full">
                + <CountUp start={1} end={150} duration={50} />
              </p>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-5xl font-bold text-secondary">
                <FontAwesomeIcon icon={faCalendar} />
              </p>
              <p className="text-xl text-gray-500 font-bold">Events Organized</p>
              <p className="text-lg shadow-lg rounded-full">
                + <CountUp start={1} end={35000} duration={20} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Survey;
