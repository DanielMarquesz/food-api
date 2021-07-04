import express from "express";
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./swagger.json";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.listen(3000, () => {
  console.log('The server is Running on port: 3000!');
});

export { app }