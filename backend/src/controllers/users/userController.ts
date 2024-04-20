require("dotenv").config();
import { RequestWithProfile } from '@/src/types';
import { Request, Response } from 'express';
import { statusType as statusCode } from "@/src/enum/statusTypes";
import { sendEmail } from '../../helper/sendEmail'
import jwt from 'jsonwebtoken';
import { sendResponse } from '@/src/services/ResponseService';
// import { loginUser, registerUser } from './userJoiModel';
import knex from '../../db';
import bcrypt from "bcrypt";
import { isNativeError } from 'util/types';
import { error } from 'console';
import { config } from 'process';
import moment from 'moment';
export async function register(req: Request, res: Response) {
  console.log(req.body)
  try {

    console.log("inside try >>>>>>>>>>>>>>", req.body)

    const {
      u_user_role_id,
      u_user_email,
      u_user_mobile,
      u_user_pass,
      u_user_fist_name,
      u_user_last_name,
      u_user_address
    } = req.body

    let is_user_exists = await knex('u_user').where('u_user_email', u_user_email)

    if (is_user_exists && is_user_exists.length > 0) {
      return sendResponse(res, statusCode.DB_ERROR, "Email And Mobile Is Already Exists", null);
    }

    const email_otp = Math.floor(100000 + Math.random() * 900000);
    const feature_time = moment().add(5, 'minutes');


    // code for send email otp to user 
    // write a code for send otp 

    try {
      await sendEmail(u_user_email, "verify your email", `this your opt ${email_otp}`)
    } catch (error) {
      console.log("error in send email", error)
    }

    // code for send email otp to user 

    const userDataToinsert = {
      ...req.body,
      u_email_varification_otp: email_otp,
      u_email_varification_otp_expire_time: feature_time.format('YYYY-MM-DD HH:mm:ss')
    }

    const hashedDeveloperPassword = await bcrypt.hash(u_user_pass, 10);

    delete userDataToinsert.u_user_pass
    userDataToinsert.u_user_pass = hashedDeveloperPassword

    const user_added = await knex('u_user').insert(userDataToinsert);

    console.log(user_added, "user_added >>>>>>>>>>>>>")

    if (!user_added) {
       sendResponse(res, statusCode.DB_ERROR, "Unable To Add User", null);
    }

     sendResponse(res, statusCode.SUCCESS, "User Added Successfully", null);

    
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}

export async function login(req: Request, res: Response) {
  try {

    const { user_email, user_password } = req.body

    const user = await knex('u_user').where({ u_user_email: user_email })

    console.log(user)

    if (user && user.length == 0) {
     return sendResponse(res, statusCode.DB_ERROR, "Invalid email", null);
    }

    const is_password_currect = await bcrypt.compare(user_password, user[0].u_user_pass)
    
    console.log(is_password_currect, "is_password_currect >>>>>>>>>>")

    if (is_password_currect) {
      const jwt_secret_key: any = process.env.SECRET;
      const token = jwt.sign({ u_user_id: user[0].u_user_id, u_user_role_id: user[0].u_user_role_id }, jwt_secret_key, { expiresIn: '1h' })
  
      let finalDAtaToSend = {
        token,
        user,
        status : true
      }
  
      sendResponse(res, statusCode.SUCCESS, "User Added Successfully", finalDAtaToSend);
    }else{
      sendResponse(res, statusCode.DB_ERROR, "Invalid password", null);

    }

    console.log({ is_password_currect })
   

   
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}


export async function verifyUserWithOtp(req: Request, res: Response) {
  try {

    const { user_otp, user_email } = req.body

    const user = await knex('u_user').where({ u_user_email: user_email })

    console.log(user)

    if (user && user.length == 0) {
      sendResponse(res, statusCode.DB_ERROR, "User Not Found", null);
    }

    if (
      moment(user[0].u_email_varification_otp_expire_time).isBefore(
        moment()
      )
    ) {
      sendResponse(res, statusCode.DB_ERROR, "Otp IS Expired", null);
    }

    if(user[0].u_email_varification_otp == user_otp){

      const response = await knex('u_user')
      .update({
        u_is_user_verified: 'Y',
      })
      .where({ u_user_email : user_email });

      const jwt_secret_key: any = process.env.SECRET;
      const token = jwt.sign({ u_user_id: user[0].u_user_id, u_user_role_id: user[0].u_user_role_id }, jwt_secret_key, { expiresIn: '1h' })

      let finalDAtaToSend = {
        token,
        user,
        status : true
      }

      return sendResponse(res, statusCode.SUCCESS, "User Added Successfully", finalDAtaToSend);
    }else{
      sendResponse(res, statusCode.DB_ERROR, "Otp is wrong", null);
    }

  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}