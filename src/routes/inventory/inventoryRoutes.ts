import express from 'express';
import { addInventoryItem, deleteInventoryItem, getInventoryItems } from '../../controllers';

export const inventoryRouter = express.Router();

// Get Inventory items
inventoryRouter.get('', getInventoryItems);

// Create a new Inventory item
inventoryRouter.post('', addInventoryItem);

// Delete Inventory item
inventoryRouter.delete('/:id', deleteInventoryItem);
