require("dotenv").config();
import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendResponse } from "@/src/services/ResponseService";
import knex from "../../db";
import moment from "moment";

export async function postTask(req:Request, res:Response) {
    console.log("this is postPost") ;
}


export async function getTask(req:Request, res:Response) {
    console.log("this is getTask")
}
