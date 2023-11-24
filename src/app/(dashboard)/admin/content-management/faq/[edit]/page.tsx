"use client";

import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import FormTextArea from "@/components/Froms/FormTextArea";
import Loader from "@/components/Shared/Loader";

import {
  useGetSingleFAQQuery,
  useUpdateFAQMutation,
} from "@/redux/api/features/faq/faqApi";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";

const EditSingleBlog = ({ params }: any) => {
  const { edit } = params;

  const [updateFaq] = useUpdateFAQMutation();
  const { data, isLoading } = useGetSingleFAQQuery(edit);

  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }

  const blogInfo = data?.data;

  const onSubmit = async (data: any) => {
    message.loading("Updating...");

    const formInfo = {
      title: data.title || blogInfo.title,
      description: data.description || blogInfo.description,
    };

    try {
      const res = await updateFaq({ id: edit, data: formInfo }).unwrap();
      if (res?.success) {
        message.success(res.message);
        router.push("/admin/content-management/faq");
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <div className="w-6/12 mx-auto">
      <Form submitHandler={onSubmit}>
        <FormInput
          name="title"
          label="Title"
          placeholder="Write your title"
          Dvalue={blogInfo.title}
        />
        <br />
        <FormTextArea
          name="description"
          label="Description"
          placeholder="Write your title"
          rows={10}
          value={blogInfo.description}
        />
        <br />
        <Button htmlType="submit">Update FAQ</Button>
      </Form>
    </div>
  );
};

export default EditSingleBlog;
