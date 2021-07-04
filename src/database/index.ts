import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const uri:any  = process.env.URI;

mongoose.set('useCreateIndex', true);

mongoose.connect(uri, (err: any) => {
 
  if(err) {
    console.log(err)
  } else (
    console.log('Database connected!')
  )
})

export { mongoose }