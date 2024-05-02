require("dotenv").config();
import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendResponse } from "@/src/services/ResponseService";
import knex from "../../db";
import moment from "moment";

export async function postLabourData(req: Request, res: Response) {
  console.log("This is to post labour data");

  try {
    const { l_name, l_wage } = req.body;

    knex("m_labour")
      .insert({ l_name, l_wage })
      .then(() => {
        console.log("labour added successfully");
        sendResponse(
          res,
          statusCode.SUCCESS,
          "labour created successfully",
          null
        );
      })
      .catch((err) => {
        console.log(err);
        sendResponse(
          res,
          statusCode.INTERNAL_SERVER_ERROR,
          "Failed to create labour",
          null
        );
      });
    sendResponse(res, statusCode.SUCCESS, "labour created successfully", null);
  } catch (error: any) {
    console.log("Error from tryCatch in postProject", error);
    sendResponse(res, error, "Failed to create labour", null);
  }
}

export async function getLabourData(req: Request, res: Response) {
  console.log("This is to get the labour data");

  try {
    const labour_data = await knex("m_labour").select("*");
    console.log(labour_data);
  } catch (error: any) {
    console.log("Error in getting labour data", error);
  }
}

export async function markAttendance(req: Request, res: Response) {
  console.log("This is the attendance route");
  try {
    const labourId = req.params;
    const attendance_data = req.body;
    console.log("This is params and body", { labourId, attendance_data });
    const laborWithAttendance = await knex("m_labour")
      .select("m_labour", "l_id", "l_name", "l_wage")
      .leftJoin("m_labour_attendance", "labour_id", "attendance_status")
      .where("m_labour.l_id", labourId)
      .orderBy("m_labour_attendance", "desc");

    console.log(laborWithAttendance);
  } catch (error) {
    console.log("Error in getting labour data", error);
  }
}
