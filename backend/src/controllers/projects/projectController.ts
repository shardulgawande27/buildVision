require("dotenv").config();
import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import jwt from "jsonwebtoken";
import { sendResponse } from "@/src/services/ResponseService";
import knex from "../../db";
import moment from "moment";
import { error } from "console";

export async function postProject(req: Request, res: Response) {
  console.log("This is post");
  try {
    const data = req.body;
    console.log("This is data from add project>>>>>>>>>>>>>>>>>", data);
    const formdata = {
      m_project_name: data.projectName,
      m_cts_number: data.ctsNo,
      m_total_members: data.totalMember,
      m_room_type: data.roomType,
      m_no_of_rooms: data.numberOfRooms,
      m_sq_meter: data.squareM,
      m_fedration: data.federation,
    };
    console.log("this is formData", formdata);
    knex("m_projects")
      .insert(formdata)
      .then((res) => {
        console.log("Data inserted successfully", res);
      })
      .catch((error) => {
        console.log("Error in project inseretion", error);
      });
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}

export async function getProjects(req: Request, res: Response) {
  console.log("this is get");

  try {
    const project_data = await knex("m_projects").select("*");
    console.log(project_data);
    sendResponse(
      res,
      statusCode.SUCCESS,
      "Data fetched successfully",
      project_data
    );
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}
