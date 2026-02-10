import { AddFormValues, ADD_TYPE_VALUE } from "@/components/home/types";

export const addPost = async (data: AddFormValues) => {
  const response = await fetch("/api/add", {
    method: "POST",
    body: JSON.stringify(data),
  });
  console.log("🚀 ~ addPost ~ response:", response)
  const resData = await response?.json();
  return resData.data;
};

export const getPosts = async (type: ADD_TYPE_VALUE) => {
  const response = await fetch(`/api/detail?type=${type}`);
  const resData = await response?.json();
  return resData.data;
};