import express from 'express';
import { addInventoryItem, deleteInventoryItem, getInventoryItems } from '../../controllers';
import { useGlobalErrorHandler } from '../../middleware';

export const inventoryRouter = express.Router();

// Get Inventory items
inventoryRouter.get('', useGlobalErrorHandler(getInventoryItems));

// Create a new Inventory item
inventoryRouter.post('', useGlobalErrorHandler(addInventoryItem));

// Delete Inventory item
inventoryRouter.delete('/:id', useGlobalErrorHandler(deleteInventoryItem));
