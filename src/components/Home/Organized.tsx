import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faBell,
  faChartLine,
  faFaceSmile,
  faGlasses,
  faHandSparkles,
  faMagnifyingGlassChart,
  faThumbTack,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../UI/Title";

const Organized = () => {
  return (
    <div className="container mx-auto my-28">
      <Title title="Organized" top="Explore the" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faFaceSmile}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Easy to Use</h3>
            <p className="text-gray-700">
              Our user-friendly interface makes it simple for anyone to get
              started. No technical expertise required.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faChartLine}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Data Analytics</h3>
            <p className="text-gray-700">
              Dive deep into your data with powerful analytics tools. Gain
              valuable insights and make data-driven decisions.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faAngleDoubleUp}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Collaboration</h3>
            <p className="text-gray-700">
              Collaborate seamlessly with your team, share your work, and
              improve productivity together.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faBell}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <p className="text-gray-700">
              Stay informed with real-time notifications and updates.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faHandSparkles}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Love and Care</h3>
            <p className="text-gray-700">
              We value our users and provide exceptional support and care.
            </p>
          </div>
        </div>
        <div className="bg-white  rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faMagnifyingGlassChart}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Ratings & Reviews</h3>
            <p className="text-gray-700">
              Share your feedback and read reviews from our satisfied users.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faThumbTack}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Task Completion</h3>
            <p className="text-gray-700">
              Keep track of your tasks and mark them as completed.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center ">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faGlasses}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Data Visualization</h3>
            <p className="text-gray-700">
              Visualize your data with beautiful and informative charts.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-2 place-items-center">
          <div className="bg-secondary  w-full h-full rounded-md flex justify-center items-center ">
            <FontAwesomeIcon
              fontSize={50}
              className="animate-bounce shadow-2xl"
              color="#fff"
              icon={faUsersGear}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">User Community</h3>
            <p className="text-gray-700">
              Join our active user community for discussions and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organized;
