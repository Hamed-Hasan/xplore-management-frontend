import { iServices } from "@/interface/api";
import Image from "next/image";

const DrawerCartCard = ({ service }: { service: iServices }) => {
  const { image, title, price, location, availabilityType, departureTime } =
    service;

  return (
    <div>
      <div className="bg-white rounded-xl p-4 flex justify-center items-center gap-5 w-full">
        <div className="">
          <Image
            src={image}
            width={100}
            height={100}
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="space-y-2 w-6/12">
          <small className="text-sunset"> {availabilityType}</small>
          <h2 className="text-primary font-semibold">{title}</h2>
          <p className="text-neutral">price : $ {price}</p>
          <p className="text-neutral">{location}</p>
          <p className="text-neutral">Departure : {departureTime}</p>
        </div>
      </div>
    </div>
  );
};

export default DrawerCartCard;
