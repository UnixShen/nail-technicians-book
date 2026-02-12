import { BUSINESS_STATUS_CODE } from "@/config/consts";

export const success = <T>(
  data: T,
  message = "Success",
  status = BUSINESS_STATUS_CODE.SUCCESS,
) => {
  return { status, message, data };
};

export const error = <T>(
  message = "Internal Server Error",
  status = BUSINESS_STATUS_CODE.ERROR,
  data?: T,
) => {
  return { status, message, data };
};