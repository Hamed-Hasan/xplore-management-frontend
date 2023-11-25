"use client";

import Loader from "@/components/Shared/Loader";
import {
  useGetServicesQuery,
  useGetSingleServicesQuery,
} from "@/redux/api/features/services/servicesApi";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import {
  FieldTimeOutlined,
  IdcardOutlined,
  CalendarOutlined,
  UserOutlined,
  ShareAltOutlined,
  PhoneFilled,
  ClockCircleFilled,
} from "@ant-design/icons";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { iServices } from "@/interface/api";
import { useDispatch } from "react-redux";
import { storeProduct } from "@/redux/api/features/services/servicesSlice";
import Review from "@/components/Services/Reviews/Review";
import ShowReviews from "@/components/Services/Reviews/ShowReviews";
import ServiceSmallCard from "@/components/Services/Card/ServiceSmallCard";

const SingleService = ({ params }: any) => {
  const { id } = params;

  const dispatch = useDispatch();

  const { data, isLoading } = useGetSingleServicesQuery(id);
  const { data: serviceAllData } = useGetServicesQuery({ limit: 3, page: 1 });

  if (isLoading) {
    return <Loader />;
  }

  const {
    image,
    title,
    day,
    age,
    how_month,
    availability,
    description,
    departure,
    departureTime,
    returnTime,
    included,
    lat,
    long,
    notIncluded,
    price,
    availabilityType,
    location,
  } = data?.data;

  const gridStyle: React.CSSProperties = {
    width: "25%",
    textAlign: "center",
  };

  const handleAddToCart = (ser: any) => {
    dispatch(storeProduct(ser));
  };

  return (
    <div>
      <div className="relative h-96">
        <Image src={image} alt="" layout="fill" objectFit="cover" className="brightness-50 hover:brightness-100 duration-500"/>
      </div>
      <div className="w-10/12 mx-auto mt-10">
        <Row gutter={50}>
          <Col span={18}>
            <h4 className="text-sm font-semibold text-passion">
              {availabilityType}
            </h4>
            <h1 className="text-4xl font-semibold text-primary mt-2">
              {title}
            </h1>
            <h1 className="text-xl font-semibold text-accent mt-2">
              Price : $ {price}
            </h1>
            <h1 className="text-lg mt-2 font-semibold text-neutral">
              Location : {location}
            </h1>
            <Card className="mt-5">
              <Card.Grid style={gridStyle}>
                <FieldTimeOutlined className="text-3xl text-neutral" />
                <p className="mt-2 font-semibold text-neutral">{day} days</p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <IdcardOutlined className="text-3xl text-neutral" />
                <p className="mt-2 font-semibold text-neutral">{age} +</p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <CalendarOutlined className="text-3xl text-neutral" />
                <p className="mt-2 font-semibold text-neutral">{how_month}</p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <UserOutlined className="text-3xl text-neutral" />
                <p className="mt-2 font-semibold text-neutral">
                  {availability} Person
                </p>
              </Card.Grid>
            </Card>
            <p className="mt-10 text-nature">About : {description}</p>
            <div className="my-20">
              <hr className="my-4" />
              <div className="grid grid-cols-3 items-center ">
                <h2 className="text-primary text-xl">Departure :</h2>
                <p className="text-sunset ">{departure}</p>
              </div>
              <hr className="my-4" />
              <div className="grid grid-cols-3 items-center ">
                <h2 className="text-primary text-xl">Departure Time :</h2>
                <p className="text-sunset ">{departureTime}</p>
              </div>
              <hr className="my-4" />
              <div className="grid grid-cols-3 items-center ">
                <h2 className="text-primary text-xl">Return Time :</h2>
                <p className="text-sunset ">{returnTime}</p>
              </div>
              <hr className="my-4" />
              <div className="grid grid-cols-3 items-center ">
                <h2 className="text-primary text-xl">Included :</h2>
                <div>
                  {included.map((included: string) => (
                    <p key={included} className="text-sunset ">
                      {included}
                    </p>
                  ))}
                </div>
              </div>
              <hr className="my-4" />
              <div className="grid grid-cols-3 items-center ">
                <h2 className="text-primary text-xl">Not Included :</h2>
                <div>
                  {notIncluded.map((included: string) => (
                    <p key={included} className="text-sunset ">
                      {included}
                    </p>
                  ))}
                </div>
              </div>
              <hr className="my-4" />

              <div>
                <MapContainer
                  center={[Number(lat), Number(long)]}
                  zoom={13}
                  scrollWheelZoom={true}
                  className="w-full z-40 h-72"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[Number(lat), Number(long)]}>
                    <Popup>{title}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <ShowReviews id={id} />
            <Review id={id} />
          </Col>
          <Col span={6}>
            <div>
              {availabilityType === "AVAILABLE" ? (
                <Button
                  onClick={() => handleAddToCart(data?.data)}
                  type="primary"
                  className="w-full"
                >
                  Add To Card
                </Button>
              ) : (
                <p className="text-center  mt-10 text-nature">
                  Wait for Available for Booking
                </p>
              )}
            </div>
            <div className="mt-5">
              <Button className="w-full h-20" type="dashed">
                <ShareAltOutlined className="text-lg text-neutral" />
                Share this tour
              </Button>
            </div>
            <div className="mt-10">
              <Card title="For more information" bordered={false}>
                <p>
                  <PhoneFilled /> 1-567-124-44227
                </p>
                <p>
                  <ClockCircleFilled /> Mon - Sat 8.00 - 18.00
                </p>
              </Card>
            </div>
            <div className="my-10 grid gap-5">
              {serviceAllData?.data?.data.length > 0 &&
                serviceAllData.data.data.map((service: iServices) => (
                  <ServiceSmallCard
                    key={service.id}
                    service={service}
                    isLoading={isLoading}
                  />
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SingleService;
