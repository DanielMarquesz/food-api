import { FoodsController } from './controllers/foodsController';
import { Router } from "express";

const router = Router();

const foodsController = new FoodsController();

router.get('/foods', foodsController.list);
router.get('/foods/:id', foodsController.listOne);
router.post('/foods', foodsController.create);
router.put('/foods/:id', foodsController.update);
router.delete('/foods/:id', foodsController.delete);

export { router }