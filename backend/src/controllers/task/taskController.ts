require("dotenv").config();
import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendResponse } from "@/src/services/ResponseService";
import knex from "../../db";
import moment from "moment";

export async function postTask(req: Request, res: Response) {
  console.log("this is postPost");
  try {
    const {
      m_task_title,
      m_task_status,
      m_task_start_date,
      m_task_end_date,
      m_task_images,
      m_task_desc,
      task_percent,
    } = req.body;
    const object = {
      m_task_title,
      m_task_status,
      m_task_start_date,
      m_task_end_date,
      m_task_images,
      m_task_desc,
      task_percent,
    };
    console.log(object);
    const startDate = moment(m_task_start_date, "YYYY-MM-DDTHH:mm:ssZ", true);
    const endDate = moment(m_task_end_date, "YYYY-MM-DDTHH:mm:ssZ", true);
    if (!startDate.isValid() || !endDate.isValid()) {
      sendResponse(res, statusCode.BAD_REQUEST, "Invalid date format", null);
      return;
    }
    knex("m_project_tasks")
      .insert({
        m_task_title,
        m_task_status,
        m_task_start_date,
        m_task_end_date,
        m_task_images,
        m_task_desc,
        task_percent,
      })
      .then(() => {
        console.log("data inserted successfully");
        sendResponse(
          res,
          statusCode.SUCCESS,
          "Task created successfully",
          null
        );
      })
      .catch((error) => {
        console.log("Error in data  insertion", error);
        sendResponse(
          res,
          statusCode.INTERNAL_SERVER_ERROR,
          "Failed to create task",
          null
        );
      });
  } catch (error: any) {
    console.log("Error from tryCatch in postProject", error);
    sendResponse(res, error, "Failed to create task", null);
  }
}

export async function getTask(req: Request, res: Response) {
  console.log("this is getTask");
}
