"use client";

import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import FormSelect from "@/components/Froms/FormSelect";
import FormTextArea from "@/components/Froms/FormTextArea";

import {
  availabilityTypeOptions,
  servicesMonthOptions,
} from "@/constants/services";
import { Button, Col, Row, message } from "antd";
import {
  useCreateServicesMutation,
  useGetSingleServicesQuery,
  useUpdateServicesMutation,
} from "@/redux/api/features/services/servicesApi";
import Loader from "@/components/Shared/Loader";
import { useRouter } from "next/navigation";

const EditServices = ({ params }: any) => {
  const { edit } = params;

  const { data, isLoading } = useGetSingleServicesQuery(edit);

  const router = useRouter();

  const [updateService] = useUpdateServicesMutation();
  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = async (payload: any) => {
    message.loading("Updating ...");

    payload.day = parseInt(payload.day);
    payload.price = parseFloat(payload.price);

    const formData = {
      title: payload.title || data?.data?.title,
      day: payload.day || data?.data?.day,
      how_month: payload.how_month || data?.data?.how_month,
      price: payload.price || data?.data?.price,
      availabilityType:
        payload.availabilityType || data?.data?.availabilityType,
      description: payload.description || data?.data?.description,
    };

    try {
      const res = await updateService({ id: edit, data: formData }).unwrap();
      if (res.success) {
        message.success(res.message);
        router.push("/admin/manage-services/services");
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <div>
      <Form submitHandler={onSubmit}>
        <Row gutter={20}>
          <Col span={8}>
            <FormInput
              name="title"
              Dvalue={data?.data?.title}
              label="Title"
              placeholder="Write title"
            />
          </Col>
          <Col span={8}>
            <FormInput
              name="day"
              type="number"
              label="Day"
              Dvalue={data?.data?.day}
              placeholder="Write day"
            />
          </Col>
          <Col span={8}>
            <FormSelect
              name="how_month"
              label="Select Month"
              options={servicesMonthOptions}
              placeholder={data?.data?.how_month}
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormInput
              name="price"
              type="number"
              label="Price"
              placeholder="Write price"
              Dvalue={data?.data?.price}
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormSelect
              name="availabilityType"
              options={availabilityTypeOptions}
              label="Availability"
              placeholder={data?.data?.availabilityType}
            />
          </Col>
          <Col span={24} className="mt-5">
            <FormTextArea
              value={data?.data?.description}
              name="description"
              label="Description"
              rows={5}
            />
          </Col>
        </Row>
        <div className="my-10 flex justify-end">
          <Button type="primary" htmlType="submit">
            Update Service
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditServices;
