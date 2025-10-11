import express from 'express';
import dotenv from 'dotenv';
import { router } from './routers/router';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(router);

const port = process.env.PORT ?? 6000;

app.listen(port, () => console.log(`Link: http://localhost:${port}`));