import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const XCalender = ({ setCalenderData }: any) => {
  const [selected, setSelected] = useState<Date[]>([]);

  const handleDayClick = (date: Date) => {
    if (selected.length === 2) {
      setSelected([date]);
    } else if (selected.length === 0 || date < selected[0]) {
      setSelected([date]);
    } else if (date > selected[0]) {
      setSelected([selected[0], date]);
    }
  };

  useEffect(() => {
    if (selected[0] && selected[1]) {
      const selectDate = {
        startDate: format(selected[0], "PP"),
        endDate: format(selected[1], "PP"),
      };
      setCalenderData(selectDate);
    }
  }, [selected, setCalenderData]);

  return (
    <div className="sticky top-20">
      <DayPicker
        selected={selected}
        modifiers={{
          selectedRange: selected,
        }}
        onDayClick={handleDayClick}
        style={{ color: "#003366", width: "100%" }}
      />
      <div className="text-center">
        <h2 className="text-lg text-sunset">Selected dates :</h2>
        <ul>
          {selected.map((date) => (
            <li className=" text-neutral" key={date.toString()}>
              {format(date, "PP")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default XCalender;
