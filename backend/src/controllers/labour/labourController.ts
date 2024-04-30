require("dotenv").config();
import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendResponse } from "@/src/services/ResponseService";
import knex from "../../db";
import moment from "moment";

export async function postLabourData(req: Request, res: Response) {
  console.log("This is to post labour data");
}

export async function getLabourData(req: Request, res: Response) {
  console.log("This is to get the labour data");
}
