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
      m_chairman_name: data.chairmanName,
      m_chairman_phone: data.chairmanMobile,
      m_sec_name: data.secretaryName,
      m_sec_phone: data.secretaryMobile,
      m_treasurer_name: data.treasurerName,
      m_treasurer_phone: data.treasurerMobile,
      plot_area_pr_card: data.prCardArea,
      plot_area_tilr: data.tIlrArea,
      plot_area_ps: data.physicalSurveyArea,
      m_socity_name: data.societyName,
      m_project_city: data.cityName,
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
    // console.log(project_data);
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

export async function getThisProject(req: Request, res: Response) {
  try {
    const projectId = req.body.id;
    const project_data = await knex("m_projects")
      .select("*")
      .where("m_project_id", projectId);

    console.log(
      project_data,
      "This is the projectData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
    sendResponse(
      res,
      statusCode.SUCCESS,
      "Data fetched successfully",
      project_data
    );
  } catch (error: any) {
    console.log("This server side error while getting one project", error);
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}
