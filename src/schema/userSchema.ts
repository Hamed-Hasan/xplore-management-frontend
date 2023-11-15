import * as yup from "yup";

export const createUserYupValidate = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be 5 or more characters long")
    .max(16, "Must be 5 or fewer characters long"),
});

export const signInYupValidate = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be 5 or more characters long")
    .max(16, "Must be 5 or fewer characters long"),
});

export const createUserByAdminYupValidate = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be 5 or more characters long")
    .max(16, "Must be 5 or fewer characters long"),
  role: yup.string().required("Role is required"),
});
