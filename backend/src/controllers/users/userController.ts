require("dotenv").config();
import { RequestWithProfile } from '@/src/types';
import { Request, Response } from 'express';
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendEmail } from '../../helper/sendEmail'
const jwt = require("jsonwebtoken");
import { sendResponse } from '@/src/services/ResponseService';
// import { loginUser, registerUser } from './userJoiModel';
import knex from '../../db';
import bcrypt from "bcrypt";
import { isNativeError } from 'util/types';
import { error } from 'console';
import { config } from 'process';
import moment from 'moment';
import { Next } from 'mysql2/typings/mysql/lib/parsers/typeCast';

export async function getUserDetails(req: any, res: any) {
  console.log(req.body)
  try {

    const token = req?.headers?.authorization
    const decryptedToken = jwt.verify(token, process.env.SECRET);

    const user = await knex('u_user').where({ u_user_id: decryptedToken.u_user_id })

    let finalDAtaToSend = {
      token,
      user,
      status : true
    }

    sendResponse(res, statusCode.SUCCESS, "User Added Successfully", finalDAtaToSend);
    
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}

