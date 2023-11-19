import { iServices } from "@/interface/api";
import { Button, message } from "antd";
import Image from "next/image";
import { DeleteFilled } from "@ant-design/icons";
import { useDeleteCartMutation } from "@/redux/api/features/cart/cartApi";

const CartCard = ({ services }: { services: iServices }) => {
  // @ts-ignore

  const { service, id } = services;

  const { image, title, price, location, availabilityType, departureTime } =
    service;

  const [deleteCart] = useDeleteCartMutation();

  const handleCartDelete = async (payload: string) => {
    message.loading("Deleting...");
    try {
      const res = await deleteCart(payload).unwrap();
      if (res.success) {
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

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
        <div>
          <Button
            onClick={() => handleCartDelete(id)}
            type="text"
            className="text-passion"
          >
            <DeleteFilled /> Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
