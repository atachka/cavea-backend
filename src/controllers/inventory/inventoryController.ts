import { Request, Response } from 'express';
import { Inventory } from '../../db/models/index';
import { handleWhereClause } from '../../utils';

export const getInventoryItems = async (req: Request, res: Response) => {
    const whereClause = handleWhereClause(req.query);
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = parseInt(req.query.page as string) * limit || 0;
    const inventory = await Inventory.findAll({
        limit: limit,
        offset: offset,
        where: whereClause
    });

    const count = await Inventory.count({ where: whereClause });

    res.json({
        data: inventory,
        meta: {
            totalItems: count,
            itemCount: inventory.length,
            itemsPerPage: limit,
            totalPages: Math.ceil(count / limit),
            currentPage: Math.floor(offset / limit) + 1
        }
    });
};

export const addInventoryItem = async (req: Request, res: Response) => {
    const { name, address, price } = req.body;
    await Inventory.create({ name, address, price });

    res.json({ message: 'Inventory item added', added: true });
};

export const deleteInventoryItem = async (req: Request, res: Response) => {
    const id = req.params.id;

    const inventory = await Inventory.findByPk(id);

    if (inventory) {
        await inventory.destroy();
        res.json({ message: 'Inventory item deleted', deleted: true });
    } else {
        res.status(404).json({ message: 'Inventory item not found' });
    }
};
