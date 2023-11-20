"use client";

import React from "react";
import Title from "../UI/Title";
import Link from "next/link";
import { motion } from "framer-motion";

const EventCard = ({ image, title, category }: any) => {
  return (
    <Link href={"/services"}>
      <div className="h-64 mx-4 my-4 relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="bg-black bg-opacity-60 h-full flex flex-col justify-between p-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="text-sm text-white">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const EventsByCategory = () => {
  const events = [
    {
      image: "https://i.ibb.co/1sFF76K/img1.jpg",
      title: "Summer Adventure",
      category: "Adventure Travel",
    },
    {
      image: "https://i.ibb.co/Z6C5xkt/img2.jpg",
      title: "Tropical Paradise",
      category: "Beach Getaways",
    },
    {
      image: "https://i.ibb.co/hBH2hr8/img3.jpg",
      title: "European Discover",
      category: "Cultural Exploration",
    },
    {
      image: "https://i.ibb.co/Rgv6hw7/img4.jpg",
      title: "Mountain Retreat",
      category: "Hiking & Trekking",
    },
    {
      image: "https://i.ibb.co/g42djC5/img5.jpg",
      title: "Safari Expedition",
      category: "Wildlife Tours",
    },
    {
      image: "https://i.ibb.co/wgYfPYR/img6.jpg",
      title: "City Escapade",
      category: "Urban Exploration",
    },
  ];

  return (
    <div className="container mx-auto my-28">
      <Title title="Events By Category" top="Make Your" />

      <div className="">
        {events.map((event, index) => (
          <div key={index} className={index % 2 === 0 ? "mr-10" : "ml-10"}>
            {index % 2 === 0 ? (
              <motion.div
                animate={{ x: 100, rotate: 2 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ) : (
              <motion.div
                animate={{ x: -100, rotate: -2 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <EventCard {...event} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsByCategory;
