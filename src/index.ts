import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { inventoryRouter } from './routes';
import { globalErrorHandler } from './middleware';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(cors({ origin: ['http://localhost:3000'] }));

app.use('/api/inventory', inventoryRouter);

app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
