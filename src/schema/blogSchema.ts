import * as yup from "yup";

export const createBlogYupSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});
