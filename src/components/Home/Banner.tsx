"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "./Home.css";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          prevEl: "#custom-prev",
          nextEl: "#custom-next",
          enabled: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-slide">
            <div className="zoom-background"></div>
            <div className="content">
              <p className="text-white font-mono text-3xl font-semibold text-a">
                Lets Go Now
              </p>
              <h1 className="text-white font-serif text-7xl font-semibold font-b ">
                Explore and Travel
              </h1>
              <p className="text-white mt-3 font-c">
                When preparing for your trip, ensure you have all the essential
                documents, including passports, visas, and travel insurance.
                Don&lsquo;t forget to double-check their validity, and
                it&lsquo;s wise to keep copies in a separate bag or digitally.
                Additionally, bring any necessary medications and a basic
                first-aid kit for peace of mind.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide">
            <div className="zoom-background1"></div>
            <div className="content">
              <p className="text-white font-mono text-3xl font-semibold text-a">
                Lets Go Now
              </p>
              <h1 className="text-white font-serif text-7xl font-semibold font-b ">
                Relax and Enjoy
              </h1>
              <p className="text-white mt-3 font-c">
                When preparing for your trip, ensure you have all the essential
                documents, including passports, visas, and travel insurance.
                Don&lsquo;t forget to double-check their validity, and
                it&lsquo;s wise to keep copies in a separate bag or digitally.
                Additionally, bring any necessary medications and a basic
                first-aid kit for peace of mind.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide">
            <div className="zoom-background2"></div>
            <div className="content">
              <p className="text-white font-mono text-3xl font-semibold text-a">
                Lets Go Now
              </p>
              <h1 className="text-white font-serif text-7xl font-semibold font-b ">
                Unveil the Beauty
              </h1>
              <p className="text-white mt-3 font-c">
                When preparing for your trip, ensure you have all the essential
                documents, including passports, visas, and travel insurance.
                Don&lsquo;t forget to double-check their validity, and
                it&lsquo;s wise to keep copies in a separate bag or digitally.
                Additionally, bring any necessary medications and a basic
                first-aid kit for peace of mind.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide">
            <div className="zoom-background3"></div>
            <div className="content">
              <p className="text-white font-mono text-3xl font-semibold text-a">
                Lets Go Now
              </p>
              <h1 className="text-white font-serif text-7xl font-semibold font-b ">
                Dreams True
              </h1>
              <p className="text-white mt-3 font-c">
                When preparing for your trip, ensure you have all the essential
                documents, including passports, visas, and travel insurance.
                Don&lsquo;t forget to double-check their validity, and
                it&lsquo;s wise to keep copies in a separate bag or digitally.
                Additionally, bring any necessary medications and a basic
                first-aid kit for peace of mind.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide">
            <div className="zoom-background4"></div>
            <div className="content">
              <p className="text-white font-mono text-3xl font-semibold text-a">
                Lets Go Now
              </p>
              <h1 className="text-white font-serif text-7xl font-semibold font-b ">
                Explore the World
              </h1>
              <p className="text-white mt-3 font-c">
                When preparing for your trip, ensure you have all the essential
                documents, including passports, visas, and travel insurance.
                Don&lsquo;t forget to double-check their validity, and
                it&lsquo;s wise to keep copies in a separate bag or digitally.
                Additionally, bring any necessary medications and a basic
                first-aid kit for peace of mind.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
