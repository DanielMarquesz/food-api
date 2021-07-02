import express from "express";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log('The server is Running on port: 3000!');
});