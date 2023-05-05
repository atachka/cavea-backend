import { Inventory } from '../db/models';

const populateDb = async () => {
    const addressArray = ['მთავარი ოფისი', 'კავეა გალერია', 'კავეა თბილისი მოლი', 'კავეა ისთ ფოინთი', 'კავეა სითი მოლი'];
    const inventoryData = [];

    for (let i = 1; i <= 300000; i++) {
        const name = `Item ${i}`;
        const address = `${addressArray[Math.floor(Math.random() * 5)]}`;
        const price = Math.floor(Math.random() * 1000) + 1;
        inventoryData.push({ name, address, price });
    }

    await Inventory.bulkCreate(inventoryData);
};
populateDb();
