"use client";

import CartCard from "@/components/Cart/CartCard";
import FeedbackModal from "@/components/Froms/FeedbackForm";
import Loader from "@/components/Shared/Loader";
import XBookingModal from "@/components/UI/XBookingModal";
import XCalender from "@/components/UI/XCalender";
import Notes from "@/components/notes/Notes";
import { iServices } from "@/interface/api";
import { useGetCartQuery } from "@/redux/api/features/cart/cartApi";
import { Button, Col, Row } from "antd";
import { useState } from "react";

const Cart = () => {
  const { data, isLoading } = useGetCartQuery({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calenderData, setCalenderData] = useState({});
  const [isFeedbackModalVisible, setFeedbackModalVisible] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const cartData = data?.data;

  const openFeedbackModal = () => {
    setFeedbackModalVisible(true);
  };

  const closeFeedbackModal = () => {
    setFeedbackModalVisible(false);
  };

  return (
    <div className="w-10/12 mx-auto my-20">
      <Row gutter={50}>
        <Col span={16}>
          <div className="space-y-7">
            {cartData?.length > 0 ? (
              cartData?.map((service: any) => (
                <div
                  key={service.id}
                  style={{ borderBottom: "1px solid gray" }}
                >
                  <CartCard services={service as iServices} />
                </div>
              ))
            ) : (
              <Notes />
            )}
          </div>
        </Col>
        <Col span={8}>
          <XCalender setCalenderData={setCalenderData} />
          {cartData?.length > 0 && (
            <div className="mt-10">
              {/*  @ts-ignore */}
              {calenderData?.startDate && calenderData?.endDate && (
                <Button
                  onClick={showModal}
                  type="primary"
                  className="w-full h-10"
                >
                  Booking Now
                </Button>
              )}
            </div>
          )}
        </Col>
      </Row>
      <XBookingModal
        openFeedbackModal={openFeedbackModal}
        cartData={cartData}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        calenderData={calenderData}
      />
      <FeedbackModal
        visible={isFeedbackModalVisible}
        onCancel={closeFeedbackModal}
      />
    </div>
  );
};

export default Cart;
