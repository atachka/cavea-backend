import QueryString from 'qs';
import { Op, WhereOptions } from 'sequelize';
import { WhereClauseType } from '../types';

export const handleWhereClause = (query: QueryString.ParsedQs): WhereOptions<WhereClauseType> => {
    const name = query.name;
    const address = query.address;
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
    return whereClause;
};
