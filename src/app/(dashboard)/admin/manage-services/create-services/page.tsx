"use client";

import dynamic from "next/dynamic";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import FormMultiSelect from "@/components/Froms/FormMultiSelect";
import FormSelect from "@/components/Froms/FormSelect";
import FormTextArea from "@/components/Froms/FormTextArea";
import FormTimePicker from "@/components/Froms/FormTimePicker";
const UploadImage = dynamic(() => import("@/components/UI/UploadImage"), {
  ssr: false,
});
import { yupResolver } from "@hookform/resolvers/yup";

import {
  availabilityTypeOptions,
  serviceCategoryOptions,
  serviceIncludeOptions,
  serviceNotIncludeOptions,
  servicesMonthOptions,
} from "@/constants/services";
import { Button, Col, Row, message } from "antd";
import { useCreateServicesMutation } from "@/redux/api/features/services/servicesApi";
import { createServicesYupSchema } from "@/schema/serviceSchema";

const CreateServices = () => {
  const [createService] = useCreateServicesMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating ...");
    data.departureTime = data.departureTime || "10:50";
    data.returnTime = data.returnTime || "05:10";
    data.day = parseInt(data.day);
    data.age = parseInt(data.age);
    data.availability = parseInt(data.availability);
    data.price = parseFloat(data.price);

    delete data.file;

    try {
      const res = await createService(data).unwrap();
      if (res.success) {
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <div>
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(createServicesYupSchema)}
      >
        <Row gutter={20}>
          <Col span={24} className="mb-5">
            <FormInput
              name="image"
              label="Image"
              placeholder="Placed the url"
            />
          </Col>
          <Col span={8}>
            <FormInput name="title" label="Title" placeholder="Write title" />
          </Col>
          <Col span={8}>
            <FormInput
              name="day"
              type="number"
              label="Day"
              placeholder="Write day"
            />
          </Col>
          <Col span={8}>
            <FormInput
              name="age"
              type="number"
              label="Age"
              placeholder="Write age"
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormSelect
              name="how_month"
              label="Select Month"
              options={servicesMonthOptions}
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormInput
              name="availability"
              label="Availability"
              type="number"
              placeholder="Write availability"
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormInput
              name="departure"
              label="Departure"
              placeholder="Write departure"
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormTimePicker name="departureTime" label="Departure Time" />
          </Col>
          <Col span={8} className="mt-5">
            <FormTimePicker name="returnTime" label="Return Time" />
          </Col>
          <Col span={8} className="mt-5">
            <FormInput name="lat" label="Lat" placeholder="Write lat" />
          </Col>
          <Col span={8} className="mt-5">
            <FormInput name="long" label="Long" placeholder="Write long" />
          </Col>
          <Col span={8} className="mt-5">
            <FormInput
              name="price"
              type="number"
              label="Price"
              placeholder="Write price"
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormSelect
              name="availabilityType"
              options={availabilityTypeOptions}
              label="Availability"
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormInput
              name="location"
              label="Location"
              placeholder="Write location"
            />
          </Col>
          <Col span={8} className="mt-5">
            <FormSelect
              name="category"
              options={serviceCategoryOptions}
              label="Select Category"
            />
          </Col>
          <Col span={12} className="mt-5">
            <FormMultiSelect
              name="included"
              options={serviceIncludeOptions}
              label="Included"
            />
          </Col>
          <Col span={12} className="mt-5">
            <FormMultiSelect
              name="notIncluded"
              options={serviceNotIncludeOptions}
              label="Not Included"
            />
          </Col>
          <Col span={24} className="mt-5">
            <FormTextArea name="description" label="Description" rows={5} />
          </Col>
        </Row>
        <div className="my-10 flex justify-end">
          <Button type="primary" htmlType="submit">
            Create Services
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateServices;
