import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ContactRequestData,
  ContactResponseData,
} from "../../pages/api/contact";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    sendMessage: build.mutation<ContactResponseData, ContactRequestData>({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = apiSlice;
