import mongoose from 'mongoose'

const uri:string = 'mongodb://127.0.0.1:27017/localhost'

mongoose.set('useCreateIndex', true);

mongoose.connect(uri, (err: any) => {
 
  if(err) {
    console.log(err)
  } else (
    console.log('Database connected!')
  )
})

export { mongoose }