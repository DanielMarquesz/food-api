import { Request, Response } from "express";
// import { v4 as uuid } from "uuid";
import Book from './../book';

class BooksController {

  async list(req: Request, res: Response){
    try {
      const books = await Book.find()
      if(books) {
        return res.json({books})
      }
    } catch(err) {
      return res.json({error: err})
    }
  }

  async listOne(req: Request, res: Response){
    try {
      const books = await Book.findById(req.params.id);         
      if(books) {
        return res.json({books});
      }
    } catch(err) {
      return res.json({error: err});
    }
  }

  async create(req: Request, res: Response){
    const updatedBook = new Book(req.body);
    try {
      const books = await updatedBook.save();
      if(books) {
        return res.json({books});
      }
    } catch(err) {
      return res.json({error: err});
    }
  }

  async update(req: Request, res: Response){    
    try {
      const books = await Book.findByIdAndUpdate(req.params.id, req.body);
      if(books) {
        return res.status(201).json({books});
      }
    } catch(err) {
      console.log(err)
      return res.status(400).json({error: err});
    }
  }

  async delete(req: Request, res: Response){
    try {
      const books = await Book.deleteOne({_id: req.params.id});
      if(books) {
        return res.json({books});
      }
    } catch(err) {
      return res.json({error: err});
    }
  }
}

export { BooksController }