import { BooksController } from './controllers/booksController';
import { Router } from "express";

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.list);
router.get('/books/:id', booksController.listOne);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.delete);

export {router}