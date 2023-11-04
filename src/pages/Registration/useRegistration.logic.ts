/* eslint-disable @typescript-eslint/no-explicit-any */
import useFireBase from "./useFireBase";
import { useState } from "react";

export const useLogin = () => {
  const { createUserWithPassword, signInWithPassword } = useFireBase();
  const [registrationLoader, setRegistrationLoader] = useState();
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const [loginLoader, setloginLoader] = useState();

  const loginHandle = (values: any) => {
    console.log(values);

    signInWithPassword(values, setloginLoader);
  };

  const onChange = () => {
    setCheck(!check);
    setError("");
  };
  const registrationHandle = (values: any) => {
    console.log("registrationHandle", values);
    if (!check) {
      setError("true");
      return;
    }
    createUserWithPassword(values, setRegistrationLoader);
  };

  return {
    registrationLoader,
    loginLoader,
    loginHandle,
    registrationHandle,
    onChange,
    check,
    error,
  };
};
