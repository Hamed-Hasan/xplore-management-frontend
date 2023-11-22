import Loader from "@/components/Shared/Loader";
import { useGetAllReviewsQuery } from "@/redux/api/features/reviews/reviewApi";
import { Col, Rate, Row } from "antd";
import Image from "next/image";

const ShowReviews = ({ id }: {id: string}) => {
  const { data, isLoading } = useGetAllReviewsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  const reviews = data?.data;

  return (
    <div className="my-20">
      <h2 className="text-lg font-semibold text-stone-900">
        {reviews?.length} Reviews
      </h2>
      <hr />
      <div className="mt-10 space-y-5">
        {reviews && reviews?.length > 0
          ? reviews?.map((review: any) => (
              <Row key={review?.id} gutter={50}>
                <Col span={4}>
                  <Image
                    src={review.user.image}
                    height={80}
                    width={80}
                    alt=""
                    className="rounded-3xl object-cover"
                  />
                </Col>
                <Col span={20}>
                  <h3 className="text-base font-semibold text-primary">
                    {review.user.name}
                  </h3>
                  <small className="text-gray-500">{review.createdAt}</small>
                  <p className="text-neutral mt-2">{review.description}</p>
                  <Rate
                    className="mt-2  text-sunset"
                    disabled
                    defaultValue={review.scale}
                  />
                </Col>
              </Row>
            ))
          : ""}
      </div>
    </div>
  );
};

export default ShowReviews;
