import { iServices } from "@/interface/api";
import {
  CalendarFilled,
  UserAddOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import { Card, Rate, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FieldTimeOutlined, HeatMapOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ServiceCard = ({
  service,
  isLoading,
}: {
  service: iServices;
  isLoading: boolean;
}) => {
  const {
    title,
    price,
    location,
    image,
    description,
    day,
    availability,
    id,
    availabilityType,
    category,
    review,
  } = service;

  return (
    // <Link href={`/services/${id}`}>
    //   {/* <Card
    //     loading={isLoading}
    //     hoverable
    //     cover={<Image src={image} alt={title} height={200} width={200} />}
    //     actions={[
    //       <div key={1} className="flex  justify-center items-center gap-5">
    //         <p>{day} days</p>
    //         <CalendarFilled key="calendar" />
    //       </div>,
    //       <div key={2} className="flex  justify-center items-center gap-5">
    //         <UserAddOutlined key="user" />
    //         <p>{availability} +</p>
    //       </div>,
    //     ]}
    //   >
    //     {availabilityType === "AVAILABLE" ? (
    //       <Tag
    //         className="mb-5"
    //         icon={<SafetyCertificateFilled />}
    //         color="#FF6600"
    //       >
    //         {availabilityType}
    //       </Tag>
    //     ) : (
    //       <Tag
    //         className="mb-5"
    //         icon={<SafetyCertificateFilled />}
    //         color="#87CEEB"
    //       >
    //         {availabilityType}
    //       </Tag>
    //     )}
    //     <Meta title={title} description={description.slice(0, 50) + " ..."} />
    //     <div className="mt-5">
    //       <p className="text-lg font-semibold text-sunset">${price}</p>
    //       <p
    //         className="text-sm my-3 font-semibold text-nature p-2 inline-block rounded"
    //         style={{ border: "1px solid #228B22" }}
    //       >
    //         {category}
    //       </p>
    //       <p className="text-neutral">{location}</p>
    //     </div>
    //   </Card> */}
    // </Link>
    <Link href={`/services/${id}`} className="text-black">
      <div
        style={{ border: "1px solid grey" }}
        className="hover:shadow-2xl duration-300"
      >
        <Image
          src={image}
          width={200}
          height={150}
          alt=""
          className="w-full object-cover"
          quality={100}
        />
        <div className="px-6 pb-4 mt-2 bg-white">
          {availabilityType === "AVAILABLE" ? (
            <Tag
              className="mb-2"
              icon={<SafetyCertificateFilled />}
              color="#FF6600"
            >
              {availabilityType}
            </Tag>
          ) : (
            <Tag
              className="mb-2"
              icon={<SafetyCertificateFilled />}
              color="#87CEEB"
            >
              {availabilityType}
            </Tag>
          )}
          <h2 className="text-lg h-14">{title}</h2>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              <HeatMapOutlined /> {location}
            </p>
            <p className="text-xs font-semibold text-secondary">${price}</p>
          </div>
          <div className="mt-2 flex justify-between items-center  font-medium">
            <Rate disabled defaultValue={4} className="text-accent" />
            <span>
              <FieldTimeOutlined /> {day} days
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
