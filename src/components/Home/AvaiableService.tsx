"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Title from "../UI/Title";
import { useGetServicesQuery } from "@/redux/api/features/services/servicesApi";
import { iServices } from "@/interface/api";
import BannerCard from "../Services/Card/BannerCard";
import Loader from "../Shared/Loader";

const AvailableServices = () => {
  const { data, isLoading } = useGetServicesQuery({
    availabilityType: "AVAILABLE",
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto my-28">
      <Title top="Choose Your" title="Perfect Holiday" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data?.data?.data?.length > 0 &&
          data.data.data
            .slice(0, 8)
            .map((service: iServices, index: number) => (
              <BannerCard key={service.id} service={service} index={index} />
            ))}
      </div>
    </div>
  );
};

export default AvailableServices;
