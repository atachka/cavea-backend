import QueryString from 'qs';
import { Op, WhereOptions, OrderItem } from 'sequelize';
import { WhereClauseType } from '../types';

export const handleWhereClause = (query: QueryString.ParsedQs): { where: WhereOptions<WhereClauseType>; order: OrderItem[] } => {
    const name = query.name;
    const address = query.address;
    const sort = query.sort;
    const sortBy = query.sortBy;
    const minPrice = parseFloat(query.minPrice as string);
    const maxPrice = parseFloat(query.maxPrice as string);

    const whereClause: WhereOptions<WhereClauseType> = {};

    if (name) {
        whereClause.name = { [Op.iLike]: `%${name}%` };
    }
    if (address) {
        whereClause.address = `${address}`;
    }
    if (minPrice && maxPrice) {
        whereClause.price = { [Op.between]: [minPrice, maxPrice] };
    } else if (minPrice) {
        whereClause.price = { [Op.gte]: minPrice };
    } else if (maxPrice) {
        whereClause.price = { [Op.lte]: maxPrice };
    }

    const order: OrderItem[] = [];
    if (sortBy && sort) order.push([`${sortBy}`, `${sort}`]);
    return { where: whereClause, order };
};
