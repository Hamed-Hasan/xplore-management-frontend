import * as yup from "yup";

export const createBookingYupSchema = yup.object().shape({
  how_day: yup.number().required("Days is required"),
  adult: yup.number().required("Adult is required"),
  child: yup.number().required("Child is required"),
  infant: yup.number().required("Infant is required"),
});

export const createServicesYupSchema = yup.object().shape({
  image: yup.string().required("Image is required"),
  title: yup.string().required("Title is required"),
  day: yup.number().required("Days is required"),
  age: yup.number().required("Age is required"),
  how_month: yup.string().required("Month is required"),
  availability: yup.number().required("Availability is required"),
  departure: yup.string().required("Departure is required"),
  // departureTime: yup.string().required("Departure Time is required"),
  // returnTime: yup.string().required("Return Time is required"),
  lat: yup.string().required("Lat is required"),
  long: yup.string().required("Long is required"),
  price: yup.number().required("Price is required"),
  availabilityType: yup.string().required("Availability Type is required"),
  location: yup.string().required("Location is required"),
  category: yup.string().required("Category is required"),
  included: yup.array().required("Included is required"),
  notIncluded: yup.array().required("Not Included is required"),
  description: yup.string().required("Description is required"),
});
