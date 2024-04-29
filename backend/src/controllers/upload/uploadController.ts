import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendResponse } from "@/src/services/ResponseService";
import knex from '../../db';
import { object } from "joi";

// export async function uplaodImage(req:Request, res:Response){

//     let fielObj  = req.file
    
//     // console.log( : object, "REq >>>>>>>>>>>>>>>>>>>>>>")
// }