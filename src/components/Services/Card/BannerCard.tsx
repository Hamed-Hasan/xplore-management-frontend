import { iServices } from "@/interface/api";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Link from "next/link";

const BannerCard = ({
  service,
  index,
}: {
  service: iServices;
  index: number;
}) => {
  const { price, location, image, id, availabilityType } = service;
  return (
    <Link href={`/services/${id}`}>
      <div className="relative h-[300px] overflow-hidden">
        {index % 6 === 0 ? (
          <img
            src={image}
            width={100}
            height={300}
            className="w-full object-cover rounded-full relative brightness-50"
            alt=""
          />
        ) : (
          <img
            src={image}
            width={100}
            height={300}
            className="w-full object-cover rounded-sm relative hover:brightness-50 duration-500  hover:h-[350px] brightness-75"
            alt=""
          />
        )}
        <div>
          {index % 6 === 0 ? (
            <>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-mono text-2xl">
                <h2>{location}</h2>
              </div>
            </>
          ) : (
            <>
              <div className="absolute bottom-8 z-50 right-0 w-8/12 bg-elegant py-2 px-6 rounded-s-lg text-black">
                <h2>{location.split(" ")[0]}</h2>
                <p>$ {price}</p>
              </div>
              <div className="absolute top-4 ">
                {availabilityType === "AVAILABLE" ? (
                  <Tag
                    icon={<SafetyCertificateOutlined />}
                    color="#457b9d"
                    className=" text-elegant"
                  >
                    {availabilityType}
                  </Tag>
                ) : (
                  <Tag
                    icon={<SafetyCertificateOutlined />}
                    color="#457b9d"
                    className="text-elegant"
                  >
                    {availabilityType}
                  </Tag>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BannerCard;
