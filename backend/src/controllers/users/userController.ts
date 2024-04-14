import { RequestWithProfile } from '@/src/types';
import { Request, Response } from 'express';
import { statusType as statusCode} from "@/src/enum/statusTypes";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { sendResponse } from '@/src/services/ResponseService';
// import { loginUser, registerUser } from './userJoiModel';
import knex from '../../db';
import { isNativeError } from 'util/types';

export async function register(req: Request, res: Response) {
  try {


    const role = req.body.role;

    console.log(role);

    switch(role){
      case 'consultant':
        const { m_consultant_name, m_consultant_address, m_consultant_username, m_consultant_password} = req.body;
        console.log({ m_consultant_name, m_consultant_address, m_consultant_username, m_consultant_password}, "data >>>>>>>>>>>>>")
        await knex('m_consultant').insert({ m_consultant_name, m_consultant_address, m_consultant_username, m_consultant_password});
        break;
      case 'developer':
        const {developer_name	,developer_address	,developer_username	,developer_email	,developer_password	} =  req.body;
        await knex('m_developer').insert({developer_name	,developer_address	,developer_username	,developer_email	,developer_password	});
        break;
      case 'scoiety':
        const {m_society_name	,m_society_address,	m_society_email,	m_society_password,	m_society_username} = req.body;
        await knex('m_society').insert({m_society_name	,m_society_address,	m_society_email,	m_society_password,	m_society_username});
        break;
      default:
        return res.status(400).json({ error: 'Invalid role.' });
      
      
    }

    res.status(200).json({message : `${role} is saved`})
  } catch (error: any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
  }
}
