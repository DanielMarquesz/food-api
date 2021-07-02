import mongoose from 'mongoose'

const uri:string = 'mongodb://127.0.0.1:27017/localhost'

mongoose.connect(uri, (err: any) => {
  createIndexs: true
  if(err) {
    console.log(err)

  } else (
    console.log('Everything fine!')
  )
})

// Schemmas
export const BookSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true}
})

// Model
const Book = mongoose.model('Book', BookSchema)
export default Book