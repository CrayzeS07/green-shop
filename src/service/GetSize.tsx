"use server";

import { URL } from "./request";

interface GetSizeType {
  id: string;
  title: string;
  count: string;
}
export const GetSize = async (): Promise<GetSizeType> => {
  try {
    const res = await fetch(`${URL}/sizes`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
