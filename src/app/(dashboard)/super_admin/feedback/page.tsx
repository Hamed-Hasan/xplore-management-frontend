"use client";

import Loader from "@/components/Shared/Loader";
import { useGetAllFeedbackQuery } from "@/redux/api/features/feedback/feedbackApi";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const Feedback = () => {
  const { data, isLoading } = useGetAllFeedbackQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const feedbackData = data?.data;

  return (
    <div className="space-y-3">
      {feedbackData &&
        feedbackData?.map((feed: any) => (
          <Card title={feed?.user?.name} key={feed?.id}>
            <Meta description={feed?.description} />
          </Card>
        ))}
    </div>
  );
};

export default Feedback;
