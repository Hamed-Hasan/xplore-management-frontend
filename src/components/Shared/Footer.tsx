/* eslint-disable @next/next/no-img-element */
import { Button } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div >
      <footer className="py-12 bg-white" style={{ borderTop: "1px solid grey" }}>
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              123 Main Street
              <br />
              City, Country 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>

          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Destinations</a>
              </li>
              <li>
                <a>Tours</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Newsletter Signup</h2>
            <p>
              Subscribe to our newsletter to receive the latest travel updates
              and promotions.
            </p>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full p-2 rounded outline-0"
              />
              <Button type="primary" className="mt-4">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex space-x-4 text-3xl">
              <FacebookFilled color="black" />
              <TwitterOutlined color="black" />
              <LinkedinFilled color="black" />
              <InstagramFilled color="black" />
              <YoutubeFilled color="black" />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Your Travel Agency. All rights
            reserved.
          </p>
        </div>
      </footer>

      <footer className="container mx-auto">
        <div className="grid grid-cols-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?auto=format&fit=crop&q=80&w=1588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" h-[200px] w-full object-cover brightness-[35%] hover:brightness-125 duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" h-[200px] w-full object-cover brightness-[35%] hover:brightness-125 duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" h-[200px] w-full object-cover brightness-[35%] hover:brightness-125 duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" h-[200px] w-full object-cover brightness-[35%] hover:brightness-125 duration-500"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1679917737897-9b373261ad57?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" h-[200px] w-full object-cover brightness-[35%] hover:brightness-125 duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" h-[200px] w-full object-cover brightness-[35%] hover:brightness-125 duration-500"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
