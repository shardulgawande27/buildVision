const jwt = require("jsonwebtoken");
const { logger } = require("@/src/services/LoggingService");
import knex from '../db';
import { statusType as statusCode} from "@/src/enum/statusTypes";
const { sendResponse } = require("@/src/services/ResponseService");
import { RequestWithProfile } from '@/src/types';
import { NextFunction, Response } from 'express';

export default async (req: RequestWithProfile , res: Response, next: NextFunction) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.jwt_secret);
    const profile = await knex('u_crm_user').where({ user_id: decryptedToken.user_id, user_deleted: 'N', user_active: 'Y' }).first();
    if(profile) {
      req.profile = profile
      next();
    } else {
      return sendResponse(res, statusCode.FORBIDDEN, 'User Not Authenticated', null);
    }
  } catch (error: any) {
    logger.consoleErrorLog(req.originalUrl, 'Error in auth middleware', error.message)
    return sendResponse(res, statusCode.FORBIDDEN, error.message, null);
  }
};
