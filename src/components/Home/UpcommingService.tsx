"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Title from "../UI/Title";
import { useGetServicesQuery } from "@/redux/api/features/services/servicesApi";
import { iServices } from "@/interface/api";
import BannerCardOne from "../Services/Card/BannerCardOne";
import Loader from "../Shared/Loader";

const UpcomingServices = () => {
  const { data, isLoading } = useGetServicesQuery({
    availabilityType: "UPCOMING",
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto z-50">
      <Title top="Plan Your" title="Upcoming Tour" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
          reverseDirection: true,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={40}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <div>
          {data?.data?.data?.length > 0 &&
            data.data.data.map((service: iServices) => (
              <SwiperSlide key={service.id}>
                <BannerCardOne service={service} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default UpcomingServices;
