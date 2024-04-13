import { RequestWithProfile } from '@/src/types';
import { Request, Response } from 'express';
import { statusType as statusCode} from "@/src/enum/statusTypes";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { sendResponse } from '@/src/services/ResponseService';
const { logger } = require("@/src/services/LoggingService");
// import { loginUser, registerUser } from './userJoiModel';
import knex from '../../db';
import { isNativeError } from 'util/types';

export async function register(req: Request, res: Response) {
  try {
    // Validate the request parameters
    console.log("inside")
  } catch (error: any) {
    logger.consoleErrorLog(req.originalUrl, 'Error in register', error.message)
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}