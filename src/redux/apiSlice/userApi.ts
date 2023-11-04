import { api } from "./apiSlice";

const UserApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getusers: builder.query({
      query: (params) => ({
        url: `/users`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetusersQuery } = UserApi;
