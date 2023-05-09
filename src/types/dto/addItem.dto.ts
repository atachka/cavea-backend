import { AddressEnum } from '../address.enum';

export interface AddItemDto {
    name: string;
    address: AddressEnum;
    price: string | number;
    [key: string]: string | number;
}
