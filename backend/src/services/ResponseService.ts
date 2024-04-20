import { API_VERSION } from "@/src/helper/constant";
import { getErrorMessage as responseHelper } from "@/src/helper/responseHelper"
import { Response } from "express";

export function sendResponse(res: Response, statusCode: number, message: string, data: any) {
  
  console.log("here is data in send response", data)
  
  if(message) {
    res.status(statusCode).send({
      apiVersion: API_VERSION || "No Version",
      statusCode,
      ...responseHelper(statusCode),
      message,
      data: data,
    });
  } else {
    res.status(statusCode).send({
      apiVersion: API_VERSION || "No Version",
      statusCode,
      ...responseHelper(statusCode),
      data: data
    });
  }
}
