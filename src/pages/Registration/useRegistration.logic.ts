/* eslint-disable @typescript-eslint/no-explicit-any */
import useFireBase from "./useFireBase";
import { useState } from "react";

export const useLogin = () => {
  const { createUserWithPassword, signInWithPassword } = useFireBase();
  const [registrationLoader, setRegistrationLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const [loginLoader, setloginLoader] = useState(false);

  // login
  const loginHandle = (values: any) => {
    setloginLoader(true);
    signInWithPassword(values, setloginLoader);
  };

  const onChange = () => {
    setCheck(!check);
    setError("");
  };

  // registration
  const registrationHandle = (values: any) => {
    setRegistrationLoader(true);
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
