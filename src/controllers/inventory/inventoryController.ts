import { Request, Response } from 'express';

export const getInventoryItems = async (req: Request, res: Response) => {
    res.json({ message: 'Hello world' });
};

export const addInventoryItem = async (req: Request, res: Response) => {
    res.json({ message: 'Hello world 2' });
};

export const deleteInventoryItem = async (req: Request, res: Response) => {
    res.json({ message: 'Hello world 3' });
};
