"use client";

import Title from "@/components/UI/Title";
import { Button } from "antd";
import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import {
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto my-28">
      <div className="max-w-6xl mx-auto">
        <Title title="About Us" top="Know About" />

        <section className="bg-white p-8 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-gray-500">
            Feel free to reach out to us if you have any questions or inquiries.
          </p>
          <address className="mt-4 text-accent">
            Travel Agency Name
            <br />
            Address: 123 Main St, City, Country
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@travelagency.com
            <br />
          </address>
        </section>

        <section className="bg-white p-8 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border rounded w-full outline-0"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded w-full outline-0"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 border rounded w-full outline-0"
              />
            </div>
            <Button type="primary">Submit</Button>
          </form>
        </section>

        {/* Location Map */}
        <section className="bg-white p-8 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
          <div>
            <MapContainer
              center={[Number(36.7783), Number(119.4179)]}
              zoom={1}
              scrollWheelZoom={true}
              className="w-full z-40 h-72"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[Number(36.7783), Number(119.4179)]}>
                <Popup>USA</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>

        <section className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <p>
            Follow us on social media to stay updated with our latest travel
            deals and news.
          </p>
          <div className="flex space-x-4 text-3xl mt-5">
            <FacebookFilled color="black" />
            <TwitterOutlined color="black" />
            <LinkedinFilled color="black" />
            <InstagramFilled color="black" />
            <YoutubeFilled color="black" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
