"use client";

import Loader from "@/components/Shared/Loader";
import Title from "@/components/UI/Title";
import { useGetAllFAQQuery } from "@/redux/api/features/faq/faqApi";
import { Collapse } from "antd";

const FAQ = () => {
  const { data, isLoading } = useGetAllFAQQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const faqData = data?.data;

  const faqItems = faqData?.map((data: any) => ({
    key: data?.id,
    label: data?.title,
    children: <p>{data?.description}</p>,
  }));

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className="container mx-auto my-10 px-4 z-50">
      <Title title="Frequently Asked Questions" top="Know About" />
      <div className="w-full max-w-3xl mx-auto">
        <Collapse items={faqItems} onChange={onChange} />
      </div>
    </div>
  );
};

export default FAQ;
