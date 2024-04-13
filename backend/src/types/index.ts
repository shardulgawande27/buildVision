import { Request, Response } from 'express';

export interface Profile {
        user_id: number,
        user_name: string,
        user_email: string,
        user_password?: string,
}

export interface RequestWithProfile extends Request {
    profile?: Profile; 
  }

interface columnToAdd {
        name: string, 
        type: string, 
        count: number,
        index: boolean        
}

export type columnsToAdd = columnToAdd[];