/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../UI/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    email: "john.doe@example.com",
    rating: 4,
    review:
      "I had a great experience with this product. It's exactly what I was looking for.",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=80&w=1588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    rating: 5,
    review:
      "The quality of this product exceeded my expectations. I highly recommend it.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    rating: 3,
    review:
      "I found the product to be satisfactory, but there is room for improvement.",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=80&w=1588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    rating: 2,
    review:
      "I was disappointed with the product. It didn't meet my needs as expected.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ella Davis",
    email: "ella.davis@example.com",
    rating: 4,
    review:
      "This product is a good value for the price. It's functional and reliable.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David Brown",
    email: "david.brown@example.com",
    rating: 3,
    review:
      "I have mixed feelings about the product. It has its pros and cons.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    rating: 4,
    review:
      "The customer service was excellent, and the product arrived on time.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sam Adams",
    email: "sam.adams@example.com",
    rating: 5,
    review:
      "I'm extremely satisfied with this product. It's a game-changer for me.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Olivia Moore",
    email: "olivia.moore@example.com",
    rating: 4,
    review:
      "This product has improved my daily routine. It's worth the investment.",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Taylor",
    email: "michael.taylor@example.com",
    rating: 3,
    review:
      "I expected more from this product. It's decent, but not exceptional.",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    rating: 2,
    review:
      "I encountered issues with the product and had a disappointing experience.",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Matthew Wilson",
    email: "matthew.wilson@example.com",
    rating: 4,
    review:
      "The product met my requirements, and I'm satisfied with its performance.",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ava Davis",
    email: "ava.davis@example.com",
    rating: 5,
    review:
      "I love this product. It's a must-have for anyone in a similar situation.",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Liam Brown",
    email: "liam.brown@example.com",
    rating: 4,
    review:
      "I would recommend this product to others. It's reliable and user-friendly.",
  },
  {
    id: 15,
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=80&w=1588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mia Johnson",
    email: "mia.johnson@example.com",
    rating: 3,
    review:
      "The product serves its purpose, but it could benefit from some improvements.",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Noah Clark",
    email: "noah.clark@example.com",
    rating: 4,
    review:
      "I've had a positive experience with this product. It's been quite useful for me.",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Isabella Wilson",
    email: "isabella.wilson@example.com",
    rating: 5,
    review:
      "This product is outstanding. I'm thrilled with its performance and quality.",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "James Adams",
    email: "james.adams@example.com",
    rating: 4,
    review:
      "I'm satisfied with the product, and it's a valuable addition to my daily routine.",
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Charlotte Moore",
    email: "charlotte.moore@example.com",
    rating: 3,
    review:
      "The product works as expected, but there are minor issues that could be addressed.",
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Benjamin Taylor",
    email: "benjamin.taylor@example.com",
    rating: 2,
    review: "I regret purchasing this product. It didn't meet my expectations.",
  },
];

const ClientReviewWithImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Title title="Client Review" top="See The" />
      <section className="p-8 flex items-center">
        <div className="container mx-auto lg:flex justify-between">
          <div className="lg:w-1/3">
            <div className="grid gap-4 relative">
              <img
                src={
                  "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1528"
                }
                alt={`Image`}
                className="rounded-lg h-52 w-full object-cover"
              />
              <img
                src={
                  "https://static.vecteezy.com/system/resources/thumbnails/010/872/305/small/3d-customer-survey-icon-png.png"
                }
                alt={`Image`}
                className="rounded-lg h-56 w-56 object-cover absolute -bottom-20 left-20"
              />
            </div>
          </div>
          <div className="lg:w-2/3 lg:ml-8 mt-24 lg:mt-0">
            <Slider {...settings}>
              {reviews.map((review) => (
                <div key={review.id} className=" bg-white p-8">
                  <div className="flex items-center">
                    <img
                      src={review.image}
                      alt={`Image of ${review.name}`}
                      className="rounded-sm h-12 w-12 object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-xl font-semibold">
                        {review.name}
                      </p>
                      <p className="text-md text-secondary text-sm">{review.email}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FontAwesomeIcon color="#0077b6" icon={faStar} />
                        <FontAwesomeIcon color="#0077b6" icon={faStar} />
                        <FontAwesomeIcon color="#0077b6" icon={faStar} />
                        <FontAwesomeIcon color="#0077b6" icon={faStar} />
                        <FontAwesomeIcon
                          color="#0077b6"
                          icon={faStarHalfStroke}
                        />
                      </div>
                      <p className="text-gray-600 font-bold text-sm">
                        Rating: {review.rating}
                      </p>
                    </div>
                    <p className="text-base text-gray-400 mt-4">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientReviewWithImages;
