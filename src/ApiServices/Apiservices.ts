/* eslint-disable @typescript-eslint/no-explicit-any */
import { Endpoints } from "./apiEndPoints";
import axios from "axios";

function authHeader() {
  const userData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData") as string)
    : "";
  const idToken = userData !== null ? userData["idToken"] : "";
  const content_type = "application/json";
  return {
    "Content-Type": content_type,
    "Accept-Language": "en",
    Authorization: `Bearer ${idToken}`,
  };
}

export const getService = (
  url: string,
  { thenCB, catchCB, finallyCB }: any
) => {
  const requestHeader = authHeader();

  axios
    .get(Endpoints.base + url, {
      headers: requestHeader,
    })
    .then((res) => thenCB(res))
    .catch((err) => catchCB(err))
    .finally(() => finallyCB());
};

export const PostPutPatch = (
  url: string,
  body: any,
  { thenCB, catchCB, finallyCB, method }: any
) => {
  const requestHeader = authHeader();
  axios[method as "post" | "put" | "patch"](Endpoints.base + url, body, {
    headers: requestHeader,
  })
    .then((res: any) => thenCB && thenCB(res))
    .catch((err: any) => catchCB && catchCB(err))
    .finally(() => {
      finallyCB && finallyCB();
    });
};
