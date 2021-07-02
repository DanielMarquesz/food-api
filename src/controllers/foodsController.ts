import { Request, Response } from "express";
import Food from '../models/food';

class FoodsController {

  async list(req: Request, res: Response){
    try {
      const foods = await Food.find();
      if(foods) {
        return res.status(200).json({foods});
      }
    } catch(err) {
      return res.status(404).json({error: err});
    }
  }

  async listOne(req: Request, res: Response){
    try {
      const foods = await Food.findById(req.params.id);         
      if(foods) {
        return res.status(200).json({foods});
      }
    } catch(err) {
      return res.status(404).json({error: err});
    }
  }

  async create(req: Request, res: Response){
    const updatedFood = new Food(req.body);
    try {
      const foods = await updatedFood.save();
      if(foods) {
        return res.status(201).json({foods});
      }
    } catch(err) {
      return res.status(400).json({error: err});
    }
  }

  async update(req: Request, res: Response){    
    try {
      const foods = await Food.findByIdAndUpdate(req.params.id, req.body);
      if(foods) {
        return res.status(204).json({foods});
      }
    } catch(err) {
      console.log(err);
      return res.status(400).json({error: err});
    }
  }

  async delete(req: Request, res: Response){
    try {
      const foods = await Food.deleteOne({_id: req.params.id});
      if(foods) {
        return res.status(200).json({foods});
      }
    } catch(err) {
      return res.status(404).json({error: err});
    }
  }
}

export { FoodsController };