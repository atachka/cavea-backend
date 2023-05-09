import { Model, DataTypes } from 'sequelize';
import sequelize from '../../index';
import { AddressEnum } from '../../../types';

export class Inventory extends Model {
    public id!: number;
    public name!: string;
    public address!: AddressEnum;
    public price!: number;
}

Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.ENUM(...Object.values(AddressEnum)),
            allowNull: false,
            validate: {
                notEmpty: true,
                isIn: [[...Object.values(AddressEnum)]]
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        }
    },
    {
        sequelize,
        modelName: 'inventory'
    }
);
