import { AddItemDto, AddressEnum } from '../types';

export class AddInventoryValidation {
    obj: AddItemDto;
    message: string[];
    constructor(obj: AddItemDto) {
        this.obj = obj;
        this.message = [];
    }

    private isRequired(keyName: string) {
        const value = `${this.obj[keyName]}`.replace(/\s/g, '');
        if (!value) {
            this.message.push(`${keyName} must not be empty`);
        }
        return this;
    }

    isNumber(keyName: string) {
        this.isRequired(keyName);

        if (typeof this.obj[keyName] !== 'number') {
            this.message.push(`${keyName} should be a number`);
        }

        return this;
    }

    isString(keyName: string) {
        this.isRequired(keyName);

        if (typeof this.obj[keyName] !== 'string') {
            this.message.push(`${keyName} should be a string`);
        }

        return this;
    }

    isStringOrNumber(keyName: string) {
        this.isRequired(keyName);

        if (typeof this.obj[keyName] !== 'string' && typeof this.obj[keyName] !== 'number') {
            this.message.push(`${keyName} should be a string or a number`);
        }
        return this;
    }
    isIn(keyName: string) {
        this.isRequired(keyName);
        const values = Object.values(AddressEnum);
        const objVal = this.obj[keyName] as AddressEnum;
        if (values.indexOf(objVal) === -1) {
            this.message.push(`${keyName} should be one of [${values}]`);
        }
        return this;
    }
}
