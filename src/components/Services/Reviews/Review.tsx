"use client";

import { useCreateReviewMutation } from "@/redux/api/features/reviews/reviewApi";
import { useGetProfileQuery } from "@/redux/api/features/user/userApi";
import { Button, Input, Rate, message } from "antd";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const { TextArea } = Input;

const Review = ({ id }: { id: string }) => {
  const [description, setDescription] = useState("");
  const [ratting, setRatting] = useState(3);
  const [error, setError] = useState("");

  const { data } = useGetProfileQuery({});

  const [createReview] = useCreateReviewMutation();

  const userInfo = data?.data;

  const handleSubmitReview = async () => {
    if (description === "") {
      setError("Description is Required");
      return;
    }

    message.loading("Posting...");
    try {
      const formData = {
        userId: userInfo?.id,
        serviceId: id,
        description: description,
        scale: ratting,
      };
      const res = await createReview(formData).unwrap();
      if (res.success) {
        message.success(res.message);
        setDescription("");
        setError("");
        setRatting(0);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <div className="my-20">
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write..."
        autoSize={{ minRows: 8, maxRows: 5 }}
      />
      <small className="text-red-500 my-5">{error}</small>
      <div className="flex justify-between items-center mt-5">
        <Rate
          className=""
          style={{ color: "#DC143C" }}
          tooltips={desc}
          onChange={setRatting}
          value={ratting}
        />
        <Button onClick={handleSubmitReview} type="primary">
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default Review;
