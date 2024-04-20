import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendResponse } from "@/src/services/ResponseService";
import knex from '../../db';

export async function home(req:Request, res:Response){
    console.log("This is home")
    const data = [
        {
            id: 1,
            society_name : "xyz",
            society_img:"img1",
            status:"open"
        },
        {
            id:2,
            society_name:"abc",
            society_img:"img2",
            status:"on-going",
        },
        {
            id:3,
            society_name : "efg",
            society_img:"img3",
            status:"closed"
        }
    ]

    console.log(data)

    sendResponse(res, statusCode.SUCCESS, "got the data", data)
}