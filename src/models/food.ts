import { mongoose } from "../database";

export const FoodSchema = new mongoose.Schema({

  name: {type: String, required: true, unique: true},
  category: {type: String, required: true},
  quantity: {type: String, required: true},
  validity: {type: String, required: true}
  
})

const Food = mongoose.model('Food', FoodSchema);

export default Food;
