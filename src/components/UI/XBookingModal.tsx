import React from "react";
import { Button, Col, Modal, Row, message } from "antd";
import Form from "../Froms/Form";
import FormInput from "../Froms/FormInput";
import { useGetProfileQuery } from "@/redux/api/features/user/userApi";
import { useCreateBookingMutation } from "@/redux/api/features/booking/bookingApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { createBookingYupSchema } from "@/schema/serviceSchema";

const XBookingModal = ({
  setIsModalOpen,
  isModalOpen,
  calenderData,
  cartData,
  openFeedbackModal,
}: any) => {
  const { data: userData } = useGetProfileQuery({});
  const userInfo = userData?.data;

  const [createBooking] = useCreateBookingMutation();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: any) => {
    delete data.email;
    delete data.phone;

    message.loading("Ongoing ...");

    const serviceId = cartData?.map(
      (cart: Record<string, any>) => cart?.service?.id
    );

    data.date_from = calenderData?.startDate;
    data.date_to = calenderData?.endDate;
    data["userId"] = userInfo?.id;
    data["serviceId"] = serviceId;
    data.how_day = parseInt(data.how_day);
    data.adult = parseInt(data.adult);
    data.child = parseInt(data.child);
    data.infant = parseInt(data.infant);

    try {
      const res = await createBooking(data).unwrap();
      if (res.success) {
        message.success(res.message);
        setIsModalOpen(false);
        openFeedbackModal();
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <>
      <Modal
        title="Booking Processing"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(createBookingYupSchema)}
        >
          <Row className="mt-5 " gutter={30}>
            <Col span={12}>
              <FormInput
                name="email"
                placeholder="Your Email"
                label="Your Email"
                value={userInfo?.email}
                disabled
              />
            </Col>
            <Col span={12}>
              <FormInput
                name="phone"
                placeholder="Phone Number"
                label="Phone Number"
                value={userInfo?.phone}
                disabled
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="date_from"
                placeholder="Date From"
                label="Date From"
                value={calenderData?.startDate}
                disabled
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="date_to"
                placeholder="Date To"
                label="Date To"
                value={calenderData?.endDate}
                disabled
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="how_day"
                placeholder="What Many Days"
                label="What Many Days"
                type="number"
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="adult"
                placeholder="Adult"
                label="Adult"
                type="number"
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="child"
                placeholder="Child"
                label="child"
                type="number"
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="infant"
                placeholder="Infant"
                label="Infant"
                type="number"
              />
            </Col>
          </Row>
          <div className="mt-6 flex justify-center">
            <Button type="dashed" htmlType="submit" className="w-6/12 mx-auto">
              Confirm Booking
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default XBookingModal;
