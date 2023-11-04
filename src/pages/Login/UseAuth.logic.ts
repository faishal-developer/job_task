import * as yup from "yup";

const UseAuth = () => {
  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(32).required(),
  });

  const RegistrationSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    name: yup.string().min(3).max(40).required("Name is required"),
    password: yup.string().min(6).max(32).required(),
  });

  return {
    loginSchema,
    RegistrationSchema,
  };
};

export default UseAuth;
