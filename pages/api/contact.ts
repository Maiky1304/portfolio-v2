import { NextApiRequest, NextApiResponse } from "next";

export type ContactRequestData = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponseData = {
  error: boolean;
  message: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ContactResponseData>
) {
  console.log(request.body);

  response.status(200).json({ error: false, message: "hello world" });
}
