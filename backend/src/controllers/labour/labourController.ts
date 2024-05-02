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
    const labourId = req.params.Id;
    const attendance_data = req.body;
    console.log("This is params and body", {
      labourId,
      attendance_data,
    });
    const labourWithAttendance = await knex("m_labour")
      .select("l_wage")
      .where("l_id", labourId)
      .first();
    console.log("this is the record", labourWithAttendance.l_wage);
    const labour_wage = labourWithAttendance.l_wage;
    const attendance_status = req.body.attendance_status;
    console.log("this is the attendance status>>>>>>>....", attendance_status);
    let amount_paid: number = 0;
    if (attendance_status == "present") {
      console.log("labur is present");
      amount_paid = labour_wage * 1;
      console.log("this is amount to paid when present", amount_paid);
    } else if (attendance_status == "absent") {
      console.log("labur is absent");
      amount_paid = labour_wage * 0;
      console.log("this is amount to paid when absent", amount_paid);
    } else if (attendance_status == "half_day") {
      console.log("labur is on half_day");
      amount_paid = labour_wage * 0.5;
      console.log("this is amount to paid when on half_day", amount_paid);
    }
    amount_paid = parseFloat(amount_paid.toFixed(2));
    const formatted_amount: string = amount_paid.toFixed(2);
    console.log("Formatted amount paid:", formatted_amount);

    const attendanceUpdate = await knex("m_labour_attendance").insert({
      attendance_status,
      amount_paid: formatted_amount,
      labour_id: labourId,
    });
    console.log("inserted attendance >>>>>>>>>>>>>>>>>", attendanceUpdate);
  } catch (error) {
    console.log("Error in getting labour data", error);
  }
}
