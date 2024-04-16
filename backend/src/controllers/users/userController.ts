require("dotenv").config();
import { RequestWithProfile } from '@/src/types';
import { Request, Response } from 'express';
import { statusType as statusCode} from "@/src/enum/statusTypes";
import jwt from 'jsonwebtoken';
import { sendResponse } from '@/src/services/ResponseService';
// import { loginUser, registerUser } from './userJoiModel';
import knex from '../../db';
import bcrypt from "bcrypt";
import { isNativeError } from 'util/types';
import { error } from 'console';
import { config } from 'process';


export async function register(req: Request, res: Response) {
  try {


    const role = req.body.role;

    console.log(role);

    switch(role){
      case 'consultant':
        const { m_consultant_name, m_consultant_address, m_consultant_username, m_consultant_password} = req.body;
        console.log({ m_consultant_name, m_consultant_address, m_consultant_username, m_consultant_password}, "data >>>>>>>>>>>>>")
        const hashedPassword = await bcrypt.hash(m_consultant_password, 10)
        await knex('m_consultant').insert({ 
          m_consultant_name, 
          m_consultant_address, 
          m_consultant_username, 
          m_consultant_password:hashedPassword});
        break;
        case 'developer':
          const { m_developer_name, m_developer_address, m_developer_username, m_developer_email, m_developer_password } = req.body;
          const hashedDeveloperPassword = await bcrypt.hash(m_developer_password, 10);
          await knex('m_developer').insert({
              m_developer_name,
              m_developer_username,
              m_developer_email,
              m_developer_address,
              m_developer_password: hashedDeveloperPassword
          });
          break;
      case 'society':
          const { m_society_name, m_society_address, m_society_email, m_society_password, m_society_username } = req.body;
          const hashedSocietyPassword = await bcrypt.hash(m_society_password, 10);
          await knex('m_society').insert({
              m_society_name,
              m_society_address,
              m_society_email,
              m_society_password: hashedSocietyPassword,
              m_society_username
          });
          break;
      default:
        return res.status(400).json({ error: 'Invalid role.' });
      
      
    }

    res.status(200).json({message : `${role} is saved`})
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}

export async function login(req: Request, res: Response){
   console.log(process.env.SECRET)
  try {
    
    const role = req.body.role;

    switch (role) {
      case 'consultant':
        const{m_developer_email, m_consultant_password} = req.body;
        const consultant = await knex('m_consultant').where({m_developer_email}).first();
        if(!consultant || !await bcrypt.compare(m_consultant_password, consultant.m_consultant_password)){
          return res.status(401).json({error:"Invalid email or password"});
        }
        const key : any = process.env.SECRET;
        const token = jwt.sign({userId: consultant.m_consultant_id, role:'consultant'},key, { expiresIn: '1h' })
        return res.status(200).json({ token });
        break;
    
      default:
        break;
    }

  } catch (error:any) {
    
  }
}