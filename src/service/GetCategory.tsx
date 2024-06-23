"use server";
import { URL } from "./request";

interface GetCategoryType {
  id: string;
  title: string;
  count: string;
}
export const GetCategory = async (): Promise<GetCategoryType> => {
  try {
    const res = await fetch(`${URL}/categoryies`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
