require("dotenv").config();
import { RequestWithProfile } from '@/src/types';
import { Request, Response } from 'express';
import { statusType as statusCode } from "@/src/enum/statusTypes";
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
  try {


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

    if(!user_added){
      return sendResponse(res, statusCode.DB_ERROR, "Unable To Add User", null);
    }

    return sendResponse(res, statusCode.SUCCESS, "User Added Successfully", null);

    // switch(role){
    //   case 'consultant':
    //     const { m_consultant_name, m_consultant_address, m_consultant_username, m_consultant_password} = req.body;
    //     console.log({ m_consultant_name, m_consultant_address, m_consultant_username, m_consultant_password}, "data >>>>>>>>>>>>>")
    //     const hashedPassword = await bcrypt.hash(m_consultant_password, 10)
    //     await knex('m_consultant').insert({ 
    //       m_consultant_name, 
    //       m_consultant_address, 
    //       m_consultant_username, 
    //       m_consultant_password:hashedPassword});
    //     break;
    //     case 'developer':
    //       const { m_developer_name, m_developer_address, m_developer_username, m_developer_email, m_developer_password } = req.body;
    //       const hashedDeveloperPassword = await bcrypt.hash(m_developer_password, 10);
    //       await knex('m_developer').insert({
    //           m_developer_name,
    //           m_developer_username,
    //           m_developer_email,
    //           m_developer_address,
    //           m_developer_password: hashedDeveloperPassword
    //       });
    //       break;
    //   case 'society':
    //       const { m_society_name, m_society_address, m_society_email, m_society_password, m_society_username } = req.body;
    //       const hashedSocietyPassword = await bcrypt.hash(m_society_password, 10);
    //       await knex('m_society').insert({
    //           m_society_name,
    //           m_society_address,
    //           m_society_email,
    //           m_society_password: hashedSocietyPassword,
    //           m_society_username
    //       });
    //       break;
    //   default:
    //     return res.status(400).json({ error: 'Invalid role.' });


    // }

    // res.status(200).json({message : `${role} is saved`})
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}

export async function login(req: Request, res: Response) {
  try {

    const {user_email, user_password} = req.body

    const user = await knex('u_user').where({ u_user_email :user_email })

    console.log(user)

    if(user && user.length == 0){
      sendResponse(res, statusCode.DB_ERROR, "Invalid email", null);
    }

    const is_password_currect = bcrypt.compare(user_password, user[0].u_user_pass)

    if(!is_password_currect){
      sendResponse(res, statusCode.DB_ERROR, "Invalid password", null);
    }

    console.log({is_password_currect})
    const jwt_secret_key : any = process.env.SECRET;
    const token = jwt.sign({ u_user_id: user[0].u_user_id, u_user_role_id : user[0].u_user_role_id }, jwt_secret_key, { expiresIn: '1h' })

    return sendResponse(res, statusCode.SUCCESS, "User Added Successfully", null);

    // switch (role) {
    //   case 'consultant':
    //     const { m_developer_email, m_consultant_password } = req.body;
    //     const consultant = await knex('m_consultant').where({ m_developer_email }).first();
    //     if (!consultant || !await bcrypt.compare(m_consultant_password, consultant.m_consultant_password)) {
    //       return res.status(401).json({ error: "Invalid email or password" });
    //     }
    //     const key: any = process.env.SECRET;
    //     const token = jwt.sign({ userId: consultant.m_consultant_id, role: 'consultant' }, key, { expiresIn: '1h' })
    //     return res.status(200).json({ token });
    //     break;

    //   default:
    //     break;
    // }

  } catch (error: any) {
  sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}