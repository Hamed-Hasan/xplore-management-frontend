import React, { useEffect, useState } from "react";
import XSelect from "@/components/UI/XSelect";
import { DatePicker, Input, Slider } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setFilters } from "@/redux/api/features/services/servicesSlice";

const ServiceFilter = () => {
  const [location, setLocation] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100000);

  const dispatch = useDispatch();

  const handleMonthChange = (date: any) => {
    if (date) {
      if (date.$M === 0) {
        setMonth("January");
      } else if (date.$M === 1) {
        setMonth("February");
      } else if (date.$M === 2) {
        setMonth("March");
      } else if (date.$M === 3) {
        setMonth("April");
      } else if (date.$M === 4) {
        setMonth("May");
      } else if (date.$M === 5) {
        setMonth("June");
      } else if (date.$M === 6) {
        setMonth("July");
      } else if (date.$M === 7) {
        setMonth("August");
      } else if (date.$M === 8) {
        setMonth("September");
      } else if (date.$M === 9) {
        setMonth("October");
      } else if (date.$M === 10) {
        setMonth("November");
      } else if (date.$M === 11) {
        setMonth("December");
      } else {
        setMonth("");
      }
    } else {
      setMonth("");
    }
  };

  const handleSliderChange = (sliderValues: any) => {
    setMinPrice(sliderValues[0]);
    setMaxPrice(sliderValues[1]);
  };

  useEffect(() => {
    const data = {
      minPrice,
      maxPrice,
      month,
      location,
    };
    dispatch(setFilters(data));
  }, [minPrice, maxPrice, month, location, dispatch]);

  return (
    <div className="bg-elegant p-4 rounded-lg sticky top-40">
      <h2 className="text-center text-passion text-lg">
        Find Your Destination
      </h2>
      <div className="mt-5">
        <XSelect setLocation={setLocation} />
        <DatePicker
          onChange={handleMonthChange}
          className="w-full my-3"
          size="middle"
          picker="month"
        />
        <div>
          <Slider
            range
            min={0}
            defaultValue={[0, 100000]}
            max={100000}
            onChange={handleSliderChange}
          />
          <Input value={`$ ${minPrice | 0} - $ ${maxPrice | 0}`} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;
