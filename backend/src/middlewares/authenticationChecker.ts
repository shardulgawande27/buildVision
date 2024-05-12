const jwt = require("jsonwebtoken");
const { logger } = require("@/src/services/LoggingService");
import knex from '../db';
import { statusType as statusCode} from "@/src/enum/statusTypes";
const { sendResponse } = require("@/src/services/ResponseService");
import { RequestWithProfile } from '@/src/types';
import { NextFunction, Response } from 'express';
import { Next } from 'mysql2/typings/mysql/lib/parsers/typeCast';



export const authenticationChecker = (user_type_ids = []) => {
  return async (req : any, res : any, next : Next) => {
     
      try {

        console.log( req?.headers, "headers >>>>>>>>>>>>>>>>>>>>>>>>>>>>")

        const token = req?.headers?.authorization
        const decryptedToken = jwt.verify(token, process.env.SECRET);
          console.log(decryptedToken, "decrypt >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        const profile = await knex('u_user').where({ u_user_id: decryptedToken.u_user_id }).first();
        if(profile) {
          req.profile = profile
          next();
        } else {
          return sendResponse(res, statusCode.FORBIDDEN, 'User Not Authenticated', null);
        }

       
      } catch (error: any) {
        return sendResponse(res, statusCode.FORBIDDEN, error.message, null);
      }
  };
}


export default authenticationChecker;